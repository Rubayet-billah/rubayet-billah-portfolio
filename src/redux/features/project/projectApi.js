// projectApi.js
import api from "../api/apiSlice";

const projectApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "projects", // Use the endpoint name directly
    }),
    getProjectById: builder.query({
      query: (id) => `projects/${id}`, // Use the endpoint name directly
    }),
  }),
});

export const { useGetProjectsQuery, useGetProjectByIdQuery } = projectApi;
