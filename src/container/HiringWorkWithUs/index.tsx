import React from "react";
import { Workwithus as data } from "@/lib/constData";
import ImageWithCards from "@/components/hiring/ImagewithCards";
import { cn } from "@/lib/utils";
type Props = {};

const WorkWithUs = (props: Props) => {
  return (
    <div className="w-full h-full px-container py-4 md:py-20">
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-heading3 font-normal">{data.title}</h3>
        <p className="text-caption1 font-normal">{data.dec}</p>
      </div>
      <div className="flex flex-col md:gap-32 gap-8 py-10 relative">
        <div className="absolute left-1/2 top-12 translate-x-[-50%] w-[2px] *: bg-zinc-300 h-full max-sm:left-1"></div>
        {data.Imagesection.map((item, i) => (
          <>
            <div
              className={cn(
                "flex gap-20 justify-center w-full  max-md:py-2  relative max-sm:flex-col max-sm:items-center max-sm:left-1",
                {
                  ["flex-row-reverse "]: i % 2 != 0,
                }
              )}
            >
              <div className="w-full md:max-w-[50%] h-full flex  justify-center md:pt-8">
                <ImageWithCards
                  imageurl={item.imagecarddata.imageurl}
                  side={item.imagecarddata.side as "left" | "bottom"}
                  carddata={item.imagecarddata.cardata}
                  className={`xl:max-w-[400px] max-xl:max-w-[300px] max-lg:max-w-[250px] max max-sm:max-w-[200px]   ${
                    i % 2 != 0 && `pl-10`
                  }`}
                />
              </div>

              <div className="flex flex-col items-center w-full  md:max-w-[50%] max-md:px-5">
                <div>
                  <h4 className="font-normal text-subtitle1">{item.title}</h4>
                  <p className="font-light text-caption1 ">{item.dec}</p>
                </div>
              </div>
              <div className="rounded-full border absolute left-1/2 top-0  translate-x-[-50%]  max-sm:translate-x-[-35%]  flex justify-center items-center w-7 aspect-square  z-10 bg-background max-sm:-left-1">
                {i + 1}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default WorkWithUs;
