import { createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase";
import { ref, onValue, set, remove } from "firebase/database";

const initialState = {
  categories: [],
  currentCategory: {},
  isLoading: true,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategories(state, action) {
      state.categories = action.payload;
    },
    changeLoading(state, action) {
      state.isLoading = action.payload;
    },
    addCategory(state, action) {
      state.categories = [...state.categories, action.payload];
    },
    setCurrentCategory(state, action) {
      state.currentCategory = action.payload;
    },
  },
});

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(categoriesActions.changeLoading(true));
    const sendRequest = async () => {
      const categoriesRef = ref(db, "categories");
      const loadedCategories = [];
      onValue(categoriesRef, (snapshot) => {
        const data = snapshot.val();
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
        dispatch(categoriesActions.changeLoading(false));
        dispatch(categoriesActions.addCategories(loadedCategories));
      });
    };

    await sendRequest();
  };
};

export const getSingleCategory = (categoryID) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      dispatch(categoriesActions.changeLoading(true));
      const categoriesRef = ref(db, `categories/${categoryID}`);
      onValue(categoriesRef, (snapshot) => {
        const data = snapshot.val();
        dispatch(
          categoriesActions.setCurrentCategory({
            id: data.id || categoryID,
            ...data,
          })
        );
        dispatch(categoriesActions.changeLoading(false));
      });
    };

    await sendRequest();
  };
};

export const addCategory = (categoryData) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const reference = ref(db, `categories/${categoryData.id}`);

      set(reference, {
        id: categoryData.id,
        title: categoryData.title,
        image: categoryData.image,
        description: categoryData.description,
        isHidden: false,
        elements: [],
      });
      dispatch(categoriesActions.addCategory(categoryData));
    };

    await sendRequest();
  };
};

export const editCategory = (category, title, image, description, hidden) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      dispatch(categoriesActions.changeLoading(true));
      const reference = ref(db, `categories/${category.id}`);

      set(reference, {
        id: category.id,
        title,
        image,
        description,
        isHidden: hidden,
        elements: category.elements || [],
      });
      dispatch(categoriesActions.changeLoading(false));
    };

    await sendRequest();
  };
};

export const deleteCategory = (id) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      dispatch(categoriesActions.changeLoading(true));
      const reference = ref(db, `categories/${id}`);
      remove(reference);
      dispatch(categoriesActions.changeLoading(false));
    };
    await sendRequest();
  };
};

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice;
