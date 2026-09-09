import { useDispatch, useSelector } from 'react-redux'
import { img } from '../data/products.js'
import { setCategory } from '../store/catalogSlice.js'
import { setNewsletterEmail, submitNewsletter } from '../store/uiSlice.js'

const shopLinks = [
  ['all', 'All plants'],
  ['bonsai', 'Bonsai'],
  ['hanging', 'Hanging'],
  ['easy', 'Easy care'],
]

const helpLinks = [
  ['#about', 'About us'],
  ['#contacts', 'Contact'],
  ['#care', 'Care'],
  ['#catalog', 'Collection'],
]

export default function SiteFooter() {
  const dispatch = useDispatch()
  const { newsletterEmail, newsletterSent } = useSelector((s) => s.ui)

  const go = (hash) => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="bg-[#f4f4f4] text-ink">
      <section className="wrap grid items-stretch py-10 md:grid-cols-[1fr_1.2fr_1fr] md:py-16">
        <img
          className="h-[200px] w-full object-cover md:h-[300px]"
          src={img('calathea.jpg')}
          alt=""
        />
        <div className="relative z-10 flex flex-col items-center justify-center bg-white px-6 py-12 text-center shadow-[0_0_0_1px_rgba(20,17,14,0.06)] md:-mx-8 md:px-10">
          <h2 className="font-display text-[clamp(32px,4vw,48px)] leading-[1.05] font-semibold">
            Subscribe To Our Newsletter
          </h2>
          <p className="mt-3 mb-7 max-w-[340px] text-[13px] leading-relaxed text-mute">
            Stay ahead of the drop. New arrivals, restocks and care notes once a week.
          </p>
          {newsletterSent ? (
            <p className="text-[14px] text-wood">You are on the list.</p>
          ) : (
            <form
              className="flex w-full max-w-[420px]"
              onSubmit={(e) => {
                e.preventDefault()
                dispatch(submitNewsletter())
              }}
            >
              <input
                required
                type="email"
                className="min-h-[48px] flex-1 border border-ink/20 bg-white px-4 text-[14px] outline-none"
                placeholder="Email address"
                value={newsletterEmail}
                onChange={(e) => dispatch(setNewsletterEmail(e.target.value))}
              />
              <button
                className="min-h-[48px] bg-ink px-5 text-[12px] tracking-[0.08em] whitespace-nowrap text-white uppercase"
                type="submit"
              >
                Subscribe Now
              </button>
            </form>
          )}
        </div>
        <img
          className="h-[200px] w-full object-cover md:h-[280px]"
          src={img('olive.jpg')}
          alt=""
        />
      </section>

      <footer>
        <div className="wrap grid gap-10 border-t border-ink/10 py-14 md:grid-cols-4 md:gap-8">
          <div>
            <p className="font-display text-[28px] font-semibold tracking-[0.18em]">FOLIA</p>
            <p className="mt-4 max-w-[240px] text-[13px] leading-relaxed text-mute">
              A quiet plant atelier in Berlin. Mature specimens, stone pots, and rooms with more
              air.
            </p>
          </div>
          <FooterShop title="Shop" links={shopLinks} />
          <FooterCol title="Help" links={helpLinks} onGo={go} />
          <div>
            <p className="mb-4 text-[14px] font-semibold">Get in touch</p>
            <a
              className="block text-[13px] text-mute hover:text-ink"
              href="mailto:albertbraun009@gmail.com"
            >
              albertbraun009@gmail.com
            </a>
            <p className="mt-2 text-[13px] text-mute">Mon–Sun · 11:00–21:00</p>
            <p className="mt-2 text-[13px] text-mute">Linienstraße 44, 10119 Berlin</p>
          </div>
        </div>
        <p className="border-t border-ink/10 py-5 text-center text-[12px] text-mute">
          Copyright © {new Date().getFullYear()} FOLIA. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

function FooterShop({ title, links }) {
  const dispatch = useDispatch()
  return (
    <div>
      <p className="mb-4 text-[14px] font-semibold">{title}</p>
      <ul className="grid list-none gap-2.5">
        {links.map(([id, label]) => (
          <li key={id}>
            <button
              className="text-[13px] text-mute transition-colors hover:text-ink"
              onClick={() => {
                dispatch(setCategory(id))
                document.querySelector('#catalog')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FooterCol({ title, links, onGo }) {
  return (
    <div>
      <p className="mb-4 text-[14px] font-semibold">{title}</p>
      <ul className="grid list-none gap-2.5">
        {links.map(([hash, label]) => (
          <li key={`${title}-${label}`}>
            <button
              className="text-[13px] text-mute transition-colors hover:text-ink"
              onClick={() => onGo(hash)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
