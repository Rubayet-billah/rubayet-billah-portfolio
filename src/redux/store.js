import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./features/project/projectSlice";

const store = configureStore({
  reducer: {
    project: projectSlice,
  },
});

export default store;
