"use client";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { MovieDetails, TvDetails } from "@/utils/types";
import SwipeCard from "./SwipeCard";

type Props = {
  slides: (TvDetails | MovieDetails)[];
  showDetails: boolean;
};

export const SwipeSlider = ({ slides, showDetails }: Props) => {
  return (
    <div className="flex flex-col h-fit gap-5">
      <div className="p-2 border border-grayish-blue rounded-lg">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".pagination",
            clickable: true,
          }}
          slidesPerView={3}
          spaceBetween={15}
          // breakpoints={{
          //   "@0.00": {
          //     slidesPerView: 1,
          //     spaceBetween: 25,
          //   },
          //   "@0.50": {
          //     slidesPerView: 1.25,
          //     spaceBetween: 25,
          //   },
          //   "@1.00": {
          //     slidesPerView: 2,
          //     spaceBetween: 25,
          //   },
          //   "@1.25": {
          //     slidesPerView: 2.5,
          //     spaceBetween: 20,
          //   },
          //   "@1.50": {
          //     slidesPerView: 3,
          //     spaceBetween: 30,
          //   },
          //   "@1.75": {
          //     slidesPerView: 4,
          //     spaceBetween: 15,
          //   },
          // }}
        >
          {slides.map((media) => (
            <SwiperSlide key={media.id}>
              <SwipeCard media={media} showDetails={showDetails} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwipeSlider;
