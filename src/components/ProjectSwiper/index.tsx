"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { backendData } from "@/lib/constData";
import Link from "next/link";

const Swiper1 = () => {
  return (
    <div className=" bg-gray px-container">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        navigation={true}
      >
        <div className="">
          {backendData.SwiperServices.map((item, index) => (
            <SwiperSlide key={index} className="">

              <div className="relative ">
                <Image
                  src={item.src}
                  alt="projectSwiper"
                  title="projectSwiper"
                  className="flex flex-col mx-auto justify-center items-center gap-x-4"
                  height={500}
                  width={1000}
                />
              </div>

            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Swiper1;
