import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/According1";
import Link from "next/link";
import Humburger from "@/public.three-horizontal-lines-icon.svg";
import NavbarLogo from "../../../public/icons/Logo New Website.svg";
import { accordionItems1 } from "@/lib/constData";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Image from "next/image";

const MobileNavbar = () => {
  const [click, setClicked] = useState(false);
  const toggleDropdown = () => {
    setClicked(!click);
  };

  return (
    <>
      <div onClick={toggleDropdown}>
        <Humburger className="fill-blue mt-3" />
      </div>
      {click && (
        <div className="absolute z-50  bg-background text-blue h-screen w-full left-0 top-0 p-4 ">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <Image
                  src={"/images/TSC-Logo-1.png"}
                  alt={"Tsc-Logo"}
                  title="tsc-logo"
                  height={100}
                  width={100}
                />
              </Link>
            </div>
            <div onClick={toggleDropdown}>
              <Cross1Icon width={24} height={24} />
            </div>
          </div>
          <div className="pt-4 w-full">
            <Accordion type="single" collapsible>
              {accordionItems1.data.map((item, i) => (
                <AccordionItem key={item.value} value={item.value} className="">
                  <AccordionTrigger className="">
                    <Link
                      href={item.link.toLowerCase()}
                      onClick={toggleDropdown}
                      className="text-xl"
                    >
                      {item.title}
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent className="py-4">
                    <ul className="flex flex-col gap-y-4">
                      {item?.content?.map((itemContent, subindex) => (
                        <li key={subindex} className="text-blue">
                          <Link
                            href={`/${item.title.toLowerCase()}/${item.content[
                              subindex
                            ].toLocaleLowerCase()}`}
                            className=""
                            onClick={toggleDropdown}
                          >
                            {itemContent}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
              <div className="flex flex-col">
                <Link
                  href="/ourthinking"
                  onClick={toggleDropdown}
                  className="text-blue font-semibold md:text-xl py-3"
                >
                  Our Thinking
                </Link>

                <Link
                  href="/casestudies"
                  onClick={toggleDropdown}
                  className="text-blue font-semibold md:text-xl py-3"
                >
                  Case Studies
                </Link>
              </div>
              <div className="pt-4">
                <Link className="pt-1" href={"#Contact"}>
                  <Button
                    variant={"secondary"}
                    size={"default"}
                    className=" py-1 px-4  hover:text-background "
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </Accordion>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
