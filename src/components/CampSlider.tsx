"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { CampCard } from "./CampCard";

export const CampSlider = () => {
  return (
    <Swiper
      className="lg:container w-full h-[340px] lg:h-[400px] xl:h-[640px] lg:!pr-[200px] xl:!pr-[300px] 2xl:!pr-[400px]"
      spaceBetween={80}
      autoplay={{
        delay: 2500,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide className="overflow-hidden lg:rounded-5xl">
        <CampCard backgroundImage="img-1.png" title="Putuk Truno Camp" subtitle="Prigen, Pasuruan" peopleJoined="50+ Joined" />
      </SwiperSlide>
      <SwiperSlide className="overflow-hidden lg:rounded-5xl">
        <CampCard backgroundImage="img-2.png" title="Mountain View Camp" subtitle="Somewhere in the Wilderness" peopleJoined="50+ Joined" />
      </SwiperSlide>
    </Swiper>
  );
};
