import axios from "axios";
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
} from "../ActionTypes/ActionTypes";

const getProductsAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_LOADING });
    let { data } = await axios.get(
      "https://faballey-jsonserver-reactjs.herokuapp.com/products"
    );
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error });
  }
};

const getCategoriesAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORY_LOADING });
    let { data } = await axios.get(
      "https://faballey-jsonserver-reactjs.herokuapp.com/categories"
    );
    dispatch({ type: GET_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CATEGORY_FAIL, payload: error });
  }
};

const getCartDetailsAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CART_DETAILS_LOADING });
    let { data } = await axios.get(
      "https://faballey-jsonserver-reactjs.herokuapp.com/cartsData"
    );
    dispatch({ type: GET_CART_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CART_DETAILS_FAIL, payload: error });
  }
};

export { getProductsAction, getCategoriesAction, getCartDetailsAction };

// "https://faballey-jsonserver-reactjs.herokuapp.com/products";
