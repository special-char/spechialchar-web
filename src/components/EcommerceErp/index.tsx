import React from "react";
import Button from "../Button";
import { Ecommerce } from "@/lib/constData";

interface Props { }

const EcommerceErp = (props: Props) => {
    return (
        <>
            <div className="grid md:grid-cols-2 max-md:grid-cols-1 gap-10 px-container my-20 ">
                {Ecommerce.section3.map((item) => (
                    <div key={item.id} className="border-b-2 border-b-orange">
                        <div className="text-3xl font-extrabold">{item.title}</div>
                        <div className=" text-2xl max-md:text-lg py-10 text-gray font-light">
                            {item.description}
                        </div>
                    </div>
                ))}
            </div><div className="my-20 font-bold text-2xl px-container">
                <Button>Schedule a free consultation us &rarr;</Button>
            </div>
        </>

    );
};

export default EcommerceErp;
