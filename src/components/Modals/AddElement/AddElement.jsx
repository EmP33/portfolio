import React from "react";
import classes from "./AddElement.module.scss";

import Modal from "@mui/material/Modal";

const AddElement = ({openAddModal,setOpenAddModal}) => {

  return (
    <Modal
      open={openAddModal}
      onClose={() => setOpenAddModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={classes["category-modal"]}>
        <h4>Are you sure you want to delete category?</h4>
      </div>
    </Modal>
  );
};

export default AddElement;
