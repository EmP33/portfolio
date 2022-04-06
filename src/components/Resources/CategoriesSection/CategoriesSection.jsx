import React from "react";
import styles from "./CategoriesSection.module.scss";
import CSSModules from "react-css-modules";

import CategoryItem from "../CategoryItem/CategoryItem";

const CategoriesSection = ({ category }) => {
  console.log(category);
  if (category.isHidden) {
    return "";
  } else {
    return (
      <div styleName="categories-section" id={category.id}>
        <div styleName="categories-section__header">
          <img
            src={
              category.image ||
              "https://cezim.pl/wp-content/uploads/2021/12/empty.jpg"
            }
            alt="logo"
          />
          <h3>{category.title}</h3>
          <p>{category.description}</p>
        </div>
        {!category.elements && <h4>Nothing's there</h4>}
        {category.elements &&
          category.elements.map((item) => (
            <CategoryItem
              key={item.id}
              logo={item.image}
              title={item.title}
              isFavorite={item.isFavorite}
              isHidden={item.isHidden}
              description={item.description}
              link={item.link}
            />
          ))}
      </div>
    );
  }
};

export default CSSModules(CategoriesSection, styles);
