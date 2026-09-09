import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice.js'
import catalogReducer from './catalogSlice.js'
import uiReducer from './uiSlice.js'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    catalog: catalogReducer,
    ui: uiReducer,
  },
})
