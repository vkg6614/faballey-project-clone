import { NavLink } from "react-router-dom";

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

const walletsArray = [
  "Other Wallets",
  "Freecharge",
  "Olamoney",
  "PayZapp",
  "Airtel Money",
  "Phone Pe / BHIM UPI",
];

// const payNowHandleClick = () => {

// };

export const divs_array = [
  {
    modeName: "CREDIT/DEBIT CARD",
    mode: (
      <div className="creditCard-debitCard">
        <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
        <input type="text" placeholder="Card Holder Name" />
        <div className="back-card-input-details">
          <input type="text" placeholder="MM" />
          <input type="text" placeholder="YY" />
          <input type="text" placeholder="CVV" />
          <span>?</span>
        </div>
        <NavLink className="payNow" to="/successfull">
          PAY NOW
        </NavLink>
      </div>
    ),
  },
  {
    modeName: "UPI",
    mode: (
      <div>
        <div className="upi">
          <input type="text" placeholder="VPA/UPI ID (eg. XXXXXXXXXX@upi)" />
          <NavLink className="payNow" to="/successfull">
            PAY NOW
          </NavLink>
          <NavLink className="payNow" to="/successfull">
            PAY USING QR CODE
          </NavLink>
        </div>
      </div>
    ),
  },
  {
    modeName: "NET BANKING",
    mode: (
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
          <NavLink className="payNow" to="/successfull">
            PAY NOW
          </NavLink>
        </div>
      </div>
    ),
  },
  {
    modeName: "MOBILE WALLETS",
    mode: (
      <div className="mobile-wallets">
        <div>
          <img src="https://www.faballey.com/images/paytmLg.png" alt="paytm" />
          <br />
          <br />
          <img src="https://www.faballey.com/images/amazonpay.png" alt="pay" />
        </div>
        <div>
          <select>
            {walletsArray.map((wallet, index) => (
              <option key={index}>{wallet}</option>
            ))}
          </select>
          <p style={{ fontSize: "0.8rem" }}>
            We will redirect you to your bank website to authorize the payment.
          </p>
          <NavLink className="payNow" to="/successfull">
            PAY NOW
          </NavLink>
        </div>
      </div>
    ),
  },
  {
    modeName: "CASH ON DELIVERY",
    mode: (
      <div className="cashOnDelivery">
        <NavLink className="payNow" to="/successfull">
          PAY CASH ON DELIVERY
        </NavLink>
      </div>
    ),
  },
];
