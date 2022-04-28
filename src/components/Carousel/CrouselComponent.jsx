import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img
            src="https://img.faballey.com/images/banner/110180d5-3b80-4d46-8320-8c85157a5712.jpg"
            alt="img-1"
          />
        </div>
        <div>
          <img
            src="https://img.faballey.com/images/banner/fcb86ed4-a721-41d4-ae6d-bf7fbfda20dc.jpg"
            alt="img-2"
          />
        </div>
      </Carousel>
    </div>
  );
}
