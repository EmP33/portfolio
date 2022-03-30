import React, { useRef, useState } from "react";
import styles from "./CategoryDetails.module.scss";
import CSSModules from "react-css-modules";
import { Link } from "react-router-dom";

import useHttp from "../../../hooks/use-http";
import { updateCategory } from "../../../lib/api";
import { RiLoader3Fill } from "react-icons/ri";

import DeleteCategory from "../../Modals/DeleteCategory/DeleteCategory";
import AddElement from "../../Modals/AddCategory/AddCategory";

const CategoryDetails = ({ category }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const { sendRequest, status } = useHttp(updateCategory);

  const titleRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();

  const editCategoryHandler = (e) => {
    e.preventDefault();
    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    sendRequest({
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
      id: category.id,
    });
  };

  return (
    <section styleName="details-main">
      <div styleName="details-main__category">
        <form onSubmit={editCategoryHandler}>
          <div>
            <label htmlFor="title">Category Title </label>
            <input
              type="text"
              defaultValue={category.title}
              id="title"
              ref={titleRef}
            />
          </div>
          <div>
            <label htmlFor="title">Category Image </label>
            <input type="text" defaultValue={category.image} ref={imageRef} />
          </div>
          <div>
            <label htmlFor="title">Category Description </label>
            <input
              type="text"
              defaultValue={category.description}
              ref={descriptionRef}
            />
          </div>
          <div styleName="form-action">
            <button type="submit">
              {status === "pending" ? (
                <RiLoader3Fill className="spinning" />
              ) : (
                "Edit"
              )}
            </button>
            <button type="button" onClick={() => setOpenModal(true)}>
              {status === "pending" ? (
                <RiLoader3Fill className="spinning" />
              ) : (
                "Delete"
              )}
            </button>
          </div>
          <DeleteCategory
            categoryID={category.id}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </form>
      </div>
      <div styleName="details-main__elements">
        <h2>Category Elements</h2>
        <button>Add element</button>
        <div>
          <Link to={`/dashboard/${category.id}/id`}>IcoMoon</Link>
          <Link to={`/dashboard/${category.id}/id`}>IcoMoon</Link>
          <Link to={`/dashboard/${category.id}/id`}>IcoMoon</Link>
        </div>
      </div>
    </section>
  );
};

export default CSSModules(CategoryDetails, styles);
