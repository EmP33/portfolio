import React from "react";
import CSSModules from "react-css-modules";
import { useSelector } from "react-redux";
import styles from "./CategoryItem.module.scss";

const CategoryItem = ({
  title,
  description,
  logo,
  link,
  isFavorite,
  isHidden,
}) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isHidden && !isLoggedIn) {
    return "";
  } else {
    return (
      <div
        styleName={`${
          !isFavorite
            ? "categories-section__category"
            : "categories-section__best-category"
        }`}
      >
        <img
          src={logo || "https://cezim.pl/wp-content/uploads/2021/12/empty.jpg"}
          target="_blank"
          alt="logo"
        />
        <a href={link}>{title}</a>
        <p>{description}</p>
      </div>
    );
  }
};

export default CSSModules(CategoryItem, styles);
