"use client";
import { HomeBannerdataType } from "@/utils/types";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HomeBanner = ({ data }: HomeBannerdataType) => {
  const [index, setIndex] = useState(0);
  const values = ["value", "future", "new"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className=" relative overflow-hidden h-screen">
      {/* <video
        autoPlay
        loop
        muted
        title="homeBanner"
        className="absolute max-md:h-screen xl:w-full max-w-none "
        src="/images/newVideo.mp4"
      >
        Your browser does not support the video tag.
      </video> */}
      <section className="relative z-0 text-button h-full flex flex-wrap flex-col  justify-center lg:text-6xl font-bold text-4xl ">
        {data.title}
        <div className="text-black max-sm:items-center">{data.title2}</div>
        <div className="flex flex-wrap  justify-between  mt-32 gap-10 text-3xl text-black">
          <div className="pt-1">
            {" "}
            {data.subtitle}{" "}
            <span className="text-button">{values[index]}</span>
          </div>
          <Link href={"https://thespecialcharacter.graphy.com/"} className="">
            <Button
              variant="default"
              size="sm"
              className="px-24 md:px-32 py-6 text-base"
            >
              {data.button}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;
