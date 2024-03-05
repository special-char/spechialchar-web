import React from 'react';
import Image from 'next/image';

import { LandingWeb } from '@/lib/constData';

const WebLanding = () => {
  return (
    <section className='h-full w-full bg-white'>
      <div className='mx-4  sm:mx-5 md:mx-6 grid  2xl:mx-0  '>
        <div className='sm:grid sm:grid-cols-3 sm:gap-x-3 md:gap-x-4 lg:gap-x-3 flex flex-col gap-y-6 '>

        {LandingWeb.map((item, index) => (
          <div key={index}>
            <div className='pb-6'>
              <Image src={item.image} alt='team' className='h-10 w-10 md:h-12 md:w-12 2xl:h-14 2xl:w-14'  height={100} width={100}/>
            </div>
            <div className='sm:pb-2 pb-2'>
              <h6>{item.title}</h6>
            </div>
            <div>
              <h6 className='text-gray text-[17px] sm:pr-4 lg:text-lg  lg:pr-6'>{item.description}</h6>
            </div>
          </div>
        ))}
        </div>
        <div className="pt-6 2xl:py-6 2xl:pt-10 hover:text-white ">
          <button className="bg-blue hover:bg-black hover:text-white text-white text-xl  md:text-xl p-4  font-bold ">
          Discuss your web app Development Project {" "}
            <span className="text-black hover:text-white ">&rarr; </span>
          </button>
        </div>
      </div>
  
    </section>
  );
};

export default WebLanding;
