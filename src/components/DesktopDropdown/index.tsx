import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./style.css";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Header } from "@/utils/types";
import { accordionItems } from "@/lib/constData";
import { Button } from "../ui/button";

const DesktopDropdown = ({ data }: Header) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="hidden w-full lg:block z-50">
        <ul className=" flex justify-end items-center lg:gap-x-10 py-3 bg-inherit w-full  ">
          {accordionItems.data.map((dropdown, index) => (
            <div key={index} className="dropdown inline-block z-50 ">
              <Link
                href={`/${dropdown.title.toLowerCase()}`}
                className="  text-white cursor-pointer hover:text-yellow-300 flex gap-x-2 text-lg "
              >
                {dropdown.title}
                <ChevronDownIcon className="hover:rotate-180 mt-1" />
              </Link>
              <div className="relative w-full h-full left-0">
                <li
                  className="dropdown-content text-white absolute py-5 hover:block hidden w-full  px-2"
                  style={{
                    backgroundColor:
                      scrollPosition > 100
                        ? "rgba(0, 0, 0, 1)"
                        : "rgba(0, 0, 0, 0)",
                  }}
                >
                  <div className="w-[100vw] bg-inherit absolute left-0">
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
                  </div>
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
