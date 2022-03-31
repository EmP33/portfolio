import React from "react";
import classes from "./CategoryItem.module.scss";

const CategoryItem = ({ title, description, logo, link }) => {
  return (
    <div className={classes["categories-section__category"]}>
      <img
        src={logo || "https://cezim.pl/wp-content/uploads/2021/12/empty.jpg"}
        target="_blank"
        alt="logo"
      />
      <a href={link}>{title}</a>
      <p>{description}</p>
    </div>
  );
};

export default CategoryItem;
