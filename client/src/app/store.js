import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import { appApi } from './appApi';

export const store = configureStore({
  reducer: {
    app: appReducer, 
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(appApi.middleware)
})

// setupListeners(store.dispatch)