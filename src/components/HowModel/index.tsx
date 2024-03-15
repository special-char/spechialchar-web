"use client";
import { howmodel } from '@/lib/constData';
import { HowModelType } from '@/utils/types';
import React, { SetStateAction, useState } from 'react';
import { Button } from '../ui/button';
import Arrow from "@/public.icons/arrow_forward.svg";

const HowModel = ({ data }: HowModelType) => {
  const [show, setShow] = useState(0)

  const Show = (i: React.SetStateAction<number>) => {
    // if (show == true) {
    //   setShow(false)
    // }
    // else {
    //   setShow(true)
    // }
    setShow(i);

  }
  return (
    <section className="py-8">
      <div className=" mb-8">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">{data.heading}</h3>
      </div>

      <div className=" mb-8 lg:pr-72 md: pr-12 ">
        <p className="text-base md:text-lg lg:text-base flex-1 text-gray-400">{data.par}</p>
      </div>
      <hr className='border-gray-300 ' />
      <hr className='border-gray-300 ' />
      {howmodel.section.map((item, index) => {

        return (
          <div className='border-b-2 border-gray-300'>
            <div key={item.id} className=" py-8 flex flex-col md:flex-row ">
              <div className='flex-1'>
                <h4 className="text-lg md:text-subtitle1 lg:text-3xl font-bold mb-2">{item.title}</h4>
              </div>
              <div className='flex-1 md:flex-grow '>
                <p className="text-sm md:text-base lg:text-lg text-slate-400 ">{item.desc}</p>
                <div className='-pl-2'>
                  <Button
                    className="rounded-full my-4" onClick={(e) => Show(index + 1)}>show more<Arrow /></Button>
                  <div>
                  </div>
                </div>
              </div>
            </div>
            {index + 1 === show && (
              <ul className='grid grid-cols-3 max-sm:grid-cols-1 gap-8 list-square max-lg:px-4'>
                {item.list.map((x, index) => (
                  <li key={index}>{x.content} </li>
                ))}
              </ul>
            )}
          </div >
        )
      })}
    </section >
  );
};

export default HowModel;





