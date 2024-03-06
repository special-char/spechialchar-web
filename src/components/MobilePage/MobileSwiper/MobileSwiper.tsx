"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { SwiperNavButtons } from "@/components/WebPage/Webswiper/SwiperButton";
import { MobileSwap } from "@/lib/constData";
import Button from "@/components/Button";






const Mobileswiper = () => {
  return (
    <section className="h-full w-full bg-slate-200">
      <div className="mx-4 md:mx-6 2xl:my-7 2xl:space-y-12 md:space-y-10 space-y-8 2xl:mx-0">
        <h4 className="font-bold lg:text-5xl md:text-4xl">Latest Case Projects</h4>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1.3,
            },
            1024:{
                slidesPerView:1.4
            },
            1440:{
                slidesPerView:2.6
            }
          }}
          className=" space-y-20 mt-28 sm:space-y-72 md:space-y-72 lg:space-y-64  2xl:space-y-36  "
        >
           
          <div className="">
            {MobileSwap.map((car, index) => (
              <SwiperSlide key={index} className="py-4  pb-12 ">
                <div className="object-cover overflow-hidden overflow-y-hidden  ">
                  <Image
                    src={car.url}
                    alt={car.title}
                    className=" h-60 absolute left-0 top-0 -z-10 md:h-96 lg:grid sm:w-[560px] sm:h-[350px] md:w-[500px] lg:h-[380px] lg:w-[95%] 2xl:w-[450px] 2xl:h-[350px]"
                    height={200}
                    width={800}
                  />
                  <h4 className=" px-6 py-3  md:px-6  text-white 2xl:px-14 overflow-hidden lg:px-7 lg:pr-6">
                    {car.title}&rarr;
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </div>
         

          <SwiperNavButtons />
          
        </Swiper>
       {/* <Button>Contact Us</Button> */}
       <Button >hire mobile app developer</Button>
      </div>
    </section>
  );
};

export default Mobileswiper;
