import { test } from "node:test";
import assert from "node:assert/strict";
import termineData from "../content/termine.json" with { type: "json" };
import { berlinToday, splitTermine, type Termin } from "./termine.ts";

const termine = termineData as Termin[];
const titlesOn = (today: string) => splitTermine(termine, today);

test("berlinToday nutzt Europe/Berlin statt UTC", () => {
  // 22:30 UTC am 26.10. = 23:30 in Berlin (Winterzeit) → noch 26.10.
  assert.equal(berlinToday(new Date("2026-10-26T22:30:00Z")), "2026-10-26");
  // 23:30 UTC am 26.10. = 00:30 am 27.10. in Berlin
  assert.equal(berlinToday(new Date("2026-10-26T23:30:00Z")), "2026-10-27");
  // Sommerzeit (UTC+2): 22:30 UTC am 1.7. = 00:30 am 2.7. in Berlin
  assert.equal(berlinToday(new Date("2026-07-01T22:30:00Z")), "2026-07-02");
});

test("20.10.: alles bis 19.10. vergangen, 26.10. kommend", () => {
  const { upcoming, past } = titlesOn("2026-10-20");
  assert.ok(past.every((t) => t.date <= "2026-10-19"));
  assert.ok(upcoming.every((t) => t.date >= "2026-10-20"));
  assert.equal(upcoming[0].date, "2026-10-26");
  assert.deepEqual(
    past.slice(0, 3).map((t) => [t.date, t.title]),
    [
      ["2026-10-17", "Konzert in der Stadtkirche Ludwigsburg"],
      ["2026-10-11", "Solo-Konzert mit dem Sprungbrettorchester"],
      ["2026-10-10", "Solo-Konzert mit dem Sprungbrettorchester"],
    ],
  );
});

const sonstGuteNacht = (list: Termin[]) =>
  list.some((t) => t.title.startsWith("Sonst gute Nacht"));

test("26.10.: Sonst gute Nacht noch Coming Up", () => {
  const { upcoming, past } = titlesOn("2026-10-26");
  assert.ok(sonstGuteNacht(upcoming));
  assert.ok(!sonstGuteNacht(past));
});

test("27.10.: Sonst gute Nacht vergangen", () => {
  const { upcoming, past } = titlesOn("2026-10-27");
  assert.ok(!sonstGuteNacht(upcoming));
  assert.ok(sonstGuteNacht(past));
});

test("28.11.: Stahlgipfel vergangen", () => {
  const { past } = titlesOn("2026-11-28");
  assert.equal(past[0].title, "Stahlgipfel");
});

test("26.12.: Termin vom 25.12. vergangen", () => {
  const { upcoming, past } = titlesOn("2026-12-26");
  assert.equal(upcoming.length, 0);
  assert.equal(past[0].date, "2026-12-25");
});

test("mehrtägige Termine: Enddatum entscheidet", () => {
  const multi: Termin = { date: "2026-10-10", endDate: "2026-10-12", title: "X", venue: "Y" };
  assert.equal(splitTermine([multi], "2026-10-12").upcoming.length, 1);
  assert.equal(splitTermine([multi], "2026-10-13").past.length, 1);
});

test("Sortierung, keine Verluste, keine Duplikate", () => {
  for (const today of ["2026-01-01", "2026-07-02", "2026-10-20", "2027-01-01"]) {
    const { upcoming, past } = titlesOn(today);
    assert.equal(upcoming.length + past.length, termine.length);
    const keys = [...upcoming, ...past].map((t) => `${t.date}|${t.title}|${t.venue}`);
    assert.equal(new Set(keys).size, keys.length);
    for (let i = 1; i < upcoming.length; i++)
      assert.ok(upcoming[i - 1].date <= upcoming[i].date);
    for (let i = 1; i < past.length; i++)
      assert.ok(past[i - 1].date >= past[i].date);
  }
});
