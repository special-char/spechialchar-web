import React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import NavbarLogo from "../../../public/icons/Navbar.svg";
import { Header } from "@/utils/types";
import { accordionItems } from "@/lib/constData";
import Link from "next/link";
import { Button } from "../ui/button";

const HeaderDesktop = ({ data }: Header) => {
  return (
    <div className="h-full w-full flex flex-col  justify-between pt-3">
      <div className="flex justify-between items-start">
        <Link href="/">
          <div>
            <NavbarLogo className="" />
          </div>
        </Link>
        {accordionItems.data.map((item, index) => (
          <div key={index} className="flex flex-col pt-3 group">
            <div className="flex text-white hover:text-yellow-300 gap-x-1  text-xl">
              <Link
                href={`${item.link?.toLowerCase()}`}
                className="cursor-pointer"
              >
                {item.title}
              </Link>
              {item?.content && (
                <ChevronDownIcon className="mt-1 transition-transform duration-300 transform group-hover:rotate-180 hover:text-yellow-300" />
              )}
            </div>
            <ul className="text-white top-full left-0 mt-1 max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-screen flex flex-col gap-y-4 pt-4 ">
              {item?.content?.map((itemContent, subindex) => (
                <Link
                  key={subindex}
                  href={`/${item.title.toLowerCase()}/${item.content[
                    subindex
                  ].toLocaleLowerCase()}`}
                >
                  <span className="hover:text-yellow-300  text-base flex flex-col ">
                    {itemContent}
                  </span>
                </Link>
              ))}
            </ul>
          </div>
        ))}
        {/* <Link href="/ourthinking">
          <ul className="text-white hover:text-yellow-300 text-xl pt-3">
            Our Thinking
          </ul>
        </Link>
        <Link href="/casestudies">
          <ul className="text-white hover:text-yellow-300 text-xl pt-3">
            Case Studies
          </ul>
        </Link> */}
        <div className="pt-1">
          <Button
            variant={"outline"}
            size={"xl"}
            className=" py-1 px-4 text-white "
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
