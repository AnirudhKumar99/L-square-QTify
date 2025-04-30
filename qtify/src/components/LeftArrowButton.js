// import React from 'react';
// import LeftArrowIcon from '../assets/left-arrow.svg';
// import './CarouselButton.css';

// // function LeftArrowButton({onClick}) {
// //   return (
// //     <img src={LeftArrowIcon}  alt="Previous" className="swiper-button-prev carousel-button" />
// //   );
// // }
// const LeftArrowButton = ({ onClick }) => (
//   <button className="swiper-button-prev" onClick={onClick}>
//     <img src={LeftArrowIcon} alt='prev' className="carousel-button" />
//   </button>
// );

// export default LeftArrowButton;

// import React from 'react';
// import RightArrowIcon from '../assets/left-arrow.svg'
// import './CarouselButton.css';

// function LeftArrowButton({onClick}) {
//   return (
//     <img src={RightArrowIcon}  alt="Next" className="swiper-button-prev" />
//   );
// }

// export default LeftArrowButton;
import React from "react";
import LeftArrowIcon from "../assets/left-arrow.svg";
import "./CarouselButton.css";

function LeftArrowButton({ onClick }) {
  return (
    <button className="swiper-button-prev " onClick={onClick}>
    {/* // <button className="carousel-button-prev" onClick={onClick}> */}
      <img src={LeftArrowIcon} alt="Previous" className="carousel-button" />
    </button>
  );
}
export default LeftArrowButton;
