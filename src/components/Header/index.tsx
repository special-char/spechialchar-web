"use client";
import React from "react";
import Itrex from "@/public/icons/itrex.svg";
// import arrowdown from "@/public/icons/arrowdown.svg"
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../Button";

interface Props {}

const Header = (props: Props) => {
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

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [isHovered, setIsHovered] = useState(false)
  return (

    <header
      className="h-20 z-10 fixed w-full bg-black flex gap-14 "
      style={{
        backgroundColor:
          scrollPosition > 100 ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
      }}
    >
      <div className="py-4">
        <Link href="/">
          <Itrex />
        </Link>
      </div>
      {/* <div>
      <nav className="flex justify-between items-center p-4 bg-inherit text-white">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li
                        className="relative"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <a>Dropdown</a>
                        {isHovered && (
                            <ul className="absolute top-full left-0 mt-2 p-2 bg-inherit text-slate-200 rounded-md shadow-lg">
                                <li>
                                    <Link href="/about">About</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
      </div> */}
      <div className="py-4 text-slate-100 flex ">
      <div className="relative">
  <div
    className="bg-inherit text-white px-4 py-2 flex items-center lg:gap-32 rounded cursor-pointer"
    onClick={() => setIsOpen((prev) => !prev)}
  >
    <div>Services</div>
    <div className="mb-1">
      <Image
        src="/icons/arrowdown.svg"
        alt=""
        fill
        className={`${
          !isOpen ? "" : "rotate-180 duration-300"
        } h-3 w-3`}
      ></Image>
    </div>
  </div>
  {isOpen && (
    <div className="bg-inherit ">
      <a href="#" className="block py-1">
        Mobile
      </a>
      <a href="#" className="block py-1">
        Web
      </a>
      <a href="#" className="block py-1">
        Saas
      </a>
      <a href="#" className="block py-1">
        UI/Ux Design
      </a>
      <a href="#" className="block py-1">
        Back-End
      </a>
    </div>
  )}
</div>

        <div className="relative">
          <div
            className="bg-inherit text-white px-4 py-2 flex gap-32 rounded cursor-pointer"
            onClick={() => setIsOpen1((prev) => !prev)}
          >
            <div>Industries</div>
            <div>
              <Image
                src="/icons/arrowdown.svg"
                alt={""}
                fill
                className={`${
                  !isOpen1 ? "" : " duration-300 rotate-180 "
                } h-3 w-3`}
              ></Image>
            </div>
          </div>
          {isOpen1 && (
            <div className="bg-inherit absolute">
              <a href="#" className="block py-1">
                EdTech & e-learning
              </a>
              <a href="#" className="block py-1">
                Ecommerce
              </a>
            </div>
          )}
        </div>

        <div className="relative">
          <div
            className="bg-inherit text-white px-4 py-2 flex gap-32 rounded cursor-pointer"
            onClick={() => setIsOpen2((prev) => !prev)}
          >
            <div>Compnany</div>
            <div>
              <Image
                src="/icons/arrowdown.svg"
                alt={""}
                fill
                className={`${
                  !isOpen2 ? "" : "duration-300 rotate-180"
                } h-3 w-3`}
              ></Image>
            </div>
          </div>
          {isOpen2 && (
            <div className="bg-inherit absolute">
              <a href="#" className="block py-1">
                About
              </a>
              <a href="#" className="block py-1">
                Careers
              </a>
              <a href="#" className="block py-1">
                How to work
              </a>
            </div>
          )}
        </div>
        
      </div>
      <div className="py-4 text-slate-100">
        <Link href={""}>Our Thinking</Link>
      </div>
      <div className="py-4 text-slate-100">
        <Link href={""}>Case Studies</Link>
      </div>
      <div className="py-4 text-slate-100">
        <Button>Contact</Button>
      </div>
    </header>
  );
};

export default Header;
