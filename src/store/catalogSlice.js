import { createSlice } from '@reduxjs/toolkit'

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    category: 'all',
    light: 'all',
    sort: 'featured',
    query: '',
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload
    },
    setLight(state, action) {
      state.light = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setQuery(state, action) {
      state.query = action.payload
    },
  },
})

export const { setCategory, setLight, setSort, setQuery } = catalogSlice.actions
export default catalogSlice.reducer
