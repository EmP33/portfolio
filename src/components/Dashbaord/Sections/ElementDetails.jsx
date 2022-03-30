import React, { useRef, useState } from "react";
import CSSModules from "react-css-modules";
import styles from "./ElementsDetails.module.scss";

import FormInput from "../../UI/FormInput/FormInput";
import DeleteElement from "../../Modals/DeleteElement/DeleteElement";
import CategoryItem from "../../Resources/CategoryItem/CategoryItem";

import { RiLoader3Fill } from "react-icons/ri";

import useHttp from "../../../hooks/use-http";
import { updateCategory } from "../../../lib/api";

const ElementDetails = ({ element, category }) => {
  const [openModal, setOpenModal] = useState(false);
  const { sendRequest, status } = useHttp(updateCategory);
  const titleRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();

  const editElementHandler = (e) => {
    e.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    category.elements[
      category.elements.findIndex((elem) => elem.id === element.id)
    ] = {
      description: enteredDescription,
      id: element.id,
      image: enteredImage,
      title: enteredTitle,
    };

    sendRequest(category);
  };

  return (
    <section styleName="details-main">
      <div styleName="details-main__element">
        <form onSubmit={editElementHandler}>
          <FormInput
            id="title"
            defaultValue={element.title}
            valueRef={titleRef}
            label="Element Title"
          />
          <FormInput
            id="image"
            defaultValue={element.image}
            valueRef={imageRef}
            label="Element Image"
          />
          <FormInput
            id="description"
            defaultValue={element.description}
            valueRef={descriptionRef}
            label="Element Description"
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
          <DeleteElement
            openModal={openModal}
            setOpenModal={setOpenModal}
            category={category}
          />
        </form>
      </div>
      <div styleName="details-main__preview">
        <h3>Preview</h3>
        <CategoryItem title={element.title} description={element.description} />
      </div>
    </section>
  );
};

export default CSSModules(ElementDetails, styles);
