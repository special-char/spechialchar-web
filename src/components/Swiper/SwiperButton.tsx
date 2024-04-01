import React from "react";
import { useSwiper } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex bg-background px-4 py-5 gap-x-9 w-container items-center justify-center rounded-full">
      <button name="arrowleft" aria-label="left">
        <IoIosArrowBack
          className="h-4 w-4 text-primary text-xl"
          onClick={() => swiper.slidePrev()}
        />
      </button>
      <button name="arrowright" aria-label="left">
        <IoIosArrowForward
          className="h-4 w-4 text-primary text-xl"
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
};
