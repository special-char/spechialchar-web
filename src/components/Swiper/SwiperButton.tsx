import React from "react";
import { useSwiper } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="">
      <button className=" bg-background   px-4 py-5 rounded-full  grid grid-cols-2 gap-x-2  lg:gap-x-4  ">
        <IoIosArrowBack
          className="h-4 w-4 text-primary text-xl"
          onClick={() => swiper.slidePrev()}
        />
        <IoIosArrowForward
          className="h-4 w-4 text-primary text-xl"
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
};
