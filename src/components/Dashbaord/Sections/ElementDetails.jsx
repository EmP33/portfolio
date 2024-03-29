import React, { useRef, useState } from "react";
import CSSModules from "react-css-modules";
import styles from "./ElementsDetails.module.scss";

import FormInput from "../../UI/FormInput/FormInput";
import DeleteElement from "../../Modals/DeleteElement/DeleteElement";
import CategoryItem from "../../Resources/CategoryItem/CategoryItem";
import CheckboxField from "../../UI/CheckboxField/CheckboxField";

import { RiLoader3Fill } from "react-icons/ri";

import useHttp from "../../../hooks/use-http";
import { updateCategory } from "../../../lib/api";

const ElementDetails = ({ element, category }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { sendRequest, status } = useHttp(updateCategory);
  const titleRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const linkRef = useRef();

  const editElementHandler = (e) => {
    e.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredLink = linkRef.current.value;

    category.elements[
      category.elements.findIndex((elem) => elem.id === element.id)
    ] = {
      description: enteredDescription,
      id: element.id,
      image: enteredImage,
      title: enteredTitle,
      link: enteredLink,
      isFavorite: isFavorite,
      isHidden: hidden,
    };

    sendRequest(category);
  };

  const changeFavoriteHandler = (e) => {
    setIsFavorite(e.target.checked);
  };
  const changePrivacyHandler = (e) => {
    setHidden(e.target.checked);
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
          <FormInput
            id="link"
            defaultValue={element.link}
            valueRef={linkRef}
            label="Element Link"
          />
          <CheckboxField
            id="favorite"
            value={element.isFavorite}
            fn={changeFavoriteHandler}
            label="Add to Favorite"
          />
          <CheckboxField
            id="hidden"
            value={element.isHidden}
            fn={changePrivacyHandler}
            label="Private"
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
        <CategoryItem
          title={element.title}
          logo={element.image}
          description={element.description}
          link={element.link}
          isFavorite={element.isFavorite}
        />
      </div>
    </section>
  );
};

export default CSSModules(ElementDetails, styles);
