import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartSlice.js'
import { setToast } from '../store/uiSlice.js'
import { formatPrice } from '../data/products.js'

export default function ProductCard({ product, index }) {
  const dispatch = useDispatch()

  const add = () => {
    dispatch(addItem(product.id))
    dispatch(setToast(`${product.name} — added to bag`))
    window.setTimeout(() => dispatch(setToast('')), 2200)
  }

  return (
    <article
      className="flex min-h-full flex-col bg-cream transition-transform duration-500 hover:-translate-y-2"
      style={{ animation: `fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * 40}ms both` }}
    >
      <div className="grid h-56 place-items-center overflow-hidden bg-[#e4d9c8] sm:h-60">
        <img
          src={product.image}
          alt={product.name}
          className={`h-full w-full object-contain p-4 transition-transform duration-700 hover:scale-105 ${
            product.featured ? 'p-5' : ''
          }`}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 px-5 pt-5 pb-5">
        <p className="text-[11px] tracking-[0.12em] text-mute uppercase">{product.latin}</p>
        <h3 className="font-display text-[26px] leading-[0.95] font-medium xl:text-[28px]">{product.name}</h3>
        <p className="line-clamp-2 text-sm font-light text-mute">{product.desc}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <span className="font-display text-[26px]">{formatPrice(product.price)}</span>
          <button
            className="btn-fill btn-fill-dark inline-flex min-h-[42px] items-center px-[18px] text-[12px] tracking-[0.12em] uppercase outline outline-1 hover:text-cream"
            onClick={add}
          >
            Add to bag
          </button>
        </div>
      </div>
    </article>
  )
}
