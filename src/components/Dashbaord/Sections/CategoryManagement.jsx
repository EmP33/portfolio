import React, { useState } from "react";
import styles from "./CategoryManagement.module.scss";
import CSSModules from "react-css-modules";

import AddCategory from "../../Modals/AddCategory/AddCategory";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const CategoryManagement = ({ onAddCategory }) => {
  const categories = useSelector((state) => state.dashboard.categories);

  const [openModal, setOpenModal] = useState(false);

  const addCategoryHandler = (categoryData) => {
    onAddCategory(categoryData);
    setOpenModal((prevState) => !prevState);
  };

  if (!categories) {
    return "";
  }

  return (
    <div styleName="category-manage">
      <h4>Zarządzanie kategoriami</h4>
      <div styleName="category-manage__list">
        <h5>Lista kategorii</h5>
        <button onClick={() => setOpenModal(true)}>Add category</button>
        <AddCategory
          openModal={openModal}
          setOpenModal={setOpenModal}
          onAddCategory={addCategoryHandler}
        />

        <div styleName="categories">
          {categories.map((category) => (
            <Link key={category.id} to={`/dashboard/${category.id}`}>
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CSSModules(CategoryManagement, styles));
