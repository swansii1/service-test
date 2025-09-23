import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/apiSlice";
import patchReducer from "./slices/putSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    patch: patchReducer,
  },
});
