import React, { useRef, useState } from "react";
import styles from "./CategoryDetails.module.scss";
import CSSModules from "react-css-modules";
import { Link } from "react-router-dom";

import useHttp from "../../../hooks/use-http";
import { updateCategory } from "../../../lib/api";
import { RiLoader3Fill } from "react-icons/ri";

import DeleteCategory from "../../Modals/DeleteCategory/DeleteCategory";
import AddElement from "../../Modals/AddElement/AddElement";
import FormInput from "../../UI/FormInput/FormInput";

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
          <FormInput
            id="title"
            defaultValue={category.title}
            valueRef={titleRef}
            label="Category Title"
          />
          <FormInput
            id="image"
            defaultValue={category.image}
            valueRef={imageRef}
            label="Category Image"
          />
          <FormInput
            id="description"
            defaultValue={category.description}
            valueRef={descriptionRef}
            label="Category Description"
          />
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
          <DeleteCategory openModal={openModal} setOpenModal={setOpenModal} />
        </form>
      </div>
      <div styleName="details-main__elements">
        <h2>Category Elements</h2>
        <button onClick={() => setOpenAddModal(true)}>Add element</button>
        <div>
          {!category.elements && (
            <h4>Nothing's there! Try to add your first element!</h4>
          )}
          {category.elements &&
            category.elements.map((element) => (
              <Link
                key={element.id}
                to={`/dashboard/${category.id}/element/${element.id}`}
              >
                {element.title}
              </Link>
            ))}
        </div>
        <AddElement
          category={category}
          openModal={openAddModal}
          setOpenModal={setOpenAddModal}
        />
      </div>
    </section>
  );
};

export default CSSModules(CategoryDetails, styles);
