"use client";
import { ourThinkingData } from "@/lib/constData";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {};

function OurThinking({ className }: { className?: string }) {
  const [currentCategory, setCurrentCategory] = useState("All");

  return (
    <>
      <section>
        <div
          className={cn(
            "flex max-md:flex-col text-heading4 py-10   justify-start gap-x-4",
            {
              [`${className}`]: className,
            }
          )}
        >
          <button type="button" onClick={() => setCurrentCategory("All")}>
            <div className="flex justify-start mr-4 active:text-blue hover:text-blue hover:underline-offset-8 hover:underline">
              All
            </div>
          </button>
          <button type="button" onClick={() => setCurrentCategory("Strategy")}>
            <div className="flex justify-start mr-4 active:text-blue hover:text-blue hover:underline-offset-8 hover:underline">
              Strategy
            </div>
          </button>
          <button type="button" onClick={() => setCurrentCategory("Trending")}>
            <div className="flex justify-start mr-4 active:text-blue hover:text-blue  hover:underline-offset-8 hover:underline">
              Trending
            </div>
          </button>
          <button
            type="button"
            onClick={() => setCurrentCategory("Development")}
          >
            <div className="flex justify-start mr-4 active:text-blue hover:text-blue hover:underline-offset-8 hover:underline">
              Development
            </div>
          </button>
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 justify-center">
          {ourThinkingData[
            currentCategory === "All"
              ? "All"
              : (currentCategory as keyof typeof ourThinkingData)
          ].map((x) => (
            <div
              key={x.id}
              className="flex flex-col gap-3 m-4 md:gap-5 md:pb-20 pb-10  "
            >
              <div className="overflow-hidden">
                <Image
                  src={x.image}
                  alt="blog"
                  title="projects-info"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full hover:scale-105 duration-500 "
                />
              </div>
              <div className="">
                <div className="flex gap-1 text-nowrap flex-wrap">
                  {x.categories.map((category, index) => (
                    <React.Fragment key={index}>
                      <a href="#" className="text-subtitle2">
                        {category}
                      </a>
                      {index !== x.categories.length - 1 && (
                        <span className="text-subtitle2">/</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className="py-4 hover:text-blue">
                  <a href={x.link}>
                    <span className="text-heading6">
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
