"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { SwiperNavButtons } from "@/components/Swiper/SwiperButton";
import { SwiperServicesData } from "@/utils/types";
import { SwiperServices1 } from "@/lib/constData";
import Link from "next/link";
import { Button } from "../ui/button";
type Props = {
  button:string,
  title:string
}
const Swiper2 = (props: Props) => {
  return (
    <section className=" py-10 bg-gray1 ">
      <div className="md:text-heading1 text-heading4 py-5 lg:pb-10 pr-4 lg:pr-44  ">
        {props.title}
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 1.4,
          },
          1024: {
            slidesPerView: 1.4,
          },
          1440: {
            slidesPerView: 2.9,
          },
        }}
        className="   "
      >
        <div className="">
          {SwiperServices1.data.map((car, index) => (
            <SwiperSlide key={index} className="py-4">
              <Link
                title="latest-Project-link"
                target="_black"
                className=" overflow-hidden overflow-y-hidden h-56 "
                href={`/casestudies/${index+1}`}
              >
                <div className="relative">
                  <Image
                    src={car.src}
                    alt={car.alt}
                    title="latest-project"
                    className=" flex flex-col object-cover aspect-square brightness-50  left-0 top-0 -z-10  gap-x-4"
                    height={200}
                    width={800}
                  />
                  <div className=" py-3 px-4 md:px-12 absolute left-0 top-0  text-background  text-2xl md:text-3xl   font-bold overflow-hidden lg:px-10 lg:pr-20">
                    {car.alt}&rarr;
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
        <div className="max-sm:hidden pt-4">
          <SwiperNavButtons />
        </div>
      </Swiper>
      <div className="sm:pt-10 sm:pb-2">
        <Link title="contect-us" href={"#Contact"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              {props.button}
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Swiper2;