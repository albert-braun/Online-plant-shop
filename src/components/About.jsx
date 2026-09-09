export default function About() {
  return (
    <section id="about" className="scroll-mt-[88px] py-20 md:py-24">
      <div className="wrap">
      <div className="mb-14 grid items-end gap-10 md:grid-cols-[0.7fr_1.1fr_1fr]">
        <p className="text-[12px] tracking-[0.28em] text-sand uppercase">philosophy</p>
        <h2 className="font-display text-[clamp(42px,6vw,76px)] leading-[0.92] font-medium">
          Few plants.
          <br />
          More air.
        </h2>
        <div className="space-y-4 font-light text-mute">
          <p>
            FOLIA is a small atelier in Berlin-Mitte. We select mature plants, pot them
            in stone and wood, and only send those that already live on their own.
          </p>
          <p>
            The house colours are black, beige and dark wood. Green reads quieter, and
            more precisely, in that field.
          </p>
        </div>
      </div>
      <ul className="grid border-t border-ink/12 md:grid-cols-3">
        {[
          ['12+', 'years in botany'],
          ['90', 'plants in the hall'],
          ['2–5', 'days EU delivery'],
        ].map(([n, t], i) => (
          <li
            key={t}
            className={`py-7 ${i < 2 ? 'border-b border-ink/12 md:border-b-0 md:border-r' : ''}`}
          >
            <strong className="block font-display text-5xl font-medium text-wood">{n}</strong>
            <span className="font-light text-mute">{t}</span>
          </li>
        ))}
      </ul>
      </div>
    </section>
  )
}
