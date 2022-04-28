import { Delete } from "@mui/icons-material";
import React from "react";
import ResponsiveAppBar from "../CartNavbar/CartNavbar";
import "./CartDetails.css";
import DeleteIcon from "@mui/icons-material/Delete";

const CartDetails = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="cartDetails-main-container">
        <div className="cartDetails-secondary-container">
          <div className="cartDetails-left-container">
            <h3>My Shopping Bag(3)</h3>
            <div>
              <div className="single-pro">
                <div style={{ border: "1px solid black", width: "130px" }}>
                  <img width="130px" src="" alt="" />
                </div>
                <div>
                  <p>Blue Bell Sleeve Jacquard Wrap Top</p>
                  <div className="small-details">
                    <p>Size</p>
                    <p>Quantity</p>
                    <p>Color</p>
                  </div>
                  <div style={{ borderBottom: "2px solid grey" }}>
                    <p>SKU CODE</p>
                  </div>

                  <div className="add-del-div">
                    <p>Edit Item</p>
                    <p>Move To Wishlist</p>
                  </div>
                </div>
                <div>
                  <p className="price">Price 1200</p>
                  <DeleteIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="cartDetails-right-container">
            <h3>Price Details</h3>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
