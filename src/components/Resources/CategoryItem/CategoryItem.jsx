import React from "react";
import classes from "./CategoryItem.module.scss";

import { ImSvg } from "react-icons/im";

const CategoryItem = ({ title, description }) => {
  return (
    <div className={classes["categories-section__category"]}>
      <ImSvg />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default CategoryItem;
