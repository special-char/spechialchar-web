"use client";
import { ourThinkingData } from "@/lib/constData";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

import { cn } from "@/lib/utils";

type Props = {};

function OurThinking({
  className,
}: {
  className?: string;
}) {
  const [currentCategory, setCurrentCategory] = useState("All");

  return (
    <>
      <section>
        <div
          className={cn(
            "flex max-md:flex-col max-sm:text-2xl max-md:text-3xl py-10 text-4xl font-bold justify-start ",
            {
              [`${className}`]: className,
            }
          )}
        >
          <button type="button" onClick={() => setCurrentCategory("All")}>
            <div className="flex justify-start mr-4 active:text-blue-600">
              All
            </div>
          </button>
          <button type="button" onClick={() => setCurrentCategory("Strategy")}>
            <div className="flex justify-start mr-4 active:text-blue-600">
              Strategy
            </div>
          </button>
          <button type="button" onClick={() => setCurrentCategory("Trending")}>
            <div className="flex justify-start mr-4 active:text-blue-600">
              Trending
            </div>
          </button>
          <button
            type="button"
            onClick={() => setCurrentCategory("Development")}
          >
            <div className="flex justify-start mr-4 active:text-blue-600">
              Development
            </div>
          </button>
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 justify-center">
          {ourThinkingData[
            currentCategory === "All" ? "All" : currentCategory as keyof typeof ourThinkingData
          ].map((x) => (
            <div
              key={x.id}
              className="flex flex-col gap-3 m-4 md:gap-5 md:pb-20 pb-10  "
            >
              <div className="overflow-hidden">
                <Image
                  src={x.image}
                  alt="blog"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full hover:scale-105 duration-500 "
                />
              </div>
              <div className="">
                <div className="flex gap-1 text-nowrap flex-wrap">
                  {x.categories.map((category, index) => (
                    <React.Fragment key={index}>
                      <a href="#" className="text-base">
                        {category}
                      </a>
                      {index !== x.categories.length - 1 && (
                        <span className="text-base">/</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className="py-4 hover:text-button">
                  <a href={x.link}>
                    <span className="text-2xl font-bold md:text-4xl">
                      {x.title}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default OurThinking;
