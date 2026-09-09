import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      const id = action.payload
      const found = state.items.find((item) => item.id === id)
      if (found) found.qty += 1
      else state.items.push({ id, qty: 1 })
    },
    changeQty(state, action) {
      const { id, delta } = action.payload
      const found = state.items.find((item) => item.id === id)
      if (!found) return
      found.qty += delta
      state.items = state.items.filter((item) => item.qty > 0)
    },
    clearCart(state) {
      state.items = []
    },
  },
})

export const { addItem, changeQty, clearCart } = cartSlice.actions
export default cartSlice.reducer
