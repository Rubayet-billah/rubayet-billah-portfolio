import api from "../api/apiSlice";

const projectApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: "/projects",
      }),
    }),
  }),
});

export const { useGetProjectsQuery } = projectApi;
