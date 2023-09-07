import api from "../api/apiSlice";

const projectApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({}),
  }),
});

export const { useGetProjectsQuery } = projectApi;
