import { Button } from "@/components/ui/button";
import { backbox, uiuxbox } from "@/lib/constData";
import React from "react";

type Props = {};

const UiUxBox = (props: Props) => {
    return (
        <>
            <section className="bg-[#fffae3]  lg:m-10 lg:px-24 lg: py-20  p-4 rounded-lg ">
                <ul className="list-square pl-7 grid lg:grid-cols-2  lg:px-1 gap-x-10 md:grid-cols-2">
                    {uiuxbox.map((i) => (
                        <li key={i.id} className="text-lg mb-2 ">
                            <span className="font-bold text-xl">{i?.title}</span>{" "}
                            {i.discription}
                        </li>
                    ))}
                </ul>
            </section>
            <section className="py-10">
                <Button>
                    <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                        Work with our UI/UX<span>design company</span>
                        <span>&rarr;</span>
                    </span>
                </Button>
            </section>
        </>
    );
};

export default UiUxBox;
