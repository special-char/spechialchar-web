"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel, Autoplay } from "swiper/modules";
import Image from "next/image";
import { MobileSwiperType } from "@/utils/types";
import { MobileSwiperData } from "@/lib/constData";

const MobileSwiper = ({ data }: MobileSwiperType) => {
  return (
    <section className="bg-black h-[50%] w-full ">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        modules={[Mousewheel, Autoplay]}
        className="  max-md:h-72 md:h-72 lg:h-80 text-white"
        autoplay={{
          delay: 3000,
        }}
      >
        <div>
          {MobileSwiperData.data.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="p-1 md:p-4">
                <div className="lg:grid lg:grid-cols-2 lg:items-center">
                  <div className="flex gap-x-4 md:gap-x-8 items-center lg:gap-x-10 ">
                    <div>
                      <Image
                        src={slide.src}
                        alt="jef"
                        className="h-16 md:h-24 md:w-24 rounded-full w-16"
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className="text-yellow-300 text-sm md:text-base flex flex-col">
                      <span>{slide.name}</span>
                      <span>{slide.title}</span>
                      <span>{slide.company}</span>
                    </div>
                  </div>
                  <div className="py-4 md:text-3xl md:py-5 lg:text-4xl">
                    &quot;{slide.quote}&quot;
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default MobileSwiper;
