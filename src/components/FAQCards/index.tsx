"use client"
import React, { useEffect, useState } from "react";
import { FAQCardType } from "@/utils/types";
import { FAQCard } from "@/lib/constData";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

type Props = {};

const FAQ = ({ data }: FAQCardType) => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const togglePanel = (index: number) => {
        if (openIndexes.includes(index)) {

            setOpenIndexes(openIndexes.filter((i) => i !== index));
        } else {

            setOpenIndexes([index]);
        }
    };



    return (
        <div className="px-container py-5 justify-center items-center font-sans leading-relaxed bg-[#f2aa4c]">
            <h3 className="  py-10  h-full flex  flex-wrap flex-col items-left justify-left md:text-6xl font-bold bg-[#f2aa4c] text-2xl">How we can help you</h3>
            {FAQCard.cards?.map((item, index) => {
                const isOpen = openIndexes.includes(index);
                return (
                    <Disclosure key={index}>
                        {({ open }) => (
                            <>
                                <Disclosure.Button
                                    key={item.id}
                                    className="font-medium border-2 border-slate-200  flex w-full justify-between bg-[#f2aa4c]  px-3 py-4   cursor-pointer max-[450px]:w-full"
                                    onClick={() => togglePanel(index)}
                                >
                                    {item.question}

                                    <Image
                                        alt=""
                                        src="/icons/accord_arrow_up.svg"
                                        width={15}
                                        height={15}
                                        className={`${isOpen ? "" : "rotate-180 transform duration-300"} h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                {isOpen && (
                                    <Disclosure.Panel className="px-4 pb-4 mb-2 pt-4 text-sm  border-2 border-rose-300 bg-white  transition-all">
                                        {item.answer}
                                    </Disclosure.Panel>
                                )}
                            </>
                        )}
                    </Disclosure>
                );
            })}
        </div>
    );
};

export default FAQ;
