import React from "react";
import Image from "next/image";
import { Button } from ".";

export const Hero = () => {
  return (
    <section className="container relative flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-col flex-1 xl:w-1/2">
        <Image src="/assets/img/camp.svg" alt="camp" width={50} height={51} className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px] h-auto" />
        <h1 className="text-5xl font-bold lg:text-8xl">Putuk Truno Camp Area</h1>
        <p className="mt-6 text-gray-30 xl:max-w-[520px]">We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>

        <div className="flex flex-wrap gap-5 my-11">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image src="/assets/img/star.svg" key={index} alt="star" width={24} height={24} />
              ))}
          </div>

          <p className="font-bold lg:text-xl text-blue-70">
            198k
            <span className="ml-1 font-normal lg:text-xl">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button href="#" title="Download App" variant="btn_green" />
          <Button href="#" title="How we work?" icon="/assets/img/play.svg" variant="btn_white_text" />
        </div>
      </div>

      <div className="relative flex items-start flex-1">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 text-white">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-gray-20">Location</p>
              <Image src="/assets/img/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="text-xl font-bold">Aguas Calientes</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-gray-20">Distance</p>
              <p className="text-xl font-bold">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-20">Elevation</p>
              <p className="text-xl font-bold">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
