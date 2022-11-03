/* eslint-disable camelcase */
import { createSlice } from '@reduxjs/toolkit'
import { getUserDetails, registerUser, userLogin } from './userActions'

const initialState = {
  loading: false,
  user: {
    id: 0,
    role: 0,
    first_name: '',
    last_name: '',
    email: '',
  },
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  error: null,
  success: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      state.loading = false
      state.user = { id: 0, role: 0, first_name: '', last_name: '', email: '' }
      state.access = null
      state.refresh = null
      state.error = null
      state.success = false
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.access = payload.access
      state.refresh = payload.refresh
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state) => {
      state.loading = false
      state.success = true
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [getUserDetails.pending]: (state) => {
      state.loading = true
    },
    [getUserDetails.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.user = payload
    },
    [getUserDetails.rejected]: (state) => {
      state.loading = false
    },
  },
})
export const { logout } = userSlice.actions

export default userSlice.reducer
