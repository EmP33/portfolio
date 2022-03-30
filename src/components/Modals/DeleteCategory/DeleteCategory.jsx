import React, { useEffect } from "react";
import classes from "./DeleteCategory.module.scss";

import { useParams, useNavigate } from "react-router-dom";

import Modal from "@mui/material/Modal";

import useHttp from "../../../hooks/use-http";
import { deleteCategory } from "../../../lib/api";

const DeleteCategory = ({ openModal, setOpenModal }) => {
  const params = useParams();
  const navigate = useNavigate();
  const { sendRequest, status } = useHttp(deleteCategory);

  const deleteCategoryHandler = () => {
    sendRequest(params.categoryID);
  };

  useEffect(() => {
    if (status === "completed") {
      navigate("/dashboard/categories", { replace: true });
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
        <h4>Are you sure you want to delete category?</h4>
        <div className={classes["modal-action"]}>
          <button onClick={deleteCategoryHandler}>Delete</button>
          <button onClick={() => setOpenModal(false)}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteCategory;
