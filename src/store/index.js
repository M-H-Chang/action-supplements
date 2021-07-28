import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { supplementApi } from "./supplementApi";

export const store = configureStore({
  reducer: {
    [supplementApi.reducerPath]: supplementApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(supplementApi.middleware),
});
setupListeners(store.dispatch)
