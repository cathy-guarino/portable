import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    'test': 1
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
})

// export actions
// export const { action } = appSlice.actions

// export reducer
export default appSlice.reducer
