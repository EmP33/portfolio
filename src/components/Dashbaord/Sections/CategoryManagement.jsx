import React, { useState } from "react";
import styles from "./CategoryManagement.module.scss";
import CSSModules from "react-css-modules";

import AddCategory from "../../Modals/AddCategory/AddCategory";

import { useSelector, useDispatch } from "react-redux";
import { dashboardActions } from "../../../store/dashboard-slice";
import { Link } from "react-router-dom";

import useHttp from "../../../hooks/use-http";
import { addCategory } from "../../../lib/api";

const CategoryManagement = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.dashboard.categories);
  const { sendRequest } = useHttp(addCategory);
  const [openModal, setOpenModal] = useState(false);

  const addCategoryHandler = (categoryData) => {
    sendRequest(categoryData);
    dispatch(dashboardActions.addCategory(categoryData));
    setOpenModal((prevState) => !prevState);
  };

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

export default CSSModules(CategoryManagement, styles);
