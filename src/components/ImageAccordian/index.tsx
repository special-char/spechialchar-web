"use client";
import { SetStateAction, useState } from "react";
import { imageAccordianDataType } from "@/utils/types";
import { imageAccordianData } from "@/lib/constData";
import "./styles.css";
import Image from "next/image";
import { Button } from "../ui/button";

const ImageAccordion = ({ data }: imageAccordianDataType) => {
    const [active, setActive] = useState(0);

    const handleToggle = (index: SetStateAction<number>) => setActive(index);

    return (
        <>
            <section>
                <div className="py-5  text-2xl md:text-3xl lg:text-4xl font-bold">{data.title1}</div>
                <div className="md:py-5 lg:pr-72 text-lg md:text-xl lg:text-2xl ">{data.title2}</div>
                <div className="py-7 text-3xl font-bold">{data.title3}</div>
                <div className="image-accordion">

                    {imageAccordianData.data.map((item, index) => {
                        const isActive = active === index ? "active" : "";
                        return (
                            <div
                                key={item.image}
                                className={`image-accordion-item ${isActive}`}
                                onClick={() => handleToggle(index)}
                            >
                                <Image alt="" height={900} width={900} src={item.image} />
                                <div className="content1">{item.header}</div>
                                <div className="content">
                                    <div className="">

                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="pt-10">
                    <Button>
                        <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                            {data.button}
                            <span>&rarr;</span>
                        </span>
                    </Button>
                </div>
            </section>
        </>
    );
};

export default ImageAccordion;
