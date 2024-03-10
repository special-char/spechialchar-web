import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Humburger from "@/public.three-horizontal-lines-icon.svg";
import Close from "@/public.close-icon.svg";
import NavbarLogo from "../../../public/Navbar.svg";

const accordionItems = [
  {
    value: "item-1",
    title: "Services",
    content: ["Mobile", "Web", "Saas", "Back-End", "Cloud & Devops", "Ui & Ux"],
  },
  {
    value: "item-2",
    title: "Industry",
    content: ["EdTech & eLearning", "Ecommerce"],
  },
  {
    value: "item-3",
    title: "Company",
    content: ["About", "Career", "How Is Work"],
  },
];
const MobileNavbar = () => {
  const [click, setClicked] = useState(false);
  const toggleDropdown = () => {
    setClicked(!click);
  };

  return (
    <>
      <div onClick={toggleDropdown}>
        <Humburger className="fill-white" />
      </div>
      {click && (
        <div className="absolute bg-black h-screen w-full left-0 top-0 p-4 ">
          <div className="flex justify-between items-center">
            <div>
              <NavbarLogo />
            </div>
            <div onClick={toggleDropdown}>
              <Close className="fill-white  h-6 w-8" />
            </div>
          </div>
          <Accordion type="single" className="pt-8">
            {accordionItems.map((item) => (
              <AccordionItem key={item.value} value={item.value} className="">
                <AccordionTrigger>
                  <Link href={item.title.toLowerCase()}>{item.title}</Link>
                </AccordionTrigger>
                <AccordionContent >
                  <ul>
                    {item.content.map((itemContent, index) => (
                      <li key={index} className="text-lg hover:text-yellow-300">
                        <Link
                          href={`${item.title.toLowerCase()}/${itemContent.toLowerCase()}`}
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
                href="/ourthing"
                className="text-white font-bold hover:text-yellow-300 text-xl md:text-2xl py-3"
              >
                Our Things
              </Link>

              <Link
                href="/casestudio"
                className="text-white font-bold hover:text-yellow-300 text-xl md:text-2xl py-3"
              >
                Case Studio
              </Link>
            </div>
          </Accordion>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
