import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import dashboardSlice from "./dashboard-slice";

const store = configureStore({
  reducer: { auth: authSlice.reducer, dashboard: dashboardSlice.reducer },
});

export default store;
