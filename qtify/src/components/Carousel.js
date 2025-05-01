// import React from "react";
// import "swiper/swiper-bundle.css";
// import AlbumCard from "./AlbumCard";
// import "./Carousel.css";
// import LeftArrowButton from "./LeftArrowButton";
// import RightArrowButton from "./RightArrowButton";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { useRef } from "react";
// import {Navigation}  from 'swiper/modules'; 

// function Carousel({ items, isSongsSection }) {
//   const swiperRef = useRef(null);
//   const params = {
//     slidesPerView: 2, 
//     spaceBetween: 20,
//     loop: true,
//     breakpoints: {
//       320: { slidesPerView: 1 },
//       640: { slidesPerView: 2 },
//       992: { slidesPerView: 3 },
//       1200: { slidesPerView: 4 },
//       1400: { slidesPerView: 5 },
//     },
//   };

//   return (
//     <div className="carousel-container">
//       <Swiper
//         {...params}
//         onSwiper={(swiper) => {
//           swiperRef.current = swiper;
//         }}
//         modules={[Navigation]}
//         navigation={{
//           prevEl: '.swiper-button-prev', // Selector for your custom prev button (if you still want to use your structure)
//           nextEl: '.swiper-button-next', // Selector for your custom next button
//           // You can also provide custom SVG strings directly:
//           // prevEl: '<svg viewBox="0 0 27 44"><path d="M0 22L22 44L22 0L0 22Z" fill="currentColor"/></svg>',
//           // nextEl: '<svg viewBox="0 0 27 44"><path d="M27 22L5 44L5 0L27 22Z" fill="currentColor"/></svg>',
//         }}
//       >
//         {items.length > 0 &&
//           items.map((album) => (
//             <SwiperSlide key={album.id}>
//               <AlbumCard album={album} isSongsSection={isSongsSection} />
//             </SwiperSlide>
//           ))}
//       </Swiper>
//       <div className="swiper-buttons">
//         <LeftArrowButton onClick={() => swiperRef.current?.slidePrev()} />
//         <RightArrowButton onClick={() => swiperRef.current?.slideNext()} />
//       </div>
//     </div>
//   );
// }

// export default Carousel;

import React from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LeftArrowButton from "./LeftArrowButton";
import RightArrowButton from "./RightArrowButton";
import AlbumCard from "./AlbumCard"

const Carousel = ({ items, isSongsSection }) => {
  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"7"}
        spaceBetween={"20"}
        allowTouchMove
      >
        <LeftArrowButton />
        <RightArrowButton />
        {items.length > 0 &&
          items.map((album) => (
            <SwiperSlide key={album.id}>
              <AlbumCard album={album} isSongsSection={isSongsSection} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Carousel;