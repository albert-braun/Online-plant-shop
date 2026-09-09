import { useDispatch, useSelector } from 'react-redux'
import { setFormField, submitForm } from '../store/uiSlice.js'

export default function Contacts() {
  const dispatch = useDispatch()
  const { form, formSent } = useSelector((s) => s.ui)

  return (
    <section id="contacts" className="scroll-mt-[88px] bg-beige py-20 md:py-24">
      <div className="wrap grid gap-16 md:grid-cols-2">
      <div>
        <p className="mb-4 text-[12px] tracking-[0.28em] text-sand uppercase">contact</p>
        <h2 className="font-display text-[clamp(42px,6vw,76px)] leading-[0.92] font-medium">
          Visit
          <br />
          the atelier
        </h2>
        <ul className="mt-9 grid list-none gap-[18px] font-light text-mute">
          <li>
            <span className="mb-1 block text-[11px] tracking-[0.2em] text-mute uppercase">
              Address
            </span>
            Linienstraße 44, 10119 Berlin
          </li>
          <li>
            <span className="mb-1 block text-[11px] tracking-[0.2em] uppercase">Hours</span>
            Mon–Sun 11:00–21:00
          </li>
          <li>
            <span className="mb-1 block text-[11px] tracking-[0.2em] uppercase">Phone</span>
            <a href="tel:+493020674410">+49 30 2067 4410</a>
          </li>
          <li>
            <span className="mb-1 block text-[11px] tracking-[0.2em] uppercase">Email</span>
            <a href="mailto:albertbraun009@gmail.com">albertbraun009@gmail.com</a>
          </li>
        </ul>
      </div>
      <form
        className="grid content-start gap-4 font-light text-mute"
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(submitForm())
        }}
      >
        {formSent ? (
          <p className="font-display text-[32px] leading-[1.2] text-wood">
            Message sent. We will reply within a day.
          </p>
        ) : (
          <>
            <label className="grid gap-2 text-[12px] tracking-[0.16em] uppercase">
              Name
              <input
                required
                className="min-h-12 border border-ink/12 bg-transparent px-3.5 outline-none focus:border-wood"
                value={form.name}
                onChange={(e) => dispatch(setFormField({ field: 'name', value: e.target.value }))}
              />
            </label>
            <label className="grid gap-2 text-[12px] tracking-[0.16em] uppercase">
              Email
              <input
                required
                type="email"
                className="min-h-12 border border-ink/12 bg-transparent px-3.5 outline-none focus:border-wood"
                value={form.email}
                onChange={(e) => dispatch(setFormField({ field: 'email', value: e.target.value }))}
              />
            </label>
            <label className="grid gap-2 text-[12px] tracking-[0.16em] uppercase">
              Message
              <textarea
                required
                rows={4}
                className="resize-y border border-ink/12 bg-transparent px-3.5 py-3 outline-none focus:border-wood"
                value={form.message}
                onChange={(e) =>
                  dispatch(setFormField({ field: 'message', value: e.target.value }))
                }
              />
            </label>
            <button
              className="btn-fill btn-fill-dark inline-flex min-h-[52px] items-center justify-center px-7 text-[12px] tracking-[0.12em] uppercase outline outline-1 hover:text-cream"
              type="submit"
            >
              Write to us
            </button>
          </>
        )}
      </form>
      </div>
    </section>
  )
}
