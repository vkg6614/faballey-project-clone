import axios from "axios";
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_FAIL,
  GET_CATEGORY_LOADING,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
} from "../ActionTypes/ActionTypes";

const getProductsAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_LOADING });
    let { data } = await axios.get("http://localhost:4000/products");
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error });
  }
};

const getCategoriesAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORY_LOADING });
    let { data } = await axios.get("http://localhost:4000/categories");
    dispatch({ type: GET_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CATEGORY_FAIL, payload: error });
  }
};

export { getProductsAction, getCategoriesAction };