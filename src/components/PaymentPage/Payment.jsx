import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ResponsiveAppBar from "../CartNavbar/CartNavbar";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import "./Payment.css";

const paymentMode = [
  "CREDIT/DEBIT CARD",
  "UPI",
  "NET BANKING",
  "MOBILE WALLETS",
  "CASH ON DELIVERY",
];
const Payment = () => {
  const [checkActiveState, setCheckActiveState] = useState({
    state: "CREDIT/DEBIT CARD",
  });
  // useEffect(()=>{
  //   setCheckActiveState({state:C})
  // },[])
  console.log(checkActiveState);
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
            <PaymentDetails />
            <img
              style={{ marginTop: "30px" }}
              width="100%"
              src="https://img.faballey.com/images/pmticonsweb.png"
              alt="img1"
            />
          </div>
          <div className="price-address-div">
            <h3>1 Product(s) in bag</h3>
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
                <p>Rs 1310</p>
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
                <p>Rs 1310</p>
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
              style={{
                border: "1px solid grey",
                padding: "16px 1em",
              }}
            >
              <p>
                VIKAS X <br />
                H. No- 542/1 Vikas nagar Nangal kheri,
                <br />
                Panipat, Haryana India - 132103 <br />
                Mobile 8950950225
              </p>
            </div>
            <div style={{ marginTop: "18px" }} className="bottom-div">
              <p style={{ marginBottom: "18px" }}>Estimated Delivery Time</p>
              <p>India : 4-6 business days.</p>
              <p>International: 7-12 business days.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
