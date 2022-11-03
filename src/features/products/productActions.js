/* eslint-disable no-undef */
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const createProduct = createAsyncThunk(
  'create/product',
  async ({ name, price, description, inventory }, { getState, rejectWithValue }) => {
    try {
      const { user } = getState()
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.access}`,
        },
      }
      const { data } = await axios.post(
        `${API_URL}/api/v1/products/`,
        { name, price, description, inventory },
        config,
      )
      return data
    } catch (error) {
      if (error.response && error.response.data.detail) {
        return rejectWithValue(error.response.data.detail)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)

export const updateInventory = createAsyncThunk(
  'update/inventory',
  async ({ id, inventory }, { getState, rejectWithValue }) => {
    try {
      const { user } = getState()
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.access}`,
        },
      }

      const { data } = await axios.patch(`${API_URL}/api/v1/products/${id}/`, { inventory }, config)
      return data
    } catch (error) {
      if (error.response && error.response.data.detail) {
        return rejectWithValue(error.response.data.detail)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)

export const getProducts = createAsyncThunk(
  'products/all',
  async (arg, { getState, rejectWithValue }) => {
    try {
      const { user } = getState()
      const config = {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      }
      const { data } = await axios.get(`${API_URL}/api/v1/products/`, config)
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
