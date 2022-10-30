import { APIsSlice } from "../APIs/APIsSlice";
import { login } from "./userAuthSlice";

export const userAuthAPI = APIsSlice.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (body) => ({
        url: "/api/user/register",
        method: "POST",
        body,
      }),
      // async onQueryStarted(body, { dispatch, queryFulfilled }) {
      //   try {
      //     const result = await queryFulfilled;
      //     localStorage.setItem("auth", JSON.stringify(result.data));
      //     dispatch(login(result.data));
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },
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
          dispatch(login(result.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
export const { useUserRegisterMutation, useLoginMutation } = userAuthAPI;
