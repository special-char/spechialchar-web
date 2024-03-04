import React from "react";
import Image from "next/image";
import ed from "@/public/images/EdBanner.png";
import Button from "@/components/Button";
import Banner from "@/components/common/Banner";
import { EdaBanner2 } from "@/lib/constData";

interface Props {}

const EdTechBanner = (props: Props) => {
  return (
    // <section className="overflow-hidden h-screen bg-[#01142B] text-white ">
    //   <div className="flex flex-wrap my-10 mx-4 max-md:mx-10 gap-y-8 relative max-md:mb-[-530px] lg:mb-[-600px] lg:mt-[-100px] 2xl:mb-[-350px] 2xl:mt-[-70px]">
    //     <div className="gap-y-8 grid md:relative md:pr-80 md:top-24  lg:top-36 2xl:right-6">
    //       <h6 className="text-3xl font-bold md:text-5xl lg:pr-96 2xl:text-7xl ">
    //         eLearning software development services
    //       </h6>

    //       <div className="lg:text-lg 2xl:pr-96 2xl:text-2xl">
    //         Make a unique impact online now to grow business with end-to-end
    //         custom web development services from ITRex
    //       </div>

    //       <div>
    //         <Button className="bg-blue p-2 px-8 text-lg  py-4">
    //           Contect Us &rarr;
    //         </Button>
    //       </div>
    //     </div>
    //     <div className="object-cover md:relative md:bottom-[450px] md:left-[320px] lg:left-[409px] 2xl:left-[750px] 2xl:bottom-96  ">
    //       <Image
    //         src={ed}
    //         alt="Istock"
    //         height={700}
    //         width={700}
    //         className="  lg:w-[800px] 2xl:w-[500px]"
    //       />
    //     </div>
    //   </div>
    // </section>
    <>
      <Banner data={EdaBanner2}/>
    </>
  );
};

export default EdTechBanner;
