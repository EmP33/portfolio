import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ResourcesPage from "./pages/ResourcesPage/ResourcesPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import Dashboard from "./pages/DashboardPage/DashboardPage";

import { useSelector } from "react-redux";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/resources" />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/account/login" element={<AuthPage />} />
        {isLoggedIn ? (
          <Route path="/dashboard" element={<Dashboard />} />
        ) : (
          <Route path="/dashboard" element={<Navigate to="/resources" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
