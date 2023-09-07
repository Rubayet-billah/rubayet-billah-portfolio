import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./features/project/projectSlice";
import api from "./features/api/apiSlice";

const store = configureStore({
  reducer: {
    project: projectSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
