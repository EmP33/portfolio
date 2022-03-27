import React from "react";

const CategoryDetails = ({ category }) => {
  console.log(category);
  return (
    <>
      <input type="text" defaultValue={category.title} />
      <input type="text" defaultValue={category.image} />
      <input type="text" defaultValue={category.description} />
    </>
  );
};

export default CategoryDetails;
