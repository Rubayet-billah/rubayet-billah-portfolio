import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./features/project/projectSlice";
import api from "./features/api/apiSlice";
import authSlice from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    project: projectSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
