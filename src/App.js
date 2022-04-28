import {
  getCategoriesAction,
  getProductsAction,
} from "./Redux/Actions/Actions";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Lists from "./components/Lists/Lists";
import CartDetails from "./components/CartDetails/CartDetails";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  const dispatch = useDispatch();
  const [type, setType] = useState("");

  useEffect(() => {
    dispatch(getProductsAction());
    dispatch(getCategoriesAction());
  }, [dispatch]);
  const getValueFromHome = (data) => {
    setType(data);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home getValueFromHome={getValueFromHome} />}
          />
          <Route exact path="/lists" element={<Lists type={type} />} />
          <Route exact path="/cartDetails" element={<CartDetails />} />
          <Route exact path="/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
