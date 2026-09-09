import { useDispatch, useSelector } from 'react-redux'
import { categories, lights } from '../data/products.js'
import { setCategory, setLight, setQuery, setSort } from '../store/catalogSlice.js'
import { selectFilteredProducts } from '../store/selectors.js'
import ProductCard from './ProductCard.jsx'

export default function Catalog() {
  const dispatch = useDispatch()
  const catalog = useSelector((s) => s.catalog)
  const filtered = useSelector(selectFilteredProducts)

  return (
    <section id="catalog" className="scroll-mt-[88px] bg-[#efe8dc] py-20 md:py-24">
      <div className="wrap">
      <header className="mb-9 flex items-end justify-between gap-6">
        <div>
          <p className="mb-4 text-[12px] tracking-[0.28em] text-sand uppercase">collection</p>
          <h2 className="font-display text-[clamp(36px,4.5vw,58px)] leading-[0.92] font-medium">
            Choose a plant
          </h2>
        </div>
        <p className="font-light text-mute">{filtered.length} in stock</p>
      </header>

      <div className="mb-9 grid gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`rounded-full border px-4 py-2.5 text-[13px] transition duration-300 ${
                catalog.category === c.id
                  ? 'border-ink bg-ink text-cream'
                  : 'border-ink/12 hover:border-wood'
              }`}
              onClick={() => dispatch(setCategory(c.id))}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_1fr]">
          <label className="flex min-h-12 items-center gap-2 border border-ink/12 px-3.5 focus-within:border-wood">
            <SearchIcon />
            <input
              id="catalog-search"
              className="min-h-[46px] w-full bg-transparent outline-none"
              value={catalog.query}
              onChange={(e) => dispatch(setQuery(e.target.value))}
              placeholder="Search by name"
            />
          </label>
          <select
            className="min-h-12 border border-ink/12 bg-transparent px-3.5 outline-none focus:border-wood"
            value={catalog.light}
            onChange={(e) => dispatch(setLight(e.target.value))}
          >
            {lights.map((l) => (
              <option key={l.id} value={l.id}>
                {l.label}
              </option>
            ))}
          </select>
          <select
            className="min-h-12 border border-ink/12 bg-transparent px-3.5 outline-none focus:border-wood"
            value={catalog.sort}
            onChange={(e) => dispatch(setSort(e.target.value))}
          >
            <option value="featured">By collection</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="name">By name</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="py-6 font-light text-mute">
          Nothing found. Clear a filter or change the search.
        </p>
      )}
      </div>
    </section>
  )
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 20l-3.2-3.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}
