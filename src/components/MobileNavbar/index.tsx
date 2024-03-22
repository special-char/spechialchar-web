import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/According1";
import Link from "next/link";
import Humburger from "@/public.three-horizontal-lines-icon.svg";
import Close from "@/public.icons/close-icon.svg";
import NavbarLogo from "../../../public/icons/Logo New Website.svg";
import { accordionItems1 } from "@/lib/constData";

const MobileNavbar = () => {
  const [click, setClicked] = useState(false);
  const toggleDropdown = () => {
    setClicked(!click);
  };

  return (
    <>
      <div onClick={toggleDropdown}>
        <Humburger className="fill-white mt-3" />
      </div>
      {click && (
        <div className="absolute z-50  bg-black h-screen w-full left-0 top-0 p-4 ">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <NavbarLogo />
              </Link>
            </div>
            <div onClick={toggleDropdown}>
              <Close className="fill-white  h-6 w-8" />
            </div>
          </div>
          <div className="pt-8">
            <Accordion type="single" className="  ">
              {accordionItems1.data.map((item, i) => (
                <AccordionItem key={item.value} value={item.value} className="">
                  <AccordionTrigger className="">
                    <Link
                      href={item.link.toLowerCase()}
                      onClick={toggleDropdown}
                    >
                      {item.title}
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent className="p-4">
                    <ul className="flex flex-col gap-y-2">
                      {item?.content?.map((itemContent, subindex) => (
                        <li
                          key={subindex}
                          className="text-base hover:text-yellow-300  "
                        >
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
                  className="text-white font-bold hover:text-second text-subtitle1 md:text-2xl py-3"
                >
                  Our Thinking
                </Link>

                <Link
                  href="/casestudies"
                  onClick={toggleDropdown}
                  className="text-white font-bold hover:text-second text-subtitle1 md:text-2xl py-3"
                >
                  Case Studies
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
