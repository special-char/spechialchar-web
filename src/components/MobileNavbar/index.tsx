import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/According1";
import Link from "next/link";
import Humburger from "@/public.three-horizontal-lines-icon.svg";
import { accordionItems1 } from "@/lib/constData";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Humburger />
      </SheetTrigger>
      <SheetContent>
        <div className="pt-4 w-full">
          <Accordion type="single" collapsible>
            {accordionItems1.data.map((item, i) => (
              <AccordionItem key={item.value} value={item.value} className="">
                <AccordionTrigger className="">
                  <SheetClose asChild>
                    <Link
                      href={item.link.toLowerCase()}
                      title="mobile-nav-link"
                      className="text-subtitle2"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                </AccordionTrigger>
                <AccordionContent className="py-4">
                  <ul className="flex flex-col gap-y-4">
                    {item?.content?.map((itemContent, subindex) => (
                      <li key={subindex} className="text-primaxry">
                        <SheetClose asChild>
                          <Link
                            title="mobile-nav-link"
                            href={`/${item.title.toLowerCase()}/${item.content[
                              subindex
                            ].toLocaleLowerCase()}`}
                          >
                            {itemContent}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
            <div className="flex flex-col">
              <Link
                href="/ourthinking"
                className="text-subtitle2 py-3"
                title="mobile-nav-link"
              >
                OurThinking
              </Link>
              <Link
                href="/casestudies"
                title="mobile-nav-link"
                className="text-subtitle2 py-3"
              >
                CaseStudies
              </Link>
            </div>
            <div className="pt-4">
              <Link
                className="pt-1"
                title="mobile-nav-button"
                href={"#Contact"}
              >
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
