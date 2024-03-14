"use client";
import { SetStateAction, useState } from "react";
import { imageAccordianDataType } from "@/utils/types";
import { imageAccordianData } from "@/lib/constData";
import "./styles.css";
import Image from "next/image";

const ImageAccordion = ({ data }: imageAccordianDataType) => {
    const [active, setActive] = useState(0);

    const handleToggle = (index: SetStateAction<number>) => setActive(index);

    return (
        <section className="image-accordion">
            {imageAccordianData.data.map((item, index) => {
                const isActive = active === index ? "active" : "";
                return (
                    <div
                        key={item.image}
                        className={`image-accordion-item ${isActive}`}
                        onClick={() => handleToggle(index)}
                    >
                        <Image alt="" height={900} width={900} src={item.image} />
                        <div className="content">

                            <div>
                                <h2>{item.header}</h2>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default ImageAccordion;