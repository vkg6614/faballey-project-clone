import React from "react";
import "./Home.css";
import Lists1 from "../Lists1/Lists1";
import CarouselComponent from "../Carousel/CrouselComponent";
// import Signup from "../Sign/Log/Signup";
const Home = () => {
  return (
    <div>
      <CarouselComponent />
      <Lists1 />
    </div>
  );
};

export default Home;
