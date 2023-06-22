"use client";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { MovieDetails, TvDetails } from "@/utils/types";
import SwipeCard from "./SwipeCard";
import TopSwipeCard from "./TopSwipeCard";

type Props = {
  slides: (TvDetails | MovieDetails)[];
  showMediaType: boolean;
  isTopSection?: boolean;
};

export const SwipeSlider = ({ slides, showMediaType, isTopSection }: Props) => {
  return (
    <div className="flex flex-col h-fit gap-5">
      <div className="">
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
          spaceBetween={isTopSection ? 35 : 15}
          breakpoints={
            isTopSection
              ? {
                  "@0.50": {
                    slidesPerView: 1.75,
                    spaceBetween: 0,
                  },
                  "@1.00": {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  "@1.25": {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                  "@1.50": {
                    slidesPerView: 4,
                    spaceBetween: 0,
                  },
                  "@1.75": {
                    slidesPerView: 5,
                    spaceBetween: 0,
                  },
                }
              : {
                  "@0.50": {
                    slidesPerView: 1.25,
                    spaceBetween: 25,
                  },
                  "@1.00": {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  "@1.25": {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                  },
                  "@1.50": {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  "@1.75": {
                    slidesPerView: 3.5,
                    spaceBetween: 15,
                  },
                }
          }
        >
          {isTopSection
            ? slides.slice(0, 10).map((media, index) => (
                <SwiperSlide key={media.id}>
                  <TopSwipeCard
                    media={media}
                    showMediaType={showMediaType}
                    number={index + 1}
                  />
                </SwiperSlide>
              ))
            : slides.map((media, index) => (
                <SwiperSlide key={media.id}>
                  <SwipeCard media={media} showMediaType={showMediaType} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwipeSlider;
