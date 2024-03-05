import React from "react";
import Button from "../Button";

interface Props { }

const Banner = (props: Props) => {
    return (
        <div className=" bg-orange  text-black flex flex-wrap md:flex-nowrap md:flex-1 justify-center  sm:h-screen">
            <div className="flex flex-col justify-center pt-16  pl-3 md:w-1/2 ">
                <h2 className="text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-bold ">
                End-to-end UI/UXdesign services
                </h2>
                <div className="text-base md:text-xl xl:text-3xl w-full mt-4">
                ITRex offers a whole gamut of UI/UX design services to transform unremarkable mobile apps, websites, dashboards, and cyber-physical systems into tech solutions that delight users and bring tangible business results
                </div>
                
                <Button className="md:w-72 w-60 mt-4">Hire UI/UX designers&rarr; </Button>
            </div>
            <div className= "relative md:w-1/2 mt-20 md:mt-20 lg:mt-16 xl:mt-20 ">
                <img
                    src="/images/UIBanner.png"
                    alt="Image"
                    className="h-full w-full "
                />
            </div>
        </div>
    );
};

export default Banner;
