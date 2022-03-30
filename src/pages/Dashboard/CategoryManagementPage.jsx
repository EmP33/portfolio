import React, { useEffect } from "react";

import CategoryManagement from "../../components/Dashbaord/Sections/CategoryManagement";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

import useHttp from "../../hooks/use-http";
import { getAllCategories } from "../../lib/api";
import { addCategory } from "../../lib/api";

import { useDispatch } from "react-redux";
import { dashboardActions } from "../../store/dashboard-slice";

const CategoryManagementPage = () => {
  const dispatch = useDispatch();

  const {
    sendRequest,
    data,
    status: getCategoriesStatus,
  } = useHttp(getAllCategories, true);
  const { sendRequest: sendAddRequest, status: addCategoryStatus } =
    useHttp(addCategory);

  const addCategoryHandler = (categoryData) => {
    sendAddRequest(categoryData);
    dispatch(dashboardActions.addCategory(categoryData));
  };

  // Fetch data from server
  useEffect(() => {
    sendRequest();
  }, [sendRequest, addCategoryStatus]);

  // Set fetched data to categories from redux store, used second useEffect to prevent infintie loop
  useEffect(() => {
    dispatch(dashboardActions.fetchCategories(data));
  }, [dispatch, data]);

  if (getCategoriesStatus === "pending" || addCategoryStatus === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return <CategoryManagement onAddCategory={addCategoryHandler} />;
};

export default CategoryManagementPage;
