import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SingleCart from "../SingleCart/SingleCart";
import "../Lists/Lists.css";
import "../PaymentDetails/PaymentDetails.css";

const Lists2 = () => {
  const { productsData } = useSelector((state) => state.getProductsReducer);
  const [updateData, setUpdateData] = useState([]);
  useEffect(() => {
    let tempData =
      productsData &&
      productsData.filter((pro_data) => {
        if (+pro_data.id < 18 && +pro_data.id > 11) return pro_data;
        // return pro_data;
      });
    setUpdateData(tempData);
  }, [productsData]);

  return (
    <div style={{ width: "98%", margin: "0 auto" }}>
      <div>
        <div className="right-list-container" style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              gap: ".5em",
              width: "100%",
            }}
          >
            {updateData &&
              updateData.map((currElem) => (
                <SingleCart key={currElem.id} currElem={currElem} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists2;
