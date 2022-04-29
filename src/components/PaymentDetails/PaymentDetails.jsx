import React from "react";
import "./PaymentDetails.css";

const bankArray = [
  "Other Banks",
  "Bank of India",
  "Bank of Maharashtra",
  "Central Bank of India",
  "Union Bank of India",
  "DCB Bank",
  "Federal Bank",
  "Industrial Development Bank of India",
  "Indian Bank",
  "IndusInd Bank",
  "Indian Overseas Bank",
  "Jammu and Kashmir Bank",
  "Karnataka Bank",
  "Karur Vysya",
  "South Indian Bank",
  "Punjab National Bank",
  "Vijaya Bank",
  "Yes Bank",
  "CityUnion",
  "Bank of Baroda",
  "Standard Chartered Bank",
  "Allahabad Bank",
  "Punjab And Sind Bank",
  "DENA Bank",
  "IDBS Bank Ltd",
  "State Bank of Patiala",
  "IDFC FIRST Bank",
];

const PaymentDetails = () => {
  return (
    <div className="paymentDetails">
      <p
        style={{
          fontWeight: "bold",
          borderBottom: "1px solid grey",
          padding: "12px 1em",
          fontSize: "0.8rem",
        }}
      >
        DEBIT/CREDIT CARD
      </p>
      <div className="creditCard-debitCard">
        <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
        <input type="text" placeholder="Card Holder Name" />
        <div className="back-card-input-details">
          <input type="text" placeholder="MM" />
          <input type="text" placeholder="YY" />
          <input type="text" placeholder="CVV" />
          <span>?</span>
        </div>
        <button>PAY NOW</button>
      </div>
      <div className="upi">
        <input type="text" placeholder="VPA/UPI ID (eg. XXXXXXXXXX@upi)" />
        <button>PAY NOW</button>
        <button>PAY NOW</button>
      </div>
      <div className="net-banking">
        <div className="main-banks">
          <p>AXIS</p>
          <p>HDFC</p>
          <p>ICICI</p>
          <p>KOTAK</p>
          <p>SBI</p>
          <p>YES</p>
        </div>
        <div>
          <select>
            {bankArray.map((banks, index) => (
              <option key={index}>{banks}</option>
            ))}
          </select>
          <p style={{ fontSize: "0.8rem" }}>
            We will redirect you to your bank website to authorize the payment.
          </p>
          <button>PAY NOW</button>
        </div>
      </div>
      <div className="mobile-wallets">
        <div>
          <img src="https://www.faballey.com/images/paytmLg.png" alt="paytm" />
          <br />
          <br />
          <img src="https://www.faballey.com/images/amazonpay.png" alt="pay" />
        </div>
        <div>
          <select>
            {bankArray.map((banks, index) => (
              <option key={index}>{banks}</option>
            ))}
          </select>
          <p style={{ fontSize: "0.8rem" }}>
            We will redirect you to your bank website to authorize the payment.
          </p>
          <button>PAY NOW</button>
        </div>
      </div>
      <div className="cashOnDelivery">
        <button>PAY 1200 BY CASH</button>
      </div>
    </div>
  );
};

export default PaymentDetails;
