import api from "../api/apiSlice";

const blogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Create operation (POST)
    createBlog: builder.mutation({
      query: (newBlog) => ({
        url: "/blogs",
        method: "POST",
        body: newBlog,
      }),
    }),

    // Read operation (GET)
    getBlogs: builder.query({
      query: () => ({
        url: "/blogs",
      }),
    }),

    // Update operation (PUT or PATCH)
    updateBlog: builder.mutation({
      query: ({ id, updatedBlog }) => ({
        url: `/blogs/${id}`, // Replace with the correct URL format for updating
        method: "PUT", // or "PATCH" depending on your API
        body: updatedBlog,
      }),
    }),

    // Delete operation (DELETE)
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`, // Replace with the correct URL format for deleting
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetBlogsQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
