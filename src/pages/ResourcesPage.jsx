import React, { useEffect } from "react";
import Resources from "../components/Resources/Resources";

import LoadingSpinner from "../components/UI/LoadingSpinner";

import useHttp from "../hooks/use-http";

import { db } from "../firebase";
import { ref, onValue } from "firebase/database";

import { useDispatch, useSelector } from "react-redux";
import { categoriesActions } from "../store/categories-slice";
import { fetchCategories } from "../store/categories-slice";

const ResourcesPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const isLoading = useSelector((state) => state.categories.isLoading);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  console.log(isLoading);

  if (isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return <Resources categories={categories} />;
};

export default ResourcesPage;
