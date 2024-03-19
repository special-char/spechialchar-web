import React from "react";
import { useSwiper } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="pt-3 lg:pt-8">
      <button className=" bg-red-100   px-4 py-5 rounded-2xl  grid grid-cols-2 gap-x-2 sm:mt-[85px] md:mt-[140px] lg:gap-x-4  ">
        <IoIosArrowBack
          className="h-4 w-4 text-black text-xl"
          onClick={() => swiper.slidePrev()}
        />
        <IoIosArrowForward
          className="h-4 w-4 text-black text-xl"
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
};
