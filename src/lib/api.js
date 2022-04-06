const FIREBASE_DOMAIN = process.env.REACT_APP_FIREBASE_URL;

export const getAllCategories = async () => {
  const response = await fetch(`${FIREBASE_DOMAIN}/categories.json`);
  const data = await response.json();
  const loadedCategories = [];
  for (let key in data) {
    loadedCategories.push({
      id: key,
      title: data[key].title,
      image: data[key].image,
      description: data[key].description,
      elements: data[key].elements,
      isHidden: data[key].isHidden,
    });
  }
  return loadedCategories;
};
export const addCategory = async (categoryData) => {
  await fetch(`${FIREBASE_DOMAIN}/categories.json`, {
    method: "POST",
    body: JSON.stringify(categoryData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return null;
};

export const getSingleCategory = async (categoryID) => {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/categories/${categoryID}.json`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return {
    id: categoryID,
    ...data,
  };
};

export const updateCategory = async (category) => {
  await fetch(`${FIREBASE_DOMAIN}/categories/${category.id}.json`, {
    method: "PUT",
    body: JSON.stringify({
      title: category.title,
      image: category.image,
      description: category.description,
      elements: category.elements || [],
      isHidden: category.isHidden,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return null;
};

export const deleteCategory = async (categoryID) => {
  await fetch(`${FIREBASE_DOMAIN}/categories/${categoryID}.json`, {
    method: "DELETE",
  });

  return null;
};

export const addElementToCategory = async (categoryData) => {
  await fetch(`${FIREBASE_DOMAIN}/categories/${categoryData.id}.json`, {
    method: "PUT",
    body: JSON.stringify(categoryData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return null;
};
