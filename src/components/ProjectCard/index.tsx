import * as React from "react";
import { Card1, Cards } from "@/lib/constData";

import Image from "next/image";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export function ProjectCard() {
  return (
    <div>
      <div className="">
        <Carousel opts={{ align: "start" }}>
          <div className=" flex z-20 gap-x-10">
            <CarouselContent className="w-full">
              {Cards.card.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="group md:basis-1/2 lg:basis-1/3 "
                >
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
            </CarouselContent>
          </div>
          <CarouselPrevious className="bg-blue-500 h-10 w-10 ml-10 max-sm:hidden" />
          <CarouselNext className="bg-blue-500 h-10 w-10 mr-10 max-sm:hidden " />
        </Carousel>
      </div>
    </div>
  );
}

export default ProjectCard;
