import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ResponsiveAppBar from "../CartNavbar/CartNavbar";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import "./Payment.css";
import { useSelector, useDispatch } from "react-redux";
import { getUserAddressAction } from "../../Redux/Actions/Actions";
import EstimatedTIme from "../EstimatedTime/EstimatedTIme";

const paymentMode = [
  "CREDIT/DEBIT CARD",
  "UPI",
  "NET BANKING",
  "MOBILE WALLETS",
  "CASH ON DELIVERY",
];
const Payment = () => {
  var [priceOfCart, setPriceOfcart] = useState(null);
  const [checkActiveState, setCheckActiveState] = useState({
    state: "CREDIT/DEBIT CARD",
  });
  const dispatch = useDispatch();
  const [deliverAddressState, setDeliveredAddressState] = useState([]);
  const { cartData } = useSelector((state) => state.getCartDetailsReducer);

  useEffect(() => {
    dispatch(getUserAddressAction());
    setDeliveredAddressState(
      JSON.parse(sessionStorage.getItem("deliveredAddress"))
    );
  }, [dispatch]);

  useEffect(() => {
    getPriceFromCart();
  }, [cartData]);

  const getPriceFromCart = () => {
    let price = cartData.map((data) => {
      return data.price;
    });
    let sum = price.reduce((acc, curr) => (acc += curr), 0);
    setPriceOfcart(sum);
  };

  return (
    <div>
      <ResponsiveAppBar />
      <div className="payment-primary-container">
        <div className="payment-secondary-container">
          <div className="payment-mode-div">
            <h3>Choose Payment mode</h3>
            <div className="payments-mode">
              {paymentMode.map((mode, index) => (
                <p
                  className={checkActiveState.state === mode ? "active" : ""}
                  onClick={() => setCheckActiveState({ state: mode })}
                  key={index}
                >
                  {mode}
                </p>
              ))}
            </div>
          </div>
          <div className="payment-details-div">
            <PaymentDetails checkActiveState={checkActiveState} />
            <img
              style={{ marginTop: "30px" }}
              width="100%"
              src="https://img.faballey.com/images/pmticonsweb.png"
              alt="img1"
            />
          </div>
          <div className="price-address-div">
            <h3>{cartData && cartData.length} Product(s) in bag</h3>
            <div
              style={{
                backgroundColor: "rgb(244,244,244)",
                marginTop: "20px",
                padding: "20px 1em",
              }}
            >
              <div
                style={{
                  border: "none",
                  padding: "0",
                }}
                className="sub-total"
              >
                <p>Sub Total</p>
                <p>Rs {priceOfCart}</p>
              </div>
              <div className="total">
                <p>Shipping</p>
                <p>0</p>
              </div>
              <div
                style={{
                  borderTop: "1px solid black",
                  borderBottom: "1px solid black",
                  marginTop: "6px",
                  padding: "10px 0",
                  color: "rgb(252, 100, 134)",
                }}
                className="total"
              >
                <p>Total Payable</p>
                <p>Rs {priceOfCart}</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "16px 0px",
              }}
            >
              <h4>Delivered to</h4>
              <NavLink to="/Shipping">Change Address</NavLink>
            </div>
            <div
              key={deliverAddressState[0] && deliverAddressState[0].id}
              style={{
                border: "1px solid grey",
                padding: "16px 1em",
              }}
            >
              <p>{deliverAddressState[0] && deliverAddressState[0].name}</p>
              <p>{deliverAddressState[0] && deliverAddressState[0].area}</p>
              <span>
                {deliverAddressState[0] && deliverAddressState[0].city},
              </span>
              <span>
                {deliverAddressState[0] && deliverAddressState[0].state},
              </span>
              <span>
                {deliverAddressState[0] && deliverAddressState[0].country} -
              </span>
              <span>
                {deliverAddressState[0] && deliverAddressState[0].pincode}
              </span>
              <p>
                Mobile {deliverAddressState[0] && deliverAddressState[0].mobile}
              </p>
            </div>
            <EstimatedTIme />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
