import * as React from "react";
import Image from "next/image";

import { testimonial } from "@/lib/constData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Testimonial() {
  return (
    <section className="bg-black">
        <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      orientation="vertical"
      className="w-full flex justify-center items-center "
    >
      <CarouselContent className="py-20 h-[50vh]">
        {testimonial.data.map((item) => (
          <CarouselItem key={item.id} className="">
            <div className="p-1 flex flex-row justify-between">
              <div className="w-96 ">
                <Image
                  src={item.image}
                  className="w-full rounded-full "
                  alt="image"
                  height={50}
                  width={50}
                />
              </div>
              <div className="flex flex-col p-6">
                <div className="text-yellow-400 font-bold">{item.title1}</div>
                <div className=" text-yellow-400 font-bold ">
                  {item.title2}
                </div>
                <div className=" text-yellow-400 font-bold ">
                  {item.title3}
                </div>
              </div>

              <div className="text-white font-bold text-5xl  pl-24">
                "{item.description}"
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </section>
    
  );
}
export default Testimonial;
