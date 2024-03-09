"use client";
import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Humburger from '@/public.three-horizontal-lines-icon.svg'
import { useState } from "react";
import Image from "next/image";
import Navlogo from '../../../public/Navbar.svg'
import Close from '@/public.xmark.svg'

const array = [
  {
    title: "Services",
    Link: ["Mobile", "Web", "Saas", "Back-End", "Cloud&Devops", "Ui&Ux"],
  },
  {
    title: "Industry",
    Link: ["EdTech&eLearning", "Ecommerce"],
  },
  {
    title: "Company",
    Link: ["About", "Careers", "How We Work"],
  },
];

const Navdropdown = () => {


 
  return (
    <NavigationMenu >

      {/* <--- Webnavigation-----> */}
      <div className="hidden lg:block">

      <NavigationMenuList >

        {array.map((x) => (
          <div key={x.title}>
            <NavigationMenuItem>
              <Link href={x.title.toLowerCase()}>
                <NavigationMenuTrigger>{x.title}</NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent className="flex flex-col gap-y-3 cursor-pointer ">
                {x.Link.map((item, itemindex) => (
                  <Link
                    key={itemindex}
                    href={`${x.title.toLowerCase()}/${item
                      .toString()
                      .toLowerCase()}`}
                  >
                    <span className="a text-base hover:text-yellow-300">
                      {item}
                    </span>
                  </Link>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </div>
        ))}

        <NavigationMenuItem>
          <Link href="/ourthing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Our Things
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/casestudio" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Casestudio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      </div>


   
    </NavigationMenu>
  );
};
export default Navdropdown;
