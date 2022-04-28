import React from "react";
import "./Lists1.css";
import { useNavigate } from "react-router-dom";

const Lists1 = ({ getTypeValue }) => {
  const navigate = useNavigate();

  const onLists1ClickChange = (type) => {
    getTypeValue(type);
    navigate("/lists");
  };

  return (
    <div className="lists1-container">
      <h1>What we are crushing on</h1>
      <div className="lists1-img-div">
        <img
          onClick={() => onLists1ClickChange("TOPS")}
          src="https://img.faballey.com/images/banner/11f6e3ad-9dd4-4556-a52a-3020abf10418.jpg"
          alt="TOPS"
        />
        <img
          onClick={() => onLists1ClickChange("LOUNGEWEAR")}
          src="https://img.faballey.com/images/banner/a8da0594-0a1e-43bf-8a25-ee1bc64c2363.jpg"
          alt="JUMPSUITS"
        />
        <img
          onClick={() => onLists1ClickChange("DRESSES")}
          src="https://img.faballey.com/images/banner/bbf90ab6-a897-44d7-8c6d-e408d0699eb3.jpg"
          alt="DRESSES"
        />
      </div>
    </div>
  );
};

export default Lists1;
