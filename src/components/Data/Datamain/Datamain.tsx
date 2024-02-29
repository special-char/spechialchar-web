import Image from "next/image";
import React from "react";
import DataCircle from "@/public/Data-circle.webp";

const Datamain = () => {
  return (
    <section className="h-full md:h-auto overflow-y-hidden bg-black overflow-hidden text-white  w-full ">
      <div className="m-4  md:m-6 gap-y-6 grid md:mt-[-80px] md:mb-[-250px] lg:mx-10 lg:mt-[-130px] lg:mb-[-300px] 2xl:mb-[-200px]  ">
        <div className="gap-y-6 grid pb-6 md:relative md:top-80  md:pr-52 lg:pr-[500px] lg:top-[450px] 2xl:right-0">

        <div>
          <h2 className="md:z-50 md:absolute md:bottom-60 md:text-5xl md:pr-32 lg:pr-96 2xl:text-7xl  ">Big data consulting services and solutions</h2>
        </div>
        <div>
          <p className="font-normal md:relative md:top-8 2xl:text-2xl ">
            Unearth invaluable insights hidden within your business challenges.
            Our big data consulting services combine innovation, strategy, and
            engineering to reshape your decision-making.
          </p>
        </div>
        <div>
          <button className="bg-blue-500 text-white text-xl p-4 font-bold md:relative md:top-10">
            Talk to our big Data Consultants{" "}
            <span className="text-black">&rarr; </span>
          </button>
        </div>
        </div>
        <div className="md:relative md:left-72 md:bottom-48 object-cover  lg:left-[400px] 2xl:left-[720px] 2xl:bottom-24">
          <Image src={DataCircle} alt="Data" className=" w-full md:h-full md:w-[750px] lg:h-full lg:w-[850px] 2xl:w-[700px] " />
        </div>
      </div>
    </section>
  );
};

export default Datamain;
