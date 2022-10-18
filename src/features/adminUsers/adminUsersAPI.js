import { APIsSlice } from "../APIs/APIsSlice";
// import { login } from "./userAuthSlice";
const roleHeader = {
  role: "admin",
};
export const adminUsersAPI = APIsSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminGetUsers: builder.query({
      query: (query = 0) => ({
        url: "/api/admin/get-users",
        method: "GET",
        headers: roleHeader,
      }),
    }),
    adminUpdateUser: builder.mutation({
      query: ({ id, role }) => ({
        url: `/api/admin/update-user-role/${id}`,
        method: "PATCH",
        body: { role }, //what role to update
        headers: roleHeader,
      }),
    }),
  }),
});
export const { useAdminGetUsersQuery, useAdminUpdateUserMutation } =
  adminUsersAPI;
