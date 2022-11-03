import { createSlice } from '@reduxjs/toolkit'
import { createProduct, updateInventory, getProducts } from './productActions'

const initialState = {
  loading: false,
  error: null,
  success: false,
  products: [],
}
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [createProduct.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [createProduct.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
      state.products.push(payload)
    },
    [createProduct.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [updateInventory.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [updateInventory.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
      state.products.find((product) => product.id == payload.id).inventory = payload.inventory
    },
    [updateInventory.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [getProducts.pending]: (state) => {
      state.loading = true
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.products = payload
    },
    [getProducts.rejected]: (state) => {
      state.loading = false
    },
  },
})
export const { logout } = productSlice.actions

export default productSlice.reducer
