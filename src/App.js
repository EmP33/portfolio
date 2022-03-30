import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ResourcesPage from "./pages/ResourcesPage";

import LoadingSpinner from "./components/UI/LoadingSpinner";
import ElementDetailsPage from "./pages/Dashboard/ElementDetailsPage";

import { useSelector } from "react-redux";

const AuthPage = React.lazy(() => import("./pages/AuthPage"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/DashboardPage"));
const CategoryDetailsPage = React.lazy(() =>
  import("./pages/Dashboard/CategoryDetailsPage")
);
const CategoryManagementPage = React.lazy(() =>
  import("./pages/Dashboard/CategoryManagementPage")
);

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/resources" />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/account/login" element={<AuthPage />} />
          {isLoggedIn ? (
            <Route path="/dashboard/*" element={<Dashboard />}>
              <Route path="categories" element={<CategoryManagementPage />} />
              <Route path=":categoryID/*" element={<CategoryDetailsPage />} />
              <Route
                path=":categoryID/element/:elementID"
                element={<ElementDetailsPage />}
              />
            </Route>
          ) : (
            <Route path="/dashboard" element={<Navigate to="/resources" />} />
          )}
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
