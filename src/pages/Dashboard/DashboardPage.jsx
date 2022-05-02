import React, { useEffect } from "react";

import Dashboard from "../../components/Dashbaord/Dashboard";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

import { useDispatch, useSelector } from "react-redux";

import { fetchCategories } from "../../store/categories-slice";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.categories.isLoading);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  if (isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return <Dashboard />;
};

export default DashboardPage;
