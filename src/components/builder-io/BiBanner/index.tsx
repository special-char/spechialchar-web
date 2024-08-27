"use client";
import { Button } from "@/components/ui/button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type animatedWordProps = {
  word: string;
};

type Props = {
  background: string;
  textColor?: string;
  headingLine1: {
    heading: string;
    textColor: string;
  };
  headingLine2?: string;
  description?: string;
  subTitle?: string;
  animatedWords?: animatedWordProps[];
  button?: boolean;
  btnText?: string;
  btnUrl?: string;
  media?: string | StaticImport;
};

const BiBanner = ({
  background,
  textColor,
  headingLine1,
  headingLine2,
  description,
  subTitle,
  animatedWords,
  button,
  btnText,
  media,
}: Props) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  //   const values = ["value", "future", "new"];

  useEffect(() => {
    if (animatedWords && animatedWords.length > 0) {
      const interval = setInterval(() => {
        setCurrentWordIndex(
          (prevIndex) => (prevIndex + 1) % animatedWords.length
        );
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [animatedWords]);

  //   console.log({
  //     background,
  //     textColor,
  //     headingLine1,
  //     headingLine2,
  //     description,
  //     subTitle,
  //     animatedWords,
  //     button,
  //     btnText,
  //     media,
  //   });

  return (
    <div className="relative overflow-hidden h-screen">
      {/* <Image src={media} alt={headingLine1} width={100} height={100} /> */}

      {/* <video
        autoPlay
        loop
        muted
        title="homeBanner"
        className="absolute max-md:h-screen xl:w-full max-w-none "
        src={media}
      >
        Your browser does not support the video tag.
      </video> */}
      <div
        className="px-container relative z-0 h-full flex flex-wrap flex-col justify-center text-heading1"
        style={{ backgroundColor: background }}
      >
        <h1 className="items-center" style={{ color: headingLine1?.textColor }}>
          {headingLine1 && headingLine1?.heading}
        </h1>
        {headingLine2 && (
          <h2
            className="text-heading1 items-center lg:w-[40rem]"
            style={{
              color: textColor,
            }}
          >
            {headingLine2}
          </h2>
        )}
        <div className="mt-20 text-3xl text-primary">
          {description && (
            <p
              className="text-subtitle1"
              style={{
                color: textColor,
              }}
            >
              {description}
            </p>
          )}
          {subTitle && (
            <h3
              className="pt-1 flex gap-2"
              style={{
                color: textColor,
              }}
            >
              {subTitle}
              {animatedWords && (
                <span className="text-blue">
                  {animatedWords && animatedWords[currentWordIndex].word}
                </span>
              )}
            </h3>
          )}
          {button && (
            <div className="pt-7">
              <Link href={"#Contact"} title="Late's talk">
                <Button
                  variant="default"
                  size="sm"
                  className="px-24 md:px-32 py-6 text-base"
                >
                  {btnText}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BiBanner;
