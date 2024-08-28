"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian";
import Image from "next/image";
import { Button } from "../ui/button";
import Arrow from "@/public.icons/arrow_forward.svg";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type AccordianProps = {
  id: number;
  image: string | StaticImport;
  title: string;
  description: string;
};

type Props = {
  backgroundColor?: string;
  accordian: AccordianProps[];
  button?: boolean;
  buttonTitle: string;
  buttonLink: string;
};

const BiHomeAccordian = ({
  backgroundColor,
  accordian,
  button,
  buttonTitle,
  buttonLink,
}: Props) => {
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="w-full  py-12 md:py-20"
        style={{ backgroundColor: backgroundColor && backgroundColor }}
      >
        <hr className="border-1 border-black" />
        {accordian &&
          accordian.map((item) => {
            return (
              <AccordionItem
                className="border-b  border-black"
                key={item.id}
                value={`item-${item.id}`}
              >
                <AccordionTrigger
                  className="flex flex-1 transition-all duration-1000 ease-out  items-center justify-between py-5  text-subtitle1 "
                  style={{
                    backgroundColor: backgroundColor && backgroundColor,
                  }}
                >
                  <div className="flex gap-10 md:gap-8 items-center">
                    <div className="md:flex md:gap-40 lg:gap-[30rem] items-center  hidden">
                      <Image
                        alt={item.title}
                        title={item.title}
                        src={item.image}
                        width={40}
                        height={40}
                      />
                      {item?.id && (
                        <div>{item?.id < 10 ? `0${item?.id}` : item?.id}</div>
                      )}
                    </div>
                    <div className="font-semibold text-heading6">
                      {item.title}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden text-subtitle1 transition-all duration-1000 ease-out  ">
                  <div className="md:pl-64 lg:pl-[36.5rem] md:pr-40">
                    <div className="flex flex-1 flex-col gap-5 pb-4">
                      <Image
                        src={item.image}
                        alt="homeAccorde"
                        width={80}
                        title="homeAccorde"
                        height={80}
                        className="md:hidden"
                      />
                      {item.description}
                    </div>
                    <Link title="next" href={"/ourthinking"}>
                      <Button
                        variant="default"
                        size="icon"
                        className="rounded-full"
                      >
                        <Arrow />
                      </Button>
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
      </Accordion>
      {button && (
        <div>
          <Link title="discuss my projects" href={`#${buttonLink}`}>
            <Button variant="default" className="px-16 md:px-20 py-7  ">
              {buttonTitle}
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default BiHomeAccordian;
