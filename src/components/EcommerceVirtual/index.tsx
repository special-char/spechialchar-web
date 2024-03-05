import React from "react";
import Button from "../Button";
import { Eco1 } from "@/lib/constData";
import Image from "next/image";
interface Props { }

const EcommerceVirtual = (props: Props) => {
    return (
        <>
            <div className="grid md:grid-cols-2 max-md:grid-cols-1 gap-10 xl:px-60 px-3 my-20 ">
                {Eco1.section3.map((item) => (

                    <div key={item.id} className="flex gap-2 sm:gap-5 ">
                        <Image src={item.url} alt="" height={50} width={50} />
                        <div className="sm:text-3xl text-2xl pt-2 font-semibold">{item.title}</div>

                    </div>
                ))}
            </div><div className="my-20 font-bold text-2xl px-3 xl:px-60">
                <Button>Let's make your vision a reality &rarr;</Button>
            </div>
        </>

    );
};

export default EcommerceVirtual;
