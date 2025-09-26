import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./slices/apiSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
