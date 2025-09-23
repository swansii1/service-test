import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/apiSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
