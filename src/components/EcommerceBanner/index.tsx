import React from "react";
import Button from "../Button";

interface Props { }

const EcommerceBanner = (props: Props) => {
    return (
        <div className="relative bg-[#EAECEB] text-black flex flex-wrap md:flex-nowrap md:flex-1 justify-center xl:gap-40 h-screen">
            <div className="flex flex-col justify-center pt-16 md:pt-0 xl:pl-60 pl-3 md:w-1/2">
                <h2 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl  font-bold">
                    Ecommerce development services
                </h2>
                <div className="text-base md:text-xl xl:text-2xl max-w-md mt-4">
                    We build best-in-class B2B ecommerce solutions, helping you drive
                    reach, conversion rates, and ROI
                </div>
                <Button className="md:w-72 w-60 mt-10">Let's talk ecommerce &rarr; </Button>
            </div>
            <div className="relative w-full md:w-1/2">
                <img
                    src="/images/ecommerceheader.webp"
                    alt="Image"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
};

export default EcommerceBanner;