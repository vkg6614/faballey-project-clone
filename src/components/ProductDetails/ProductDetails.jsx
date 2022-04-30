import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./ProductDetails.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";
import "./ProductDetails.css";
import { getCartDetailsAction } from "../../Redux/Actions/Actions";

const ProductDetails = () => {
  const { id } = useParams();
  const [proData, setProData] = useState();
  const [prodSize, setProdSize] = useState("");
  const { productsData } = useSelector((state) => state.getProductsReducer);
  const dispatch = useDispatch();

  useState(() => {
    getSingleProduct();
  }, [proData]);

  function getSingleProduct() {
    let singleData =
      productsData &&
      productsData.filter((data) => {
        return data.id === +id;
      });
    setProData(singleData);
  }

  const AddToCartBtnHandle = () => {
    let {
      title,
      categoryId,
      description,
      shopBy,
      price,
      discPrice,
      sizes,
      images,
      hoverImages,
    } = proData[0];

    axios.post("https://faballey-jsonserver-reactjs.herokuapp.com/cartsData", {
      title,
      color: prodSize,
      categoryId,
      description,
      shopBy,
      price,
      discPrice,
      sizes,
      images,
      hoverImages,
    });
    setTimeout(() => {
      dispatch(getCartDetailsAction());
    }, 200);
  };

  return (
    <div style={{ width: "90%", margin: "20px auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          className="img-divs"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <img
            src={proData && proData[0].images}
            alt={proData && proData[0].title}
          />
          <img
            src={proData && proData[0].hoverImages}
            alt={proData && proData[0].title}
          />
        </div>
        <div style={{ width: "36%" }}>
          <h3>{proData && proData[0].description}</h3>
          <h3>₹ {proData && proData[0].price}</h3>
          <p style={{ color: "green" }}>Inclusive of all taxes</p>
          <p
            style={{
              color: "grey",
              fontWeight: "bold",
              fontSize: "0.7rem",
              margin: "10px 0",
            }}
          >
            SKU: DRS05014A
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: "0.8rem", fontWeight: "bold" }}>SIZE: </p>
            <p style={{ textDecoration: "underline" }}>SIZE GUIDE </p>
          </div>
          <div className="size">
            <p onClick={(e) => setProdSize(e.target.innerText)}>XS</p>
            <p onClick={(e) => setProdSize(e.target.innerText)}>S</p>
            <p onClick={(e) => setProdSize(e.target.innerText)}>M</p>
            <p onClick={(e) => setProdSize(e.target.innerText)}>L</p>
            <p onClick={(e) => setProdSize(e.target.innerText)}>XL</p>
            <p onClick={(e) => setProdSize(e.target.innerText)}>2XL</p>
            <p onClick={(e) => setProdSize(e.target.innerText)}>3XL</p>
            <p onClick={(e) => setProdSize(e.target.innerText)}>4XL</p>
          </div>
          <div className="cartBtns">
            <p className="addToCart" onClick={() => AddToCartBtnHandle()}>
              ADD TO BAG
            </p>
            <p className="addToWishlist">
              <FavoriteBorderIcon />
              <span>ADD TO WISHLIST</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
