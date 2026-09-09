import { useSelector } from 'react-redux'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Catalog from './components/Catalog.jsx'
import Care from './components/Care.jsx'
import Contacts from './components/Contacts.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import CartDrawer from './components/CartDrawer.jsx'

export default function App() {
  const toast = useSelector((s) => s.ui.toast)

  return (
    <>
      <Header />
      <Hero />
      <section className="overflow-hidden border-y border-sand/15 bg-ink py-3.5 text-sand" aria-hidden="true">
        <div className="animate-marquee flex w-max gap-10 text-[12px] tracking-[0.28em] uppercase">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>bonsai · tropical · large · hanging · care ·</span>
          ))}
        </div>
      </section>
      <About />
      <Catalog />
      <Care />
      <Contacts />
      <SiteFooter />
      <CartDrawer />
      {toast && (
        <div className="fixed bottom-7 left-1/2 z-[60] -translate-x-1/2 bg-ink px-[18px] py-3 text-[13px] tracking-[0.06em] text-cream">
          {toast}
        </div>
      )}
    </>
  )
}
