"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { SwiperNavButtons } from "@/components/CustomeWeb/Webswiper/SwiperButton";
import { carData } from '@/lib/constData'


const Webswiper = () => {
  return (
    <section className="h-full w-full bg-gray-100">
      <div className="mx-4 2xl:my-7 2xl:space-y-12 md:space-y-10 ">
        <h4 className="font-bold lg:text-5xl md:text-4xl">Latest Case Studies</h4>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1.3,
            },
            1024:{
                slidesPerView:1.5
            },
            1440:{
                slidesPerView:2.6
            }
          }}
          className=" space-y-24 sm:space-y-36 md:space-y-72 lg:space-y-64  2xl:space-y-36  "
        >
           
          <div className="">
            {carData.map((car, index) => (
              <SwiperSlide key={index} className="py-4">
                <div className="object-cover overflow-hidden overflow-y-hidden  ">
                  <Image
                    src={car.src}
                    alt={car.alt}
                    className=" h-60 absolute left-0 top-0 -z-10 md:h-96 lg:grid md:w-[560px] lg:h-[380px] lg:w-[95%] 2xl:w-[450px] 2xl:h-[350px]"
                    height={200}
                    width={200}
                  />
                  <h4 className=" px-6 bottom-20 text-white 2xl:px-14 overflow-hidden lg:px-6 lg:pr-6">
                    {car.alt}&rarr;
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <SwiperNavButtons />
        </Swiper>
        <div className="pt-8 md:pt-4">
            <button className="bg-blue-600 p-2 px-16 font-bold text-lg  py-4 text-white">Talk to Web development expert &rarr;</button>
        </div>
      </div>
    </section>
  );
};

export default Webswiper;
