"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { homeAccordiandata } from "@/lib/constData";
import { homeAccordiandataType } from "@/utils/types";
import Image from "next/image";

const HomeAccordian = ({ data }: homeAccordiandataType) => {

    return (
        <Accordion type="single" collapsible className="w-full bg-yellow-300 max-sm:px-4 sm:px-8">
            {homeAccordiandata.data.map((item) => {
                return (
                    <AccordionItem key={item.id} value={`item-${item.id}`}>
                        <AccordionTrigger className="">
                            <div className="flex gap-10 items-center">
                                <div className=" md:flex md:gap-40 lg:gap-[30rem] items-center  hidden">
                                    <Image
                                        alt=""
                                        src={item.image}
                                        width={40}
                                        height={40}

                                    />
                                    <div className=""> {item.number}</div>
                                </div>

                                <div>{item.title}</div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>{item.desc}</AccordionContent>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
}
export default HomeAccordian