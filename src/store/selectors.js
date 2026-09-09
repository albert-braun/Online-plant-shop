import { createSelector } from '@reduxjs/toolkit'
import { products } from '../data/products.js'

export const selectCartItems = (state) => state.cart.items
export const selectCatalog = (state) => state.catalog

export const selectCartCount = createSelector([selectCartItems], (items) =>
  items.reduce((sum, item) => sum + item.qty, 0),
)

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id)
    return sum + (product?.price || 0) * item.qty
  }, 0),
)

export const selectFilteredProducts = createSelector([selectCatalog], (catalog) => {
  let list = products.filter((p) => {
    const byCat = catalog.category === 'all' || p.category === catalog.category
    const byLight = catalog.light === 'all' || p.light === catalog.light
    const q = catalog.query.trim().toLowerCase()
    const byQuery =
      !q || p.name.toLowerCase().includes(q) || p.latin.toLowerCase().includes(q)
    return byCat && byLight && byQuery
  })
  if (catalog.sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
  if (catalog.sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
  if (catalog.sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name, 'en'))
  return list
})
