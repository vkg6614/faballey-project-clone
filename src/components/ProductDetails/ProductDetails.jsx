import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";
import "./ProductDetails.css";
import { getCartDetailsAction } from "../../Redux/Actions/Actions";

var productSizes = {
  activeClass: "",
  sizeArray: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
};

const ProductDetails = () => {
  const { id } = useParams();

  const { productsData } = useSelector((state) => state.getProductsReducer);
  const { cartData } = useSelector((state) => state.getCartDetailsReducer);
  const [proData, setProData] = useState([]);
  const [prodSize, setProdSize] = useState([]);
  const [checkActiveState, setCheckActiveState] = useState(productSizes);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      let singleData = productsData.filter((data) => {
        return data.id === +id;
      });
      setProData(singleData);
    }, 200);
  }, [proData, cartData, id, productsData]);

  const AddToCartBtnHandle = () => {
    let {
      title,
      categoryId,
      description,
      color,
      shopBy,
      price,
      discPrice,
      sizes,
      images,
      hoverImages,
    } = proData[0];

    if (!prodSize) {
      return alert("select size first");
    }

    let filtData = cartData.filter((data) => {
      if (description === data.description && title === data.title) return data;
    });
    if (filtData.length === 0) {
      axios.post(
        "https://faballey-jsonserver-reactjs.herokuapp.com/cartsData",
        {
          title,
          size: prodSize,
          categoryId,
          color,
          description,
          shopBy,
          price,
          discPrice,
          sizes,
          images,
          hoverImages,
        }
      );
      setTimeout(() => {
        dispatch(getCartDetailsAction());
      }, 200);
    } else {
      alert("already in cart");
    }
  };

  const setProductSizeHandleClick = (e, id) => {
    setProdSize(e);
    setCheckActiveState({ ...productSizes, activeClass: id });
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
            src={proData.length > 0 ? proData[0].images : "undefined"}
            alt={proData.length > 0 ? proData[0].title : "undefined"}
          />
          <img
            src={proData.length > 0 ? proData[0].hoverImages : "undefined"}
            alt={proData.length > 0 ? proData[0].title : "undefined"}
          />
        </div>
        <div style={{ width: "36%" }}>
          <h3>{proData.length > 0 && proData[0].description}</h3>
          <h3>₹ {proData.length > 0 && proData[0].price}</h3>
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
            {checkActiveState.sizeArray.map((size, index) => (
              <p
                className={
                  index === checkActiveState.activeClass ? "activeSize" : ""
                }
                key={index}
                onClick={(e) =>
                  setProductSizeHandleClick(e.target.innerText, index)
                }
              >
                {size}
              </p>
            ))}
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
