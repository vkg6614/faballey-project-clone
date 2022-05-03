import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_FAIL,
  GET_CATEGORY_LOADING,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
  GET_CART_DETAILS_LOADING,
  GET_CART_DETAILS_SUCCESS,
  GET_CART_DETAILS_FAIL,
  GET_USERLOGIN_DETAILS_LOADING,
  GET_USERLOGIN_DETAILS_SUCCESS,
  GET_USERLOGIN_DETAILS_FAIL,
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

const getCartDetailsReducer = (state = { cartData: [] }, action) => {
  switch (action.type) {
    case GET_CART_DETAILS_LOADING:
      return { loading: true, cartData: [] };
    case GET_CART_DETAILS_SUCCESS:
      return { loading: false, cartData: action.payload };
    case GET_CART_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

const getUserLoginReducer = (state = { userLogin: [] }, action) => {
  switch (action.type) {
    case GET_USERLOGIN_DETAILS_LOADING:
      return { loading: true, userLogin: [] };
    case GET_USERLOGIN_DETAILS_SUCCESS:
      return { loading: false, userLogin: action.payload };
    case GET_USERLOGIN_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export {
  getProductsReducer,
  getCategoriesReducer,
  getCartDetailsReducer,
  getUserLoginReducer,
};
