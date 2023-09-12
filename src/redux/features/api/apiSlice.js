// api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rubayet-billah-server.vercel.app",
  }), // Configure your API base URL
  endpoints: () => ({}),
});
export default api;
