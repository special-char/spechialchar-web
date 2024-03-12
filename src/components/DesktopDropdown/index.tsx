import Link from "next/link";
import React from "react";
import "./style.css";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Header } from "@/utils/types";
import { accordionItems } from "@/lib/constData";
import { Button } from "../ui/button";

// const accordionItems = [
//   {
//     value: "item-1",
//     title: "Services",
//     content: ["Mobile", "Web", "Saas", "Back-End", "Cloud & Devops", "Ui & Ux"],
//   },
//   {
//     value: "item-2",
//     title: "Industry",
//     content: ["EdTech & eLearning", "Ecommerce"],
//   },
//   {
//     value: "item-3",
//     title: "Company",
//     content: ["About", "Career", "How Is Work"],
//   },
// ];

const DesktopDropdown = ({ data }: Header) => {
  return (
    <>
      <div className="hidden w-full lg:block z-50 ">
        <ul className=" flex justify-end items-center lg:gap-x-10 py-3  ">
          {accordionItems.data.map((dropdown, index) => (
            <div key={index} className="dropdown inline-block z-50 ">
              <Link
                href={`/${dropdown.title.toLowerCase()}`}
                className="dropbtn  text-white cursor-pointer hover:text-yellow-300 flex gap-x-2 text-lg "
              >
                {dropdown.title}
                <ChevronDownIcon className="hover:rotate-180 mt-1" />
              </Link>
              <div className="bg-red-600 w-full relative">
                <li className="dropdown-content text-white py-10 hover:block hidden absolute  bg-black  w-[100vw] px-2 ">
                  {dropdown.content.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={`/${dropdown.title.toLowerCase()}/${dropdown.content[
                        itemIndex
                      ].toLocaleLowerCase()}`}
                    >
                      <span className="hover:text-yellow-300  text-base ">
                        {item}
                      </span>
                    </Link>
                  ))}
                </li>
              </div>
            </div>
          ))}
          <Link href="/ourthing">
            <ul className="text-white hover:text-yellow-300 text-lg ">
              Our Thing
            </ul>
          </Link>
          <Link href="/casestudio">
            <ul className="text-white hover:text-yellow-300 text-lg">
              Case Studio
            </ul>
          </Link>
          <div>
            <Button
              variant={"outline"}
              size={"xl"}
              className=" py-1 px-4 text-white "
            >
              Contact Us
            </Button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default DesktopDropdown;
