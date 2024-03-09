

import * as React from "react";
import { Cards } from "@/lib/constData";

import Image from "next/image";
import { Button } from "../ui/button";
import { CardType, } from "@/utils/types";
import Arrow from "@/public.icons/angle-circle-arrow-right-icon.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CardComp({ data }:CardType) {
  return (
    <section className="">
      <h1 className="font-bold text-4xl m-5 md:m-10  ">Latest Project</h1>
      <div className="flex flex-col items-center overflow-x-auto gap-5 md:gap-10 ">
        <Carousel
          opts={{ align: "start" }}
          className="w-full  md:max-w-md lg:max-w-xl"
        >
          <CarouselContent>
            {Cards.card.map((item) => (
              <CarouselItem key={item.id} className="w-full md:basis-1/2 lg:basis-1/3  ">
                <div className="border-2 z-10 overflow-hidden border-none">
                  <Image
                    src={item.url}
                    className="w-full aspect-video object-cover rounded-md hover:transform hover:duration-100 hover:scale-110"
                    alt="image"
                    height={450}
                    width={600}
                  />
                </div>
                <h1 className="text-4xl hover:text-blue sm:text-2xl font-bold mb-2 mt-4 ">
                  {item.title}
                </h1>
                <div className="text-gray text-2xl  ">{item.description}</div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between m-5 md:m-10 text-xl text-white">
        <a className="pt-1 flex gap-2 items-center text-black font-bold">
          View all cases <Arrow />
        </a>
        <div className="pr-5 md:pr-16">
          <Button className="h-12 md:h-16 px-6 md:px-8 py-2">
            Start your innovation journey
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CardComp;

