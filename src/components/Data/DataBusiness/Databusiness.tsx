"use client";
import Image from "next/image";
import React from "react";
import ML from '@/public/ML.png';
import CV from '@/public/CV.png';
import Business from '@/public/business-drivers.png';
import NLP from '@/public/NLP.png';

const sectionData = [
  {
    icon: ML,
    text: "Enable a single source of truth",
  },
  {
    icon: CV,
    text: "Democratize your data safely",
  },
  {
    icon: Business,
    text: "Foster a data culture for efficiency",
  },
  {
    icon: NLP,
    text: "Scale up with an AI-ready infrastructure",
  },
];

const Databusiness = () => {
  return (
    <section className="h-full w-full">
      {/* <---- Main -----> */}
      <div className="mx-2 md:mx-6 md:mb-8 2xl:mx-10 2xl:my-20">
        <div className="pr-3  md:pr-16 lg:pr-60 ">
          <h5 className="font-bold md:text-2xl lg:text-[26px] 2xl:text-4xl">
            Making business sense of your data for any user, anytime, anywhere
          </h5>
        </div>
        <div className="text-sm md:text-lg lg:pr-60 2xl:text-2xl 2xl:py-6">
          Are you overwhelmed by your data flood, not sure where to turn? Our big data consultants decipher your data, turn chaos into clarity, and provide insights everyone in your team can grasp.
        </div>
        {/* <--- Icons ----> */}
        <div className="md:grid md:grid-cols-4 lg:pt-2">
          {sectionData.map((section, index) => (
            <div key={index} className="py-4 gap-y-5 grid">
              <div>
                <Image src={section.icon} alt={`icon-${index}`} />
              </div>
              <div className="text-lg text-gray-400">
                {section.text}
              </div>
            </div>
          ))}
        </div>
        {/* <--- Button ----> */}
        <div className="pt-2 hover:text-white">
          <button className="bg-blue hover:bg-black hover:text-white text-white text-xl p-4 font-bold md:relative md:top-10">
            Start your big data journey{" "}
            <span className="text-black hover:text-white ">&rarr; </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Databusiness;
