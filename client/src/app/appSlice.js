import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    lastSearch: '', 
    selectedArticle: {
      id: null, 
      title: null
    }
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {

    selectArticle: (state, action) => {
        const {id, title} = action.payload

        id 
          ? state.selectedArticle.id = id
          : state.selectedArticle.id = null

        title
          ? state.selectedArticle.title = title
          : state.selectedArticle.title = null
    },

    setLastSearch: (state, action) => {
        state.lastSearch = action.payload
    }
    
  },
  extraReducers: (builder) => {}
})

// export actions
export const { selectArticle, setLastSearch } = appSlice.actions

// export reducer
export default appSlice.reducer
