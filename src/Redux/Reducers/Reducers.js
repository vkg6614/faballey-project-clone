import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_FAIL,
  GET_CATEGORY_LOADING,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
} from "../ActionTypes/ActionTypes";

const getProductsReducer = (state = { productsData: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS_LOADING:
      return { loading: true, productsData: [] };
    case GET_PRODUCTS_SUCCESS:
      return { loading: false, productsData: action.payload };
    case GET_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

const getCategoriesReducer = (state = { categoriesData: [] }, action) => {
  switch (action.type) {
    case GET_CATEGORY_LOADING:
      return { loading: true, categoriesData: [] };
    case GET_CATEGORY_SUCCESS:
      return { loading: false, categoriesData: action.payload };
    case GET_CATEGORY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export { getProductsReducer, getCategoriesReducer };
