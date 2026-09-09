import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu, openCart, toggleMenu } from '../store/uiSlice.js'
import { selectCartCount } from '../store/selectors.js'

const links = [
  ['#catalog', 'Collection'],
  ['#about', 'Atelier'],
  ['#care', 'Care'],
  ['#contacts', 'Contact'],
]

export default function Header() {
  const dispatch = useDispatch()
  const count = useSelector(selectCartCount)
  const menuOpen = useSelector((s) => s.ui.menuOpen)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (hash) => {
    dispatch(closeMenu())
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 text-cream transition-[background,backdrop-filter] duration-400 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md' : ''
      }`}
    >
      <div className="wrap grid grid-cols-[1fr_auto_1fr] items-center py-5">
      <button
        className="justify-self-start font-display text-[28px] font-medium tracking-[0.28em]"
        onClick={() => go('#top')}
      >
        FOLIA
      </button>
      <nav
        className={`max-md:absolute max-md:top-full max-md:inset-x-0 max-md:flex-col max-md:gap-0 max-md:bg-ink max-md:px-6 max-md:pb-5 ${
          menuOpen ? 'max-md:flex' : 'max-md:hidden'
        } flex gap-8`}
      >
        {links.map(([hash, label]) => (
          <button
            key={hash}
            className="text-[13px] tracking-[0.14em] uppercase opacity-80 transition-opacity duration-300 hover:opacity-100 max-md:py-3 max-md:text-left"
            onClick={() => go(hash)}
          >
            {label}
          </button>
        ))}
      </nav>
      <div className="flex items-center justify-end gap-3">
        <button
          className="relative grid h-[42px] w-[42px] place-items-center rounded-full border border-cream/25 transition duration-300 hover:scale-105 hover:bg-cream/10"
          onClick={() => dispatch(openCart())}
          aria-label="Cart"
        >
          <CartIcon />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-beige px-1 text-[11px] text-ink">
              {count}
            </span>
          )}
        </button>
        <button
          className="flex h-[42px] w-[42px] flex-col justify-center gap-1.5 md:hidden"
          onClick={() => dispatch(toggleMenu())}
          aria-label="Menu"
        >
          <span className="block h-px bg-current" />
          <span className="block h-px bg-current" />
        </button>
      </div>
      </div>
    </header>
  )
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 7h15l-1.5 9h-12L5 4H2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="20" r="1.2" fill="currentColor" />
      <circle cx="18" cy="20" r="1.2" fill="currentColor" />
    </svg>
  )
}
