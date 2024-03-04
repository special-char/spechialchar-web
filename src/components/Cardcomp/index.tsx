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

const Cardcomp = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {/* <div className="w-full bg-black">
        <div className=' flex flex-1 grid-cols-1 md:grid-cols-2 2xl:m-0'>
      {Card.card.map((item) => (
        <>
        <SwiperSlide>
        <main className=" flex flex-wrap gap-3 items-center overflow-x-auto ">    
        <div key={item.id} className="w-full ">
          <div className="">
            <div className="">
            <Image
              src={item.url}
              className="object-cover aspect-video  hover:duration-300 hover:scale-105 hover:rounded-md"
              alt="image"
             height={300} 
              width={800}
            />
            </div>
            <div className="flex text-wrap">
            <h1 className="text-2xl hover:text-blue-400 sm:text-2xl font-bold mb-2 mt-4">
              {item.title}
            </h1>
            </div>
            <div className="text-gray-500 mb-4 text-2xl">{item.description}</div>
          </div>
        </div>
    </main>
        </SwiperSlide>
        
        </>
        ))}
        </div></div> */}

      {/* <main className=" flex flex-wrap items-center overflow-x-auto ">    
      {Card.card.map((item) => (
        <div key={item.id} className="w-full md:w-1/2  ">
          <SwiperSlide>
          <div className="p-4">
            <Image
              src={item.url}
              className=" w-full hover:duration-300 hover:scale-105 aspect-video object-cover rounded-md"
              alt="image"
              height={450}
              width={600}
            />
            <h1 className="text-4xl hover:text-blue sm:text-2xl font-bold mb-2 mt-4">
              {item.title}
            </h1>
            <div className="text-gray mb-4 text-2xl">{item.description}</div>
          </div>
          </SwiperSlide>
        </div>
      ))}
    </main> */}


    </Swiper>
  );
};
export default Cardcomp;
