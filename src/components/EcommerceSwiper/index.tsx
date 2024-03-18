"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperSlide, useSwiper } from "swiper/react";
import { Swiper } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { SwiperNavButtons } from "../Swiper/SwiperButton";
import { EcommerceData } from "@/utils/types";
import { EcommerceSwiper } from "@/lib/constData";


const EcommerceSwiper1 = ({data}:EcommerceData) => {
  const swiper1 = useSwiper()
  return (
    <section className=" py-10 ">
    <div className="py-5 lg:pb-10 text-2xl font-bold pr-4 md:text-4xl lg:text-9xl lg:pr-44  ">
    Latest Projects
    </div>
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
       
      }}
      className="   "
    >
      <div className="">
        {EcommerceSwiper.data.map((car, index) => (
          <SwiperSlide key={index} className="pt-4 ">
            <div className="lg:grid  lg:grid-cols-2   ">

          
            <div className="  overflow-y-hidden  h-full w-full  order-last  ">
                
              <Image
                src={car.url}
                alt={car.title}
                className=" h-64  w-full  -z-10 md:h-[450px] lg:grid    lg:h-[600px] lg:w-screen  "
                height={800}
                width={1200}
              />
            
            </div>
            <div className="order-first space-y-8  py-6 lg:py-0 grid grid-rows-2 " >
              <div>

                <div>
                    <span className="md:text-lg">{car.title}</span>
                </div>
                <div>
                    <h1 className="lg:text-5xl font-bold lg:pr-28  md:text-2xl">{car.description} &rarr;</h1>
                </div>
                </div> 
                <div className=" ">

            <SwiperNavButtons  />
                </div>
            </div>
            </div>

          

          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  </section>
  )
}

export default EcommerceSwiper1