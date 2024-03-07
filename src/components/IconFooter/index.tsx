"use client";

import { footerdata } from "@/lib/constData";
import { FooterIconsType } from "@/utils/types";
import { Ecommerce1 } from "@/lib/constData";
import Image from "next/image";
import React from "react";
import Iso from "@/public/icons/iso.svg";
import Upwork from "@/public/icons/upwork.svg";

type Props = {};

const FooterCirti2 = () => {
    return (
        <>
            {footerdata?.data.map((i) => (
                <div key={i.id} className="relative ">
                    <Image src={i.icon} alt={""} height={100} width={100} />
                </div>
            ))}
        </>
    );
};

export default FooterCirti2;
