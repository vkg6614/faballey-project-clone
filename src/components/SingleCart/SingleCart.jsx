import React from "react";
import { useNavigate } from "react-router-dom";

const SingleCart = ({ currElem }) => {
  const navigate = useNavigate();
  const prodCartHandleOnClick = (id) => {
    navigate(`/${id}`);
  };
  return (
    <div key={currElem.id}>
      <div
        onClick={() => {
          prodCartHandleOnClick(currElem.id);
        }}
        className="list"
      >
        <p className="off">
          {currElem.discPrice}%
          <br />
          OFF
        </p>
        <img className="image" src={currElem.images} alt={currElem.title} />
        <img
          className="hover-image"
          src={currElem.hoverImages}
          alt={currElem.title}
        />
        <p className="sizes">{currElem.sizes}</p>
      </div>
      <p style={{ fontWeight: "bold", fontSize: "0.8em" }}>
        {currElem.description}
      </p>
      <span
        style={{
          color: "pink",
          fontWeight: "bold",
          marginRight: "0.5em",
          fontSize: "0.8em",
        }}
      >
        Rs{currElem.price}
      </span>
      <span
        style={{
          fontSize: "0.8em",
          textDecoration: "line-through",
        }}
      >
        Rs {currElem.price + (currElem.price * currElem.discPrice) / 100}
      </span>
    </div>
  );
};

export default SingleCart;
