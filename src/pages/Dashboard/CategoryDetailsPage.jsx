import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { getSingleCategory } from "../../store/categories-slice";

import CategoryDetails from "../../components/Dashbaord/Sections/CategoryDetails";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

const CategoryDetailsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const isLoading = useSelector((state) => state.categories.isLoading);
  const category = useSelector((state) => state.categories.currentCategory);

  useEffect(() => {
    dispatch(getSingleCategory(params.categoryID));
  }, []);

  if (isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return <CategoryDetails category={category} />;
};

export default CategoryDetailsPage;
