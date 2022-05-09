import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../CartNavbar/CartNavbar";
import "./CartDetails.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { getCartDetailsAction } from "../../Redux/Actions/Actions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EstimatedTIme from "../EstimatedTime/EstimatedTIme";

const CartDetails = () => {
  const { cartData } = useSelector((state) => state.getCartDetailsReducer);
  // console.log(cartData, "car");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  var [priceOfCart, setPriceOfcart] = useState(null);

  useEffect(() => {
    dispatch(getCartDetailsAction());
  }, [dispatch]);

  useEffect(() => {
    getPriceFromCart();
  }, [priceOfCart, dispatch, cartData]);

  const getPriceFromCart = () => {
    let price = cartData.map((data) => {
      return data.price;
    });
    let sum = price.reduce((acc, curr) => (acc += curr), 0);
    setPriceOfcart(sum);
  };
  // console.log(priceOfCart, "p");
  const onClickHandleForCartPlaceOrderBtn = () => {
    navigate("/Shipping");
  };

  const deleteProductClickHandle = async (id) => {
    await axios.delete(
      `https://faballey-jsonserver-reactjs.herokuapp.com/cartsData/${id}`
    );
    dispatch(getCartDetailsAction());
  };

  return (
    <div>
      <ResponsiveAppBar />
      <div className="cartDetails-main-container">
        <div className="cartDetails-secondary-container">
          <div className="cartDetails-left-container">
            <h3>My Shopping Bag({cartData.length})</h3>
            <div>
              {cartData &&
                cartData.map((cart) => (
                  <div key={cart.id} className="single-pro">
                    <div style={{ border: "1px solid black", width: "100px" }}>
                      <img
                        width="100%"
                        height="120px"
                        src={cart.images}
                        alt={cart.title}
                      />
                    </div>
                    <div className="middle-div">
                      <p style={{ fontSize: "1rem" }}>{cart.description}</p>
                      <div className="small-details">
                        <p>size: {cart.size}</p>
                        <p>qty: 1</p>
                        <p>Color: {cart.color}</p>
                      </div>
                      <div
                        style={{
                          paddingBottom: "15px",
                        }}
                      >
                        <p>SKU CODE: sk23Lfded</p>
                      </div>

                      <div className="add-del-div">
                        <p>Edit Item</p>
                        <p>Move To Wishlist</p>
                      </div>
                    </div>
                    <div>
                      <p className="price">Price: {cart.price}</p>
                      <DeleteIcon
                        onClick={() => deleteProductClickHandle(cart.id)}
                        className="delete-icon"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="cartDetails-right-container">
            <h3>Price Details</h3>
            <div>
              <div className="top-div">
                <div style={{ display: "flex" }}>
                  <div>
                    <h5>Donation</h5>
                    <p style={{ fontSize: "0.7rem", width: "80%" }}>
                      Extra 10 (This donation is towards NGO Ssrishti that is
                      providing food and hygiene essentials to migrant labors
                      during the COVID-19 lockdown)
                    </p>
                  </div>
                  <input type="checkbox" />
                </div>
                <div className="apply-coupon">
                  <p>Apply Coupon</p>
                </div>
                <div className="redeem-gift">
                  <p>Redeem Gift Card</p>
                </div>
                <div className="sub-total">
                  <p>Sub Total</p>
                  <p>Rs {priceOfCart}</p>
                </div>
                <div className="total">
                  <p>Total</p>
                  <p>Rs {priceOfCart}</p>
                </div>
                <button
                  onClick={() => onClickHandleForCartPlaceOrderBtn()}
                  className="place-order-button"
                >
                  Place Order
                </button>
              </div>

              <EstimatedTIme />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
