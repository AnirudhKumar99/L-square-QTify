import React from "react";
import LeftArrowIcon from "../assets/left-arrow.svg";
import "./CarouselButton.css";

function LeftArrowButton({ onClick }) {
  return (
    <button className="swiper-button-prev " onClick={onClick}>
      <img src={LeftArrowIcon} alt="Previous" className="carousel-button" />
    </button>
  );
}
export default LeftArrowButton;
