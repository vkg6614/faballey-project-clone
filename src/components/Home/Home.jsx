import React from "react";
import "./Home.css";
import Lists1 from "../Lists1/Lists1";
import CarouselComponent from "../Carousel/CrouselComponent";
import Lists2 from "../Lists2/Lists2";
// import Signup from "../Sign/Log/Signup";
const Home = () => {
  return (
    <div>
      <CarouselComponent />
      <Lists1 />
      <div style={{ width: "98%", margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ margin: "20px 0" }}>Hot Right Now</h1>
        <img
          width="100%"
          src="https://img.faballey.com/images/banner/ddbbce5d-a4f5-4940-aeba-d2f54a811603.jpg"
          alt="img1"
        />
      </div>

      <div style={{ width: "98%", margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ margin: "20px 0" }}>SIZZLING & SPANKIN' NEW</h1>
        <img
          width="100%"
          src="https://img.faballey.com/images/banner/4d8c0818-214f-4ec4-9416-990f91198549.jpg"
          alt="img2"
        />
      </div>
      <Lists2 />
    </div>
  );
};

export default Home;
