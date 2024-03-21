"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordian";
import { aboutAccordianData } from "@/lib/constData";
import { aboutAccordianDatatype } from "@/utils/types";


const AboutAccordian = ({ data }: aboutAccordianDatatype) => {
    return (
        <>
            <section className="bg-yellow-300">
                <div className="py-5 flex md:justify-start justify-center text-3xl md:text-7xl lg:text-8xl font-bold">{data.title1}</div>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full bg-yellow-300 py-12 md:py-20"
                >
                    <hr className="border-1 border-black" />
                    {aboutAccordianData.data.map((item) => {
                        return (
                            <AccordionItem className="border-b  border-black" key={item.id} value={`item-${item.id}`}>
                                <AccordionTrigger className="bg-yellow-300 flex flex-1 items-center justify-between py-10 text-2xl  md:text-4xl lg:text-5xl font-bold">
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent className="overflow-hidden text-2xl font-medium max-sm:text-lg lg:pr-40 pb-4">
                                    {item.content}
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </section>
        </>
    );
};
export default AboutAccordian;
