import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils/const/api";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ page = 1, limit = 8, search = "" }) =>
        search
          ? `?page=${page}&limit=${limit}&search=${search}`
          : `?page=${page}&limit=${limit}`,
      transformResponse: (response, meta) => {
        const total = meta?.response?.headers.get("X-Total-Count") || 50;
        return { users: response, total: Number(total) };
      },
      providesTags: ["Users"],
    }),
    updateUser: builder.mutation({
      query: ({ id, userData }) => ({
        url: `/${id}`,
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: ["Users"],
    }),
    getUserById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: "Users", id }],
    }),
    getAllUsers: builder.query({
      query: () => "",
      transformResponse: (response) => ({
        users: response,
        total: response.length,
      }),
      providesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateUserMutation,
  useGetUserByIdQuery,
  useGetAllUsersQuery,
} = usersApi;
