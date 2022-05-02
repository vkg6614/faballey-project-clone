import React, { useEffect, useState } from "react";
import "./PaymentDetails.css";
import { divs_array } from "../PaymentDetailsArray/PaymentDetailsArray";

const PaymentDetails = ({ checkActiveState }) => {
  // console.log(checkActiveState, "ddd");

  const [array_of_divs, setArray_of_divs] = useState("");
  const findOneArray = () => {
    let tempArray = divs_array.filter((a) => {
      return a.modeName === checkActiveState.state;
    });
    setArray_of_divs(tempArray);
  };
  useEffect(() => {
    findOneArray();
  }, [checkActiveState]);

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
        {checkActiveState.state}
      </p>

      {array_of_divs &&
        array_of_divs.map((a, i) => <div key={i + 1}>{a.mode}</div>)}
    </div>
  );
};

export default PaymentDetails;
