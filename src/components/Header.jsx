import { useDispatch, useSelector } from 'react-redux'
import { closeMenu, openCart, setToast, toggleMenu } from '../store/uiSlice.js'
import { selectCartCount } from '../store/selectors.js'

const links = [
  ['#top', 'Home'],
  ['#catalog', 'Shop'],
  ['#catalog', 'Products'],
  ['#about', 'Pages'],
]

export default function Header() {
  const dispatch = useDispatch()
  const count = useSelector(selectCartCount)
  const menuOpen = useSelector((s) => s.ui.menuOpen)

  const go = (hash) => {
    dispatch(closeMenu())
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  const openSearch = () => {
    dispatch(closeMenu())
    document.querySelector('#catalog')?.scrollIntoView({ behavior: 'smooth' })
    window.setTimeout(() => document.querySelector('#catalog-search')?.focus(), 450)
  }

  return (
    <header className="sticky top-0 z-30 border-b border-ink/8 bg-white text-ink">
      <div className="wrap relative flex h-[72px] items-center justify-between md:h-[84px]">
        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } max-md:absolute max-md:top-[72px] max-md:inset-x-0 max-md:flex-col max-md:border-b max-md:border-ink/8 max-md:bg-white max-md:px-5 max-md:py-3 md:flex md:items-center md:gap-8`}
        >
          {links.map(([hash, label], i) => (
            <button
              key={`${hash}-${label}`}
              className={`text-[14px] tracking-[0.02em] transition-opacity hover:opacity-100 ${
                i === 0 ? 'underline decoration-1 underline-offset-[6px]' : 'opacity-70'
              }`}
              onClick={() => go(hash)}
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          className="font-display text-[26px] font-semibold tracking-[0.22em] md:absolute md:left-1/2 md:-translate-x-1/2 md:text-[28px]"
          onClick={() => go('#top')}
        >
          FOLIA
        </button>

        <div className="flex items-center gap-1 md:gap-2">
          <IconButton label="Search" onClick={openSearch}>
            <SearchIcon />
          </IconButton>
          <IconButton label="Account" onClick={() => go('#contacts')}>
            <UserIcon />
          </IconButton>
          <IconButton
            label="Wishlist"
            onClick={() => {
              dispatch(setToast('Saved to your list'))
              window.setTimeout(() => dispatch(setToast('')), 2200)
            }}
          >
            <HeartIcon />
          </IconButton>
          <button
            className="relative grid h-11 w-11 place-items-center"
            onClick={() => dispatch(openCart())}
            aria-label="Cart"
          >
            <BagIcon />
            {count > 0 && (
              <span className="absolute top-1.5 right-1.5 grid h-[16px] min-w-[16px] place-items-center bg-ink px-1 text-[10px] text-white">
                {count}
              </span>
            )}
          </button>
          <button
            className="grid h-11 w-11 place-items-center md:hidden"
            onClick={() => dispatch(toggleMenu())}
            aria-label="Menu"
          >
            <span className="flex w-[18px] flex-col gap-1.5">
              <span className="block h-px bg-current" />
              <span className="block h-px bg-current" />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

function IconButton({ label, onClick, children }) {
  return (
    <button className="grid h-11 w-11 place-items-center" onClick={onClick} aria-label={label}>
      {children}
    </button>
  )
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 16.5 20 20.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M5.5 19.2c1.2-3.2 3.5-4.8 6.5-4.8s5.3 1.6 6.5 4.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 19.2s-6.4-4-8.2-7.6C2.4 9 4 6.2 6.8 6.2c1.7 0 3.1 1 3.7 2.4.6-1.4 2-2.4 3.7-2.4 2.8 0 4.4 2.8 3 5.4-1.8 3.6-8.2 7.6-8.2 7.6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 8V7a5 5 0 0 1 10 0v1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M6 8h12l-.8 12H6.8L6 8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}
