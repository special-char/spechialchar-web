"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian";
import {
  edAccordiandata,
  edAccordiandata1,
} from "@/lib/constData";
import { serviceAccordiandataType } from "@/utils/types";
import Image from "next/image";


const EdAccordian = ({ data }: serviceAccordiandataType) => {
  return (
    <>
      <div className="grid md:grid-cols-2 md:gap-16 ">
        <Accordion type="single" collapsible className="">
          <hr className="border-1 border-gray-300" />
          {edAccordiandata.data.map((item) => {
            return (
              <AccordionItem
                className="border-b py-3 border-gray-300"
                key={item.id}
                value={`item-${item.id}`}
              >
                <AccordionTrigger className=" flex flex-1 items-center justify-between text-subtitle1 lg:text-3xl font-semibold    ">
                  <div className="flex gap-10 md:gap-3  items-center">
                    <div className=" md:flex md:gap-40 lg:gap-[30rem] items-center  hidden">
                      <Image alt="" src={item.image} width={40} height={40} />
                    </div>

                    <div>{item.title}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="py-5 text-lg text-gray-600 overflow-hidden max-sm:text-lg">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        <Accordion type="single" collapsible className="">
          <hr className="border-1 border-gray-300 flex max-sm:hidden" />
          {edAccordiandata1.data.map((item) => {
            return (
              <AccordionItem
                className="border-b py-3 border-gray-300"
                key={item.id}
                value={`item-${item.id}`}
              >
                <AccordionTrigger className="  flex flex-1 items-center justify-between text-subtitle1 lg:text-3xl font-semibold">
                  <div className="flex gap-10 md:gap-3 items-center">
                    <div className=" md:flex md:gap-40 lg:gap-[30rem] items-center  hidden">
                      <Image alt="" src={item.image} width={40} height={40} />
                    </div>

                    <div>{item.title}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="py-5 text-lg text-gray-600 overflow-hidden max-sm:text-lg">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </>

  );
};
export default EdAccordian;
