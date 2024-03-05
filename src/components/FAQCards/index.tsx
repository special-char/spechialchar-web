"use client"
import React, { useEffect, useState } from "react";
import { FAQCardType } from "@/utils/types";
import { FAQCard } from "@/lib/constData";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import Button from "../Button";

type Props = {};

const FAQ = ({ data }: FAQCardType) => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const togglePanel = (index: number) => {
        if (openIndexes.includes(index)) {

            setOpenIndexes(openIndexes.filter((i) => i == index));
        } else {

            setOpenIndexes([index]);
        }
    };
    return (
        <div className="xl:px-60 px-3 py-5 justify-center items-center font-sans leading-relaxed bg-orange">
            <h3 className="  py-10  h-full flex  flex-wrap flex-col items-left justify-left md:text-4xl font-bold bg-orange text-2xl">How we can help you</h3>
            {FAQCard.cards?.map((item, index) => {
                const isOpen = openIndexes.includes(index);
                return (
                    <Disclosure key={index}>
                        {({ open }) => (
                            <>
                                <Disclosure.Button
                                    key={item.id}
                                    className="font-bold text-2xl border-t-2 border-black  flex w-full justify-between bg-orange  px-3 py-4   cursor-pointer max-[450px]:w-full"
                                    onClick={() => togglePanel(index)}
                                >
                                    <Image
                                        alt=""
                                        src={item.url}
                                        width={40}
                                        height={40}
                                    />
                                    <div className="py-3">{item.question}</div>
                                    <div className="py-4">
                                        <Image
                                            alt=""
                                            src="/icons/accord_arrow_up.svg"
                                            width={15}
                                            height={15}
                                            className={`${isOpen ? "" : "rotate-180 transform duration-300"} h-5 w-5 text-purple-500`}

                                        /></div>
                                </Disclosure.Button>
                                {isOpen && (
                                    <Disclosure.Panel className="px-4 md:px-10 mb-4 text-lg transition-all">

                                        <div className="text-center"> {item.answer}</div>
                                    </Disclosure.Panel>

                                )}

                            </>
                        )}
                    </Disclosure>
                );
            })}
            <hr className="border-b border-black" />
            <Button className='md:w-72 w-60 my-14 font-bold'>Discuss my project</Button>
        </div>
    );
};

export default FAQ;
