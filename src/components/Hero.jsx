import { img } from '../data/products.js'

export default function Hero() {
  const goCatalog = () =>
    document.querySelector('#catalog')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="top" className="grid min-h-[calc(100svh-84px)] bg-ink md:grid-cols-2">
      <div className="relative min-h-[62svh] overflow-hidden md:min-h-[calc(100svh-84px)]">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={img('anthurium.jpg')}
          alt=""
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-16 text-center text-white">
          <p className="text-[12px] tracking-[0.42em] uppercase">New collection</p>
          <h1 className="font-display my-3 text-[clamp(52px,8vw,108px)] leading-[0.88] font-semibold tracking-[-0.03em]">
            Quiet green
          </h1>
          <p className="mb-8 text-[12px] tracking-[0.42em] uppercase">New collection</p>
          <button
            className="bg-white px-9 py-3.5 text-[12px] tracking-[0.18em] text-ink uppercase transition duration-300 hover:bg-beige"
            onClick={goCatalog}
          >
            Shop now
          </button>
        </div>
      </div>

      <div className="relative hidden min-h-[calc(100svh-84px)] overflow-hidden bg-[#7aa39a] md:block">
        <img
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
          src={img('snake.jpg')}
          alt="Atelier plants"
        />
      </div>
    </section>
  )
}
