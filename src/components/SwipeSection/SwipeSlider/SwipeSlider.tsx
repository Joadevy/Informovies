"use client";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from "react";
import { IMedia } from "@/utils/types";

type props = {
  data: IMedia[];
};

register();

export const SwipeSlider: React.FC<props> = ({ data }) => {
  const swiperElRef = useRef(null);

  //   useEffect(() => {
  //     // listen for Swiper events using addEventListener
  //     swiperElRef.current?.addEventListener("progress", (e) => {
  //       const [swiper, progress] = e.detail;
  //       console.log(progress);
  //     });

  //     swiperElRef.current?.addEventListener("slidechange", (e) => {
  //       console.log("slide changed");
  //     });
  //   }, []);

  return (
    <Swiper
      ref={swiperElRef}
      slides-per-view="3"
      navigation={true}
      pagination={true}
    >
      {data.map((media) => (
        <SwiperSlide key={media.id}>Slide 1</SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};

export default SwipeSlider;
