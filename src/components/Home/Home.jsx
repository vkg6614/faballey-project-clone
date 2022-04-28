import React from "react";
import "./Home.css";
import CarouselComponent from "../Carousel/CrouselComponent";
import Lists1 from "../Lists1/Lists1";
const Home = ({ getValueFromHome }) => {
  const getTypeValue = (data) => {
    console.log(data);
    getValueFromHome(data);
  };

  return (
    <div>
      <CarouselComponent />
      <Lists1 getTypeValue={getTypeValue} />
    </div>
  );
};

export default Home;
