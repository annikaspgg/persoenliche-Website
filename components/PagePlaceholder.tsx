type Props = {
  title: string;
};

export function PagePlaceholder({ title }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <h1
        className="font-display text-5xl text-text md:text-6xl lg:text-7xl"
        style={{ fontVariationSettings: "'opsz' 96" }}
      >
        {title}
      </h1>
    </section>
  );
}
