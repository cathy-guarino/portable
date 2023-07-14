import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import { appApi } from './appApi';

export const store = configureStore({
  reducer: {
    app: appReducer, 
    [appApi.reducerPath]: appApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(appApi.middleware)
})

