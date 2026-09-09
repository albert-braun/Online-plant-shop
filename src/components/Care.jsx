export default function Care() {
  return (
    <section id="care" className="scroll-mt-[88px] pb-20 md:pb-24">
      <div className="wrap">
      <div className="bg-wood-deep px-7 py-12 text-cream md:px-16 md:py-16">
        <p className="mb-4 text-[12px] tracking-[0.28em] text-sand uppercase">care</p>
        <h2 className="font-display text-[clamp(42px,6vw,76px)] leading-[0.92] font-medium">
          Three rules that are enough
        </h2>
        <ol className="mt-9 grid list-none gap-8 md:grid-cols-3">
          {[
            ['Light, not sun.', 'Most tropicals live by an east-facing window.'],
            ['Infrequent water.', 'Water when the top of the soil is dry to the first knuckle.'],
            ['Do not move it.', 'A plant settles into a place. Relocation is stress.'],
          ].map(([title, body], i) => (
            <li key={title} className="text-cream/70">
              <span className="mb-3 block font-display text-[28px] text-sand">
                0{i + 1}
              </span>
              <strong className="mb-2 block font-medium text-cream">{title}</strong>
              {body}
            </li>
          ))}
        </ol>
      </div>
      </div>
    </section>
  )
}
