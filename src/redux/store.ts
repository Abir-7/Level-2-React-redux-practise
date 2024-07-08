import { configureStore } from "@reduxjs/toolkit";
import authRedcer from "./feature/auth/authSlice";
import { baseApi } from "./api/baseApi";
export const store = configureStore({
  reducer: {
    auth: authRedcer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
