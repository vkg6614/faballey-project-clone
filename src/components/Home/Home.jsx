import React from "react";
import "./Home.css";
import Lists1 from "../Lists1/Lists1";
// import Signup from "../Sign/Log/Signup";
const Home = ({ getValueFromHome }) => {
  const getTypeValue = (data) => {
    console.log(data);
    getValueFromHome(data);
  };

  return (
    <div>
      <Lists1 getTypeValue={getTypeValue} />
    </div>
  );
};

export default Home;
