import React from 'react';
import { useSwiper } from 'swiper/react';
import LeftArrow from '@/public/angle-left-icon.svg'
import RightArrow from '@/public/angle-right-icon.svg'


export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <button className=' bg-white p-2 rounded-lg grid grid-cols-2 gap-x-2 sm:mt-[85px] md:mt-[140px] md:p-3 lg:p-3 lg:px-4 lg:gap-x-4  '>
        
      <LeftArrow className="h-4 w-4" onClick={() => swiper.slidePrev()} />
      <RightArrow className="h-4 w-4"onClick={() => swiper.slideNext()} />
    </button>
  );
};