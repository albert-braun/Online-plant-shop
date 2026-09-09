import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { products, formatPrice } from '../data/products.js'
import { changeQty, clearCart } from '../store/cartSlice.js'
import { closeCart, closeCheckout, openCheckout } from '../store/uiSlice.js'
import { selectCartItems, selectCartTotal } from '../store/selectors.js'

export default function CartDrawer() {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const { cartOpen, checkout } = useSelector((s) => s.ui)

  useEffect(() => {
    document.body.style.overflow = cartOpen || checkout ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [cartOpen, checkout])

  return (
    <>
      <aside className={`fixed inset-0 z-40 ${cartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-ink/45 transition-opacity duration-350 ${
            cartOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => dispatch(closeCart())}
        />
        <div
          className={`absolute top-0 right-0 flex h-full w-full max-w-[420px] flex-col bg-cream p-6 text-ink transition-transform duration-500 ${
            cartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <header className="mb-5 flex items-center justify-between">
            <h2 className="font-display text-[40px] font-medium">Bag</h2>
            <button
              className="grid h-[42px] w-[42px] place-items-center rounded-full border border-ink/12 text-[28px]"
              onClick={() => dispatch(closeCart())}
              aria-label="Close"
            >
              ×
            </button>
          </header>
          {items.length === 0 ? (
            <p className="py-6 font-light text-mute">
              Empty for now. Add a plant from the collection.
            </p>
          ) : (
            <ul className="grid flex-1 gap-4 overflow-auto">
              {items.map((item) => {
                const p = products.find((x) => x.id === item.id)
                return (
                  <li key={item.id} className="grid grid-cols-[88px_1fr] items-center gap-3">
                    <img src={p.image} alt="" className="h-[88px] w-[88px] bg-[#e4d9c8] object-cover" />
                    <div>
                      <strong className="block font-display text-[22px] font-medium">{p.name}</strong>
                      <span>{formatPrice(p.price)}</span>
                      <div className="mt-2 flex items-center gap-2.5">
                        <button
                          className="h-7 w-7 border border-ink/12 transition-colors hover:bg-beige"
                          onClick={() => dispatch(changeQty({ id: item.id, delta: -1 }))}
                        >
                          −
                        </button>
                        <em className="not-italic">{item.qty}</em>
                        <button
                          className="h-7 w-7 border border-ink/12 transition-colors hover:bg-beige"
                          onClick={() => dispatch(changeQty({ id: item.id, delta: 1 }))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
          <div className="grid gap-3.5 border-t border-ink/12 pt-4">
            <p className="flex justify-between text-base">
              Total <strong>{formatPrice(total)}</strong>
            </p>
            <button
              className="btn-fill inline-flex min-h-[52px] items-center justify-center px-7 text-[12px] tracking-[0.12em] uppercase outline outline-1 disabled:pointer-events-none disabled:opacity-40 hover:text-wood-deep"
              disabled={!items.length}
              onClick={() => dispatch(openCheckout())}
            >
              Checkout
            </button>
          </div>
        </div>
      </aside>

      {checkout && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-ink/55 p-6">
          <div className="grid max-w-[440px] animate-[fade-up_0.4s_ease] gap-4 bg-cream px-10 py-12 text-center">
            <h2 className="font-display text-[40px] font-medium">Order received</h2>
            <p className="font-light text-mute">
              We will contact you to arrange delivery. Payment on receipt.
            </p>
            <button
              className="btn-fill inline-flex min-h-[52px] items-center justify-center px-7 text-[12px] tracking-[0.12em] uppercase outline outline-1 hover:text-wood-deep"
              onClick={() => {
                dispatch(closeCheckout())
                dispatch(clearCart())
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
