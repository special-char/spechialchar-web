import React from 'react';
import { useSwiper } from 'swiper/react';
import LeftArrow from '@/public/angle-left-icon.svg'
import RightArrow from '@/public/angle-right-icon.svg'


export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <button className=' bg-white p-3 px-4 py-5 rounded-2xl  grid grid-cols-2 gap-x-2 sm:mt-[85px] md:mt-[140px] lg:gap-x-4  '>
        
      <LeftArrow className="h-4 w-4" onClick={() => swiper.slidePrev()} />
      <RightArrow className="h-4 w-4"onClick={() => swiper.slideNext()} />
    </button>
  );
};