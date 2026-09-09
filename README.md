# FOLIA — online plant shop

Minimalist e-commerce mockup for a Berlin plant atelier. Built as a single-page store: catalog, filters, cart, and contact form.

**Live site:** https://albert-braun.github.io/Online-plant-shop/

## About

FOLIA is a quiet luxury plant shop UI. The palette is black, beige and dark wood. Large serif headlines sit next to cut-out plant photography. The collection has 20 plants in euro prices, with search, light and category filters, and a sliding bag.

This is a frontend demo (no backend). Checkout and the contact form stay on the client.

## Stack

- React 19 (JSX)
- Vite
- Tailwind CSS v4
- Redux Toolkit — cart, catalog filters, UI (drawer, toast, form)

## Scripts

```bash
npm install
npm run dev
```

Open http://localhost:5173/

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/   Header, Hero, Catalog, cart drawer, contacts
  store/        Redux slices and selectors
  data/         Product list
public/images/  Plant photos
```

## Contact (demo)

- Atelier: Linienstraße 44, 10119 Berlin
- Email: albertbraun009@gmail.com
