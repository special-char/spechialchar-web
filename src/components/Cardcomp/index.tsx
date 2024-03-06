"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Card } from "@/lib/constData";
import { CardType } from "@/utils/types";
import project from "../../../public/images/project1.webp";
import Arrow from '@/public/icons/angle-circle-arrow-right-icon.svg'

const Cardcomp = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
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


        <main className=" flex flex-col items-center overflow-x-auto ">
          {Card.card.map((item) => (
            <div key={item.id} className="w-full  ">
              <SwiperSlide>
                <div className=" border-2 z-10 overflow-hidden border-none">
                  <Image
                    src={item.url}
                    className="w-full aspect-video object-cover rounded-md hover:transform hover:duration-100 hover:scale-110 "
                    alt="image"
                    height={450}
                    width={600}

                  />
                </div>
                <h1 className="text-4xl hover:text-blue sm:text-2xl font-bold mb-2 mt-4">
                  {item.title}
                </h1>
                <div className="text-gray text-2xl">
                  {item.description}
                </div>

              </SwiperSlide>
            </div>
          ))}
        </main>
      </Swiper>
      <div className="grid pb-12 gap-4 md:grid-cols-2 md:my-12 items-center">
          <a className="flex gap-2 items-center font-bold">View all cases <Arrow/></a>
          <button className=" justify-center bg-indigo-600  py-3 text-sm  font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Start your innovation journey
          </button>
        </div>
    </div>
  );
};
export default Cardcomp;
