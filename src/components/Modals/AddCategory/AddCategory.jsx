import React, { useRef } from "react";
import classes from "./AddCategory.module.scss";

import Modal from "@mui/material/Modal";
import { v4 as uuidv4 } from "uuid";

const AddCategory = ({ openModal, setOpenModal, onAddCategory }) => {
  const titleRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();

  const addCategoryHandler = async (e) => {
    e.preventDefault();
    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    onAddCategory({
      id: uuidv4(),
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
    });
  };

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={classes["category-modal"]}>
        <form onSubmit={addCategoryHandler}>
          <input
            type="text"
            placeholder="Category Title"
            ref={titleRef}
            required
          />
          <input
            type="text"
            placeholder="Category Image"
            ref={imageRef}
            required
          />
          <input
            type="text"
            placeholder="Description"
            ref={descriptionRef}
            required
          />
          <button type="submit">Add category</button>
        </form>
      </div>
    </Modal>
  );
};

export default React.memo(AddCategory);
