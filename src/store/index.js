import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import supplementApi from "./supplementApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [supplementApi.reducerPath]: supplementApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(supplementApi.middleware),
});
