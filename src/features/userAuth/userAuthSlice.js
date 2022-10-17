import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  accessToken: null,
  user: null,
};
const userAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // console.log(action.payload?.token);
      // console.log(action.payload?.user);
      state.accessToken = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.accessToken = null;
      state.user = null;
      localStorage.removeItem("auth");
    },
  },
});
export const { login, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;
