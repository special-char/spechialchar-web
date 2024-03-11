import * as React from "react";
import { Card1 } from "@/lib/constData";

import Image from "next/image";
import { Button } from "../ui/button";
import { CardType } from "@/utils/types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export function ProjectCard({ data }: CardType) {
  return (
    <div >
      
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
      
    </div>
  );
}

export default ProjectCard;
