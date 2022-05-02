import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import dashboardSlice from "./dashboard-slice";
import categoriesSlice from "./categories-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    dashboard: dashboardSlice.reducer,
    categories: categoriesSlice.reducer,
  },
});

export default store;
