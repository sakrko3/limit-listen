/* eslint-disable no-undef */
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const userLogin = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `${API_URL}/api/v1/auth/jwt/create/`,
        { email, password },
        config,
      )
      localStorage.setItem('access', data.access)
      localStorage.setItem('refresh', data.refresh)
      return data
    } catch (error) {
      console.log(error)
      if (error.response && error.response.data.detail) {
        return rejectWithValue(error.response.data.detail)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)

export const registerUser = createAsyncThunk(
  'user/register',
  // eslint-disable-next-line camelcase
  async ({ email, first_name, last_name, role, password, re_password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      await axios.post(
        `${API_URL}/api/v1/auth/users/`,
        // eslint-disable-next-line camelcase
        { email, first_name, last_name, role, password, re_password },
        config,
      )
    } catch (error) {
      if (error.response && error.response.data.email) {
        return rejectWithValue(error.response.data.email)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (arg, { getState, rejectWithValue }) => {
    try {
      const { user } = getState()

      const config = {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      }
      const { data } = await axios.get(`${API_URL}/api/v1/auth/users/me/`, config)
      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)
