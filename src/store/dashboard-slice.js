import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    fetchCategories(state, action) {
      state.categories = action.payload;
    },
    addCategory(state, action) {
      state.categories = [...state.categories, action.payload];
    },
  },
});

export const dashboardActions = dashboardSlice.actions;
export default dashboardSlice;
