import React from "react";
import ResponsiveAppBar from "../CartNavbar/CartNavbar";
import "./Payment.css";
const Payment = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <div>
        <div className="payment-secondary-container">
          <div className="payment-mode">payment page</div>
          <div className="payment-details"></div>
          <div className="price-address"></div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
