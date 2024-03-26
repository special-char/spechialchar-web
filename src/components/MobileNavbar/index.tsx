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
import SocialIcon from "../Footer/SocialIcon";

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
        <div className="absolute z-50  bg-black text-white h-screen w-full left-0 top-0 p-4 ">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <NavbarLogo className="h-12 w-full" />
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
                  className="text-white font-bold hover:text-second text-subtitle1 md:text-xl py-3"
                >
                  Our Thinking
                </Link>

                <Link
                  href="/casestudies"
                  onClick={toggleDropdown}
                  className="text-white font-bold hover:text-second text-subtitle1 md:text-xl py-3"
                >
                  Case Studies
                </Link>
              </div>
              <div className="pt-4">
                <Link className="pt-1" href={"#Contact"}>
                  <Button
                    variant={"outline"}
                    size={"xl"}
                    className=" py-1 px-4 text-white "
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
