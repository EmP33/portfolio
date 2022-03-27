import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useHttp from "../../hooks/use-http";
import { getSingleCategory } from "../../lib/api";

import CategoryDetails from "../../components/Dashbaord/Sections/CategoryDetails";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

const CategoryDetailsPage = () => {
  const params = useParams();
  const { categoryID } = params;
  const {
    status,
    sendRequest,
    data: category,
  } = useHttp(getSingleCategory, true);

  useEffect(() => {
    sendRequest(categoryID);
  }, [sendRequest, categoryID]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return <CategoryDetails category={category} />;
};

export default CategoryDetailsPage;
