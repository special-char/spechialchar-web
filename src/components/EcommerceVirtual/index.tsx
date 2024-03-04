import React from "react";
import Button from "../Button";
import { Eco1 } from "@/lib/constData";
import Image from "next/image";
interface Props { }

const EcommerceVirtual = (props: Props) => {
    return (
        <>
            <div className="grid md:grid-cols-2 max-md:grid-cols-1 gap-10 px-container my-20 ">
                {Eco1.section3.map((item) => (

                    <div key={item.id} className="flex gap-10">
                        <Image src={item.url} alt="" height={50} width={50} />
                        <div className="text-3xl font-semibold">{item.title}</div>

                    </div>
                ))}
            </div><div className="my-20 font-bold text-2xl px-container">
                <Button>Let's make your vision a reality &rarr;</Button>
            </div>
        </>

    );
};

export default EcommerceVirtual;
