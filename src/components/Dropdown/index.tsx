"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navbar = [
  {
    title: "services",
    link: "mobile",
  },
  {
    title: "services",
    link: ["mobile", "web", "saas"],
  },
  {
    title: "services",
    link: ["mobile", "web", "saas"],
  },
];

const components: { title: string; href: string }[] = [
  {
    title: "Mobile",
    href: "/mobile",
  },
  {
    title: "Web",
    href: "/web",
  },
  {
    title: "Saas",
    href: "/sass",
  },
  {
    title: "BackEnd",
    href: "/backend",
  },
  {
    title: "Cloud&Devops",
    href: "/clouddevops",
  },
];

const components1: { title: string; href: string }[] = [
  {
    title: "Edtech & eLearning",
    href: "/sass",
  },
  {
    title: "Ecommerce",
    href: "/ecommerce",
  },
];

const components2: { title: string; href: string }[] = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "careers",
    href: "/careers",
  },

  {
    title: "How is work",
    href: "/work",
  },
];

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* {navbar.map((x) => (
          <div className="" key={x.title}>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className=" w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[600px] space-y-3 ">
                  {" "}
                  <ListItem 
                   
                  > {x.link}</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </div>
        ))} */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" w-[400px] gap-3 p-4 md:w-[500px] relative lg:w-[600px] space-y-3 ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Industry</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className=" w-[400px] gap-3 p-4 relative left-28  md:w-[500px] space-y-3  lg:w-[600px] ">
              {components1.map((x) => (
                <ListItem
                  key={x.title}
                  title={x.title}
                  href={x.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className=" w-[400px] gap-3 p-4 relative left-56  md:w-[500px] space-y-3  lg:w-[600px] ">
              {components2.map((x) => (
                <ListItem
                  key={x.title}
                  title={x.title}
                  href={x.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/ourthings" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              OurThings
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
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a ref={ref} className={cn("block space-y-1 ", className)} {...props}>
          <div className="text-sm font-medium leading-none hover:text-yellow-300">
            {title}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
