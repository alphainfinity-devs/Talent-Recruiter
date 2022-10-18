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
    login: builder.mutation({
      query: (body) => ({
        url: "/api/user/login",
        method: "POST",
        body,
      }),
      async onQueryStarted(body, { dispatch, getState, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          // console.log(result.data.token)
          localStorage.setItem("auth", JSON.stringify(result.data));
          //   dispatch(login(result.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
export const { useAdminGetUsersQuery } = adminUsersAPI;
