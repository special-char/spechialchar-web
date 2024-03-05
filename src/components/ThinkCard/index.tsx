"use client";

import Image from "next/image";
import { Card1 } from "@/lib/constData";
import { Card1Type } from "@/utils/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const ThinkCard = ({ data }: { data: Card1Type[] }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <div className="px-4 lg:pl-36">
        <Swiper
          onSwiper={setSwiperRef}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 2,
            },
          }}

          spaceBetween={50}

          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <main className="px-container flex flex-col items-center overflow-x-auto ">
            {Card1.cards.map((item) => (
              <div key={item.id} className="w-full  ">
                <SwiperSlide>
                  <div className=" border-2 z-10 overflow-hidden border-none">
                    <Image
                      src={item.url}
                      className="w-full aspect-video object-cover rounded-md hover:transform hover:duration-100 hover:scale-110 "
                      alt="image"
                      height={450}
                      width={600} />
                  </div>
                  <h1 className="text-4xl hover:text-blue sm:text-2xl font-bold mb-2 mt-4">
                    {item.title}
                  </h1>
                  <div className="text-gray mb-4 text-2xl">
                    {item.description}
                  </div>

                </SwiperSlide>
              </div>
            ))}
          </main>
        </Swiper>
      </div>
      
      </>
  );
};
export default ThinkCard;



