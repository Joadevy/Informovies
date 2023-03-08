"use client";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from "react";
import { IMedia } from "@/utils/types";
import Image from "next/image";
import { getImageURL, getYear } from "@/utils/helpers";
import ButtonBookmark from "@/components/Buttons/ButtonBookmark";

type props = {
  data: IMedia[];
  sizeImages: number;
};

register();

export const SwipeSlider: React.FC<props> = ({ data, sizeImages }) => {
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
        <SwiperSlide key={media.id}>
          <div
            // href={`/${media.id}`}
            className={` flex-grow flex flex-col flex-wrap relative`}
          >
            <ButtonBookmark media={media} />
            <header
              className={`h-[250px] lg:h-[${sizeImages}px] w-full relative`}
            >
              <Image
                className="rounded-xl"
                src={getImageURL(media.backdrop_path, sizeImages)}
                sizes={`25vw`}
                fill
                alt=""
              />
            </header>
            <footer className="pb-4 pt-2">
              <ul className=" text-xs flex gap-2 text-grayish-blue">
                <li>{media.media_type === "tv" ? "Tv Series" : "Movie"}</li>
                <li>
                  {getYear(
                    media.media_type === "tv"
                      ? media.first_air_date
                      : media.release_date
                  )}
                </li>
                <li>
                  {"★"
                    .repeat(Math.round(media.vote_average / 2))
                    .padEnd(5, "☆")}
                </li>
              </ul>
              <p>{media.title ?? media.name}</p>
            </footer>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipeSlider;
