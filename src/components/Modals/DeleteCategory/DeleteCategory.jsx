import React, { useEffect } from "react";
import classes from "./DeleteCategory.module.scss";

import { useParams, useNavigate } from "react-router-dom";

import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { deleteCategory } from "../../../store/categories-slice";

const DeleteCategory = ({ openModal, setOpenModal }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.categories.isLoading);

  const deleteCategoryHandler = () => {
    dispatch(deleteCategory(params.categoryID));
  };

  console.log(isLoading);

  useEffect(() => {
    if (isLoading) {
      navigate("/dashboard/categories", { replace: true });
    }
  }, [isLoading, navigate]);

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

export default React.memo(DeleteCategory);
