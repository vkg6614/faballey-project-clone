import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const [success, setSucess] = useState(false);
  const navigate = useNavigate();
  setTimeout(() => {
    setSucess(true);
  }, 2000);

  const onSuccessHanleClick = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div style={{ width: "30%", margin: "50px auto" }}>
      <div style={{ display: success ? "none" : "block" }}>
        <progress>....</progress>
      </div>
      <div
        style={{
          display: success ? "block" : "none",
        }}
      >
        <p
          style={{
            color: "green",
            fontWeight: "bold",
            fontSize: "0.8rem",
          }}
        >
          Payment Done Successfully, You can track you order details on
          faballey-clone.com/orderDetails
        </p>
        <button
          style={{
            color: "white",
            backgroundColor: "green",
            border: "none",
            width: "100%",
            borderRadius: "10px",
            cursor: "pointer",
            padding: "1em",
          }}
          onClick={() => onSuccessHanleClick()}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
