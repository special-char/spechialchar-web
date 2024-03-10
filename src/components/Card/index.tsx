import * as React from "react";
import { Card1, Cards } from "@/lib/constData";

import Image from "next/image";
import { Button } from "../ui/button";
import { CardType } from "@/utils/types";
import Arrow from "@/public.icons/angle-circle-arrow-right-icon.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export function CardComp({ data }: CardType) {
  return (
    <div className="pl-20">
      <h1 className="font-bold text-4xl my-10 pl-4">Latest Project</h1>
      <div className=" overflow-x-auto no-scrollbar">
        <Carousel opts={{ align: "start" }} className="md:max-w-md ">
          <div className="w-full flex z-20 gap-x-10">
            {/* <CarouselContent className="w-full"> */}
            {Card1.cards.map((item) => (
              <CarouselItem key={item.id} className="group">
                <div className=" border-2 z-10 overflow-hidden border-none">
                  <Image
                    src={item.url}
                    className="w-full aspect-video object-cover rounded-md group-hover:transform group-hover:duration-75 group-hover:scale-110"
                    alt="image"
                    height={550}
                    width={700}
                  />
                </div>
                <h1 className="lg:text-3xl md:text-2xl sm:text-xl max-sm:text-lg group-hover:text-blue  font-bold mb-2 mt-4 ">
                  {item.title}
                </h1>
                <div className="text-gray-400 lg:text-xl md:text-lg sm:text-md max-sm:text-md">
                  {item.description}
                </div>
              </CarouselItem>
            ))}
            {/* </CarouselContent> */}
          </div>
          {/* <CarouselPrevious className="bg-blue-500" /> */}
          {/* <CarouselNext className="bg-blue-500" /> */}
        </Carousel>
      </div>
      <div className="flex flex-wrap justify-between m-5 md:m-10 text-xl text-white">
        <div className="flex items-center">
          <Link
            href={"#"}
            className="pt-1 flex gap-2 items-center text-black font-bold"
          >
            View all cases <Arrow />
          </Link>
        </div>
        <div className="pr-5 md:pr-16 grid overflow-hidden justify-center">
          <Button
            variant={"default"}
            size={"lg"}
            className="lg:text-lg md:text-md"
          >
            Start your innovation journey
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardComp;
