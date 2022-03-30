import React, { useEffect } from "react";
import classes from "./DeleteElement.module.scss";

import { useParams, useNavigate } from "react-router-dom";

import Modal from "@mui/material/Modal";

import useHttp from "../../../hooks/use-http";
import { updateCategory } from "../../../lib/api";

const DeleteCategory = ({ openModal, setOpenModal, category }) => {
  const params = useParams();
  const navigate = useNavigate();
  const { sendRequest, status } = useHttp(updateCategory);

  const deleteCategoryHandler = () => {
    category.elements = category.elements.filter(
      (elem) => elem.id !== +params.elementID
    );
    sendRequest(category);
  };

  useEffect(() => {
    if (status === "completed") {
      navigate(`/dashboard/categories${category.id}`, { replace: true });
    }
  }, [status, navigate]);

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={classes["category-modal"]}>
        <h4>Are you sure you want to delete this element?</h4>
        <div className={classes["modal-action"]}>
          <button onClick={deleteCategoryHandler}>Delete</button>
          <button onClick={() => setOpenModal(false)}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default React.memo(DeleteCategory);
