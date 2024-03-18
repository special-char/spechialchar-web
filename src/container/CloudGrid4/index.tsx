import GridSection from "@/components/GridSection";
import { Button } from "@/components/ui/button";
import { cloudgrid4, edSection } from "@/lib/constData";
import { uiSectionType } from "@/utils/types";
import React from "react";

type Props = {};

const CloudGrid4 = ({ data }: uiSectionType) => {
    return (
        <>
            <section>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
                    {cloudgrid4.section.map((item) => (
                        <GridSection data={item} />
                    ))}
                </div>
                <div className="py-10">
                    <Button>
                        <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                            Discuss my cloud<span>strategy</span>
                            <span>&rarr;</span>
                        </span>
                    </Button>
                </div>
            </section>
        </>
    );
};

export default CloudGrid4;
