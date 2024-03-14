"use client";
import React from 'react'
import Image from "next/image";
import { CareerPage4dataType } from '@/utils/types'

const CareerPage4 = ({ data }: CareerPage4dataType) => {
  return (
    <section className="">
        <div className="md:grid grid-cols-2 gap-6 lg:gap-x-16">
          <div className="mt-8">
            <h2 className="font-bold text-3xl lg:text-6xl">{data.title}</h2>
            <div className="mt-8 text-xs leading-5 lg:text-xl lg:flex lg:items-center lg:gap-x-6">
              <h3 className="font-bold text-2xl">
                {data.title1}<br></br>{data.title2}
              </h3>
              <div className="pl-4 my-4 border-l-2 border-yellow-200 font-medium flex flex-col gap-y-4 ">
                <p>
                  {data.desc1}
                </p>
                <p>
                  {data.desc2}
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <Image src={data.src} alt="image" height={600} width={600} />
          </div>
        </div>
      </section>
  )
}

export default CareerPage4