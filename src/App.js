import {
  getCartDetailsAction,
  getCategoriesAction,
  getProductsAction,
  getUserLoginAction,
} from "./Redux/Actions/Actions";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Lists from "./components/Lists/Lists";
import CartDetails from "./components/CartDetails/CartDetails";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Shipping from "./components/ShippingPage/Shipping";
import Payment from "./components/PaymentPage/Payment";
import PaymentSuccess from "./components/PaymentSuccess/PaymentSuccess";
import Signup from "./components/Signup/Signup";

function App() {
  const dispatch = useDispatch();
  const [type, setType] = useState();
  const [signup_state, setSignup_state] = useState(false);

  useEffect(() => {
    dispatch(getProductsAction());
    dispatch(getCategoriesAction());
    dispatch(getCartDetailsAction());
    dispatch(getUserLoginAction());
  }, [dispatch]);
  const getValueFromHome = (data) => {
    setType(data);
  };

  const getSignupStateFromSignup = (data) => {
    setSignup_state(data);
  };
  // console.log(signup_state);

  return (
    <>
      {/* <SignIn /> */}
      <BrowserRouter>
        <Navbar getSignupStateFromSignup={getSignupStateFromSignup} />
        <Signup signup_state={signup_state} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home getValueFromHome={getValueFromHome} />}
          />
          <Route exact path="/lists" element={<Lists type={type} />} />
          <Route exact path="/Bag" element={<CartDetails />} />

          <Route exact path="/Shipping" element={<Shipping />} />
          <Route exact path="/Payment" element={<Payment />} />
          <Route exact path="/:id" element={<ProductDetails />} />

          <Route exact path="/successfull" element={<PaymentSuccess />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
