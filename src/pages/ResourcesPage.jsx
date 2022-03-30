import React, { useEffect } from "react";
import Resources from "../components/Resources/Resources";

import LoadingSpinner from "../components/UI/LoadingSpinner";

import useHttp from "../hooks/use-http";
import { getAllCategories } from "../lib/api";

const ResourcesPage = () => {
  const { sendRequest, data, status } = useHttp(getAllCategories, true);

  useEffect(() => {
    sendRequest();
  }, []);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return <Resources categories={data} />;
};

export default ResourcesPage;
