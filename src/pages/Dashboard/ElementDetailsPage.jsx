import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import ElementDetails from "../../components/Dashbaord/Sections/ElementDetails";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

import useHttp from "../../hooks/use-http";
import { getSingleCategory } from "../../lib/api";

const ElementDetailsPage = () => {
  const [element, setElement] = useState(null);
  const { sendRequest, data: category } = useHttp(getSingleCategory);
  const params = useParams();
  const { categoryID, elementID } = params;

  useEffect(() => {
    sendRequest(categoryID);
  }, [sendRequest, categoryID]);

  useEffect(() => {
    if (category) {
      setElement(
        category.elements.find((element) => element.id === +elementID)
      );
    }
  }, [category, elementID]);

  if (!element) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return <ElementDetails element={element} category={category} />;
};

export default ElementDetailsPage;
