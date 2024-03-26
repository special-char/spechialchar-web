"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./swiper.module.css";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import Image from "next/image";
import { latestThinkingType } from "@/utils/types";
import { latestThinkingData4 } from "@/lib/constData";
import Link from "next/link";

const Banner = ({ data }: latestThinkingType) => {
  return (
    <>
      <section className="flex flex-col gap-y-5 py-10">
        <div className="text-5xl font-bold md:text-8xl">{data.title}</div>
        <div className="bg-background flex gap-x-9 md:items-center md:justify-between pt-6 max-md:pt-6 max-md:py-0">
          <Swiper
            effect={"fade"}
            navigation={false}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade, Navigation]}
            className={style.swiper}
          >
            {latestThinkingData4.data.map((x) => (
              <SwiperSlide className="h-full" key={x.id}>
                <div className="flex bg-background gap-x-10 max-lg:flex-col-reverse">
                  <div className="md:flex-1 gap-2 pt-10">
                    <Link
                      href={x.Link}
                      className=" leading-10 max-lg:text-heading2 text-4xl max-sm:text-heading2 font-bold"
                    >
                      {x.title}
                      <span className="text-blue-500">&rarr;</span>
                    </Link>
                  </div>
                  <div className="relative flex-1 aspect-square overflow-hidden">
                    <Image
                      src={x.img}
                      alt="banner1"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};
export default Banner;
