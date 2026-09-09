import { img } from '../data/products.js'

export default function Hero() {
  const goCatalog = () =>
    document.querySelector('#catalog')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-[radial-gradient(ellipse_at_75%_40%,rgba(90,62,40,0.45),transparent_55%),linear-gradient(115deg,#1a120c_0%,#3a2a1f_46%,#24180f_100%)] pt-[110px] pb-16 text-cream md:pt-[120px]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="wrap relative z-2 grid items-center gap-8 md:grid-cols-[1.05fr_1fr] md:gap-12">
      <div className="animate-fade-up max-w-[640px]">
        <p className="mb-4 text-[12px] tracking-[0.28em] text-sand uppercase">
          plant atelier · berlin
        </p>
        <h1 className="font-display text-[56px] leading-[0.92] font-medium tracking-[-0.03em] md:text-[clamp(56px,6.5vw,96px)]">
          Plants
          <br />
          for a quiet
          <em className="text-beige italic"> home</em>
        </h1>
        <p className="mt-7 mb-9 max-w-[420px] text-[17px] font-light text-cream/70">
          A small collection of large specimens, bonsai and hanging forms. No noise,
          no excess — only living green and warm wood.
        </p>
        <button
          className="btn-fill inline-flex min-h-[52px] items-center px-7 text-[12px] tracking-[0.12em] uppercase outline outline-1 hover:text-wood-deep"
          onClick={goCatalog}
        >
          View collection
        </button>
      </div>
      <div className="relative mt-5 h-[380px] md:mt-0 md:h-[min(70vh,620px)]">
        <img
          className="animate-float absolute top-[-6%] right-[-8%] w-[78%] object-contain drop-shadow-[0_28px_40px_rgba(0,0,0,0.35)]"
          src={img('foliage.png')}
          alt=""
        />
        <img
          className="animate-sway absolute top-[-2%] left-[4%] w-[46%] object-contain drop-shadow-[0_28px_40px_rgba(0,0,0,0.35)]"
          src={img('pothos.png')}
          alt="Hanging pothos"
        />
        <img
          className="animate-float-slow absolute right-[10%] bottom-[-4%] w-[42%] object-contain drop-shadow-[0_28px_40px_rgba(0,0,0,0.35)]"
          src={img('bonsai.png')}
          alt="Bonsai"
        />
      </div>
      </div>
    </section>
  )
}
