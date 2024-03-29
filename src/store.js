import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import {
  getProductsReducer,
  getCategoriesReducer,
  getCartDetailsReducer,
  getUserLoginReducer,
  getUserAddressReducer,
} from "./Redux/Reducers/Reducers";

const rootReducer = combineReducers({
  getProductsReducer,
  getCategoriesReducer,
  getCartDetailsReducer,
  getUserLoginReducer,
  getUserAddressReducer,
});

const middleware = [thunk];

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export { store };
