"use client";
import React from "react";
import Itrex from "@/public/icons/itrex.svg";
// import arrowdown from "@/public/icons/arrowdown.svg"
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../Button";
import Navbar from "../Navbar/Navbar";

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

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="h-20 z-10 fixed w-full bg-black flex justify-around items-center transition-transform duration-300"
      style={{
        backgroundColor:
          scrollPosition > 100 ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
      }}
    >
      <Navbar/>
    </div>
  );
};

export default Header;

      {/* <div className="py-4">
        <Link href="/">
          <Itrex />
        </Link>
      </div>
      
      <div className="py-4 text-slate-100 flex ">
        <div className="relative">
          <div
            className="bg-inherit text-white px-6 py-2 mx-auto flex justify-center gap-32 rounded cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="mt-1">Services</div>
            <div className="mb-1">
              <Image
                src="/icons/arrowdown.svg"
                alt=""
                fill
                className={`${
                  !isOpen ? "" : "rotate-180 duration-300"
                } h-1 w-1`}
              ></Image>
            </div>
          </div>
          {isOpen && (
            <div className="bg-black w-full px-6 py-2" style={{
              backgroundColor:
                scrollPosition > 100 ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
            }}>
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
            className="bg-inherit text-white px-6 py-2 flex gap-32 rounded cursor-pointer"
            onClick={() => setIsOpen1((prev) => !prev)}
          >
            <div className="mt-1">Industries</div>
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
            <div className="bg-black absolute w-full px-6 py-2" style={{
              backgroundColor:
                scrollPosition > 100 ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
            }}>
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
            className="bg-inherit text-white px-6 py-2  flex gap-32 rounded cursor-pointer"
            onClick={() => setIsOpen2((prev) => !prev)}
          >
            <div className="mt-1">Compnany</div>
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
            <div className="bg-black w-full absolute px-6 py-2" style={{
              backgroundColor:
                scrollPosition > 100 ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
            }}>
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
      <div className="py-4 -mt-1 text-slate-100 w-12">
        <Link href={""}>Thinking</Link>
      </div>
      </div>
      <div className="py-4 mt-3 text-slate-100 w-12">
        <Link href={""}>Projects</Link>
      </div>
      <div className="py-4 mt-1 text-slate-100 w-12">
        <Button className="p-7">Contact</Button>
      </div> */}
