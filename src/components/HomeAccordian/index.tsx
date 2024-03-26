"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian";
import { homeAccordiandata } from "@/lib/constData";
import Image from "next/image";
import { Button } from "../ui/button";
import Arrow from "@/public.icons/arrow_forward.svg";

const HomeAccordian = () => {
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="w-full bg-yellow-300 py-12 md:py-20"
      >
        <hr className="border-1 border-black" />
        {homeAccordiandata.data.map((item) => {
          return (
            <AccordionItem
              className="border-b  border-black"
              key={item.id}
              value={`item-${item.id}`}
            >
              <AccordionTrigger className="bg-yellow-300 flex flex-1 items-center justify-between py-5 text:lg  md:text-subtitle1 lg:text-2xl font-bold">
                <div className="flex gap-10 md:gap-8 items-center">
                  <div className=" md:flex md:gap-40 lg:gap-[30rem] items-center  hidden">
                    <Image alt="" src={item.image} width={40} height={40} />
                    <div className=""> {item.number}</div>
                  </div>

                  <div>{item.title}</div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="overflow-hidden max-sm:text-sm">
                <div className=" md:pl-64 lg:pl-[36.5rem] md:pr-40">
                  <div className="flex flex-1 flex-col gap-5 pb-4  ">
                    <Image
                      src={item.image}
                      alt="homeAccorde"
                      width={80}
                      title="homeAccorde"
                      height={80}
                      className="md:hidden"
                    />
                    {item.desc}
                  </div>
                  <Button
                    variant="default"
                    size="icon"
                    className="rounded-full"
                  >
                    <Arrow />
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};
export default HomeAccordian;
