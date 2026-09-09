import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    cartOpen: false,
    menuOpen: false,
    checkout: false,
    toast: '',
    formSent: false,
    form: { name: '', email: '', message: '' },
    newsletterEmail: '',
    newsletterSent: false,
  },
  reducers: {
    openCart(state) {
      state.cartOpen = true
      state.menuOpen = false
    },
    closeCart(state) {
      state.cartOpen = false
    },
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen
    },
    closeMenu(state) {
      state.menuOpen = false
    },
    openCheckout(state) {
      state.checkout = true
      state.cartOpen = false
    },
    closeCheckout(state) {
      state.checkout = false
    },
    setToast(state, action) {
      state.toast = action.payload
    },
    setFormField(state, action) {
      const { field, value } = action.payload
      state.form[field] = value
    },
    submitForm(state) {
      state.formSent = true
    },
    setNewsletterEmail(state, action) {
      state.newsletterEmail = action.payload
    },
    submitNewsletter(state) {
      state.newsletterSent = true
    },
  },
})

export const {
  openCart,
  closeCart,
  toggleMenu,
  closeMenu,
  openCheckout,
  closeCheckout,
  setToast,
  setFormField,
  submitForm,
  setNewsletterEmail,
  submitNewsletter,
} = uiSlice.actions
export default uiSlice.reducer
