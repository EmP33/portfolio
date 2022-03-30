import React, { useEffect } from "react";

import Dashboard from "../../components/Dashbaord/Dashboard";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

import { useDispatch } from "react-redux";
import useHttp from "../../hooks/use-http";
import { getAllCategories } from "../../lib/api";
import { dashboardActions } from "../../store/dashboard-slice";

const DashboardPage = () => {
  const dispatch = useDispatch();

  const {
    sendRequest,
    data: loadedCategories,
    status,
    error,
  } = useHttp(getAllCategories, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  dispatch(dashboardActions.fetchCategories(loadedCategories));

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  return <Dashboard />;
};

export default DashboardPage;
