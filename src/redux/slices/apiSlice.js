import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://68c9e2d8ceef5a150f66432a.mockapi.io/citizens/",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ page = 1, limit = 8, search = "" }) =>
        search
          ? `user?page=${page}&limit=${limit}&fio=${search}`
          : `user?page=${page}&limit=${limit}`,
      transformResponse: (response, meta) => {
        const total = meta?.response?.headers.get("X-Total-Count") || 50;
        return { users: response, total: Number(total) };
      },
      providesTags: ["Users"],
    }),

    updateUser: builder.mutation({
      query: ({ id, userData }) => ({
        url: `user/${id}`,
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersQuery, useUpdateUserMutation } = usersApi;
