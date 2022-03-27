import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("token"),
  token: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginHandler(state, action) {
      state.token = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload);
    },
    logoutHandler(state) {
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
