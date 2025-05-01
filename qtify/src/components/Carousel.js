import React from "react";
import "swiper/swiper-bundle.css";
import AlbumCard from "./AlbumCard";
import "./Carousel.css";
import LeftArrowButton from "./LeftArrowButton";
import RightArrowButton from "./RightArrowButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

function Carousel({ items, isSongsSection }) {
  const swiperRef = useRef(null);
  const params = {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      320: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1400: { slidesPerView: 5 },
    },
  };

  return (
    <div className="carousel-container">
      <Swiper
        {...params}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {items.length > 0 &&
          items.map((album) => (
            <SwiperSlide key={album.id}>
              <AlbumCard album={album} isSongsSection={isSongsSection} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="swiper-buttons">
        <LeftArrowButton onClick={() => swiperRef.current?.slidePrev()} />
        <RightArrowButton onClick={() => swiperRef.current?.slideNext()} />
      </div>
    </div>
  );
}

export default Carousel;
