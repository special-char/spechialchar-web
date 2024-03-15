"use client";
import React from "react";
import ImageBanner from "../ImageBanner";
import YellowBanner from "../YellowBanner";
import { Data, MarqueData } from "@/lib/constData";
import { MobilePageData } from "@/utils/types";
import Marque from "../Marque";



const MobilePage = ({ data }: MobilePageData) => {
  return (
    <>
      {/* <ImageBanner data={MobileBgBanner1} />

    <ImageBanner data={MobileBgBanner2}/>

    <YellowBanner data={MobileYellowBanner1}/>

    <ImageBanner data={MobileBgBanner3} />

    <YellowBanner data={MobileYellowBanner2}/> */}

      <section className=" text-white">
        {/* p-8 bg-black md:px-12 md:pt-8 grid gap-8 lg:gap-12 lg:m-4 lg:mx-20 lg:p-24 */}
        <div className="bg-black grid gap-8 py-4 md:p-8 lg:py-12 lg:px-20">
          <div className="pt-8">
            <h2 className="text-3xl md:text-5xl font-extrabold lg:text-7xl">
              What makes us different
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {Data.map((x) => (
              <div key={x.id}>
                <div className="text-yellow-400 text-6xl">{x.title1}</div>
                <div className="font-base">{x.title2}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className=" pt-4 md:pt-8">
          <div>
            <h2 className="text-5xl  font-bold md:text-8xl">Our Clients</h2>
          </div>
        </div>
      </section>
      <div>
        <Marque data={MarqueData} color="black" fill="black" className="" />
      </div>
    </>
  );
};

export default MobilePage;
