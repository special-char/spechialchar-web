"use client"
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import {  SwiperSlide, useSwiper } from "swiper/react";
import { Swiper } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { SwiperNavButtons } from "./SwiperButton";
import { SwiperServicesData } from "@/utils/types";
import { SwiperServices } from "@/lib/constData";



const Swiper1 = ({data}:SwiperServicesData) => {
  return (
    <div className="p-4 px-6 py-10 md:px-8">
        <div className="py-5 text-2xl font-bold pr-4 md:text-4xl ">
        {data.title}
        </div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 1.4,
          },
          1024: {
            slidesPerView: 1.4,
          },
          1440: {
            slidesPerView: 2.9,
          },
        }}
        className="   "
      >
        <div className="">
          {SwiperServices.data.map((car, index) => (
            <SwiperSlide key={index} className="py-4">
              <div className=" overflow-hidden overflow-y-hidden  h-56 ">
                <Image
                  src={car.src}
                  alt={car.alt}
                  className=" h-64 absolute w-screen left-0 top-0 -z-10 md:h-96 lg:grid  sm:h-[350px] md:w-[560px] lg:h-[400px] lg:w-[90%] "
                  height={200}
                  width={800}
                />
                <div className=" px-6 py-3  md:px-12  text-white  text-2xl md:text-3xl  font-bold overflow-hidden lg:px-10 lg:pr-20">
                  {car.alt}&rarr;
                </div>
              </div>
              
            </SwiperSlide>
          ))}
        </div>
       <SwiperNavButtons/>
      </Swiper>
    </div>
  );
};

export default Swiper1;
