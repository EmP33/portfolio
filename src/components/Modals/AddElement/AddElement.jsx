import React, { useRef } from "react";
import classes from "./AddElement.module.scss";

import Modal from "@mui/material/Modal";

import { RiLoader3Fill } from "react-icons/ri";

import useHttp from "../../../hooks/use-http";
import { addElementToCategory } from "../../../lib/api";

const AddElement = ({ category, openModal, setOpenModal }) => {
  const { sendRequest, status } = useHttp(addElementToCategory);
  const titleRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const linkRef = useRef();

  const addElementHandler = async (e) => {
    e.preventDefault();
    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredLink = linkRef.current.value;

    if (category.elements) {
      category.elements.push({
        title: enteredTitle,
        image: enteredImage,
        description: enteredDescription,
        link: enteredLink,
        id: Math.floor(Math.random() * 100000),
      });
      sendRequest(category);
    } else {
      category.elements = [
        {
          title: enteredTitle,
          image: enteredImage,
          description: enteredDescription,
          link: enteredLink,
          id: Math.floor(Math.random() * 100000),
        },
      ];
      sendRequest(category);
    }

    setOpenModal(false);
  };

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={classes["category-modal"]}>
        <form onSubmit={addElementHandler}>
          <input
            type="text"
            placeholder="Element Title"
            ref={titleRef}
            required
          />
          <input
            type="text"
            placeholder="Element Image"
            ref={imageRef}
            required
          />
          <input
            type="text"
            placeholder="Description"
            ref={descriptionRef}
            required
          />{" "}
          <input type="text" placeholder="Link" ref={linkRef} required />
          <button type="submit">
            {status === "pending" ? (
              <RiLoader3Fill className="spinning" />
            ) : (
              "Add Element"
            )}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default React.memo(AddElement);
