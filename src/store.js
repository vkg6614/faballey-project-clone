import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import {
  getProductsReducer,
  getCategoriesReducer,
  getCartDetailsReducer,
  getUserLoginReducer,
} from "./Redux/Reducers/Reducers";

const rootReducer = combineReducers({
  getProductsReducer,
  getCategoriesReducer,
  getCartDetailsReducer,
  getUserLoginReducer,
});

const middleware = [thunk];

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export { store };
