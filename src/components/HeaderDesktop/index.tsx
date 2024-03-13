import React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import NavbarLogo from "../../../public/icons/Navbar.svg";
import { Header } from "@/utils/types";
import { accordionItems } from "@/lib/constData";
import Link from "next/link";
import { Button } from "../ui/button";

const HeaderDesktop = ({ data }: Header) => {
  return (
    <div className="h-full w-full  ">
      <div className="flex justify-between ">
        <Link href="/">

        <div>
          <NavbarLogo className="" />
        </div>
        </Link>
        {accordionItems.data.map((item, index) => (
          <div key={index} className="flex flex-col   group">
            <div className="flex text-white hover:text-yellow-300 gap-x-2 text-xl">
              <Link href={`${item.link.toLowerCase()}`} className="cursor-pointer">
                {item.title}
              </Link>
              <ChevronDownIcon className="mt-1 transition-transform duration-300 transform group-hover:rotate-180 hover:text-yellow-300" />
            </div>
            <ul className="text-white top-full left-0 mt-1 max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-screen group-hover:max-h-screen">
              {item.content.map((itemContent, subindex) => (
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
        <Link href="/ourthing">
          <ul className="text-white hover:text-yellow-300 text-xl ">
            Our Thing
          </ul>
        </Link>
        <Link href="/casestudio">
          <ul className="text-white hover:text-yellow-300 text-xl">
            Case Studio
          </ul>
        </Link>

        <Button
          variant={"outline"}
          size={"xl"}
          className=" py-1 px-4 text-white "
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default HeaderDesktop;
