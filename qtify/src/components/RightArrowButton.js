// import React from 'react';
// import RightArrowIcon from '../assets/right_arrow.svg'
// import './CarouselButton.css';

// function RightArrowButton({onClick}) {
//   return (
//     <img src={RightArrowIcon}  alt="Next" className="swiper-button-next" />
//   );
// }

// export default RightArrowButton;

import React from 'react';
import RightArrowIcon from '../assets/right_arrow.svg';
import './CarouselButton.css';

function RightArrowButton({ onClick }) {
  return (
    <button className="swiper-button-next" onClick={onClick}>
      <img src={RightArrowIcon} alt="Next" className="carousel-button" />
    </button>
  );
}

export default RightArrowButton;
