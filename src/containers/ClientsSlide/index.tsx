import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Icon1 from "@/public/icons/21stCenturyFox.svg";
import Icon2 from "@/public/icons/dollarShaveClub.svg";
import Icon3 from "@/public/icons/WB.svg";
import Icon4 from "@/public/icons/jibjab.svg";
import Icon5 from "@/public/icons/turvo.svg";
import Icon6 from "@/public/icons/p&g.svg";
import Icon7 from "@/public/icons/virtual.svg";
import Icon8 from "@/public/icons/potentiaMatrics.svg";
import Icon9 from "@/public/icons/telenav.svg";
import Icon10 from "@/public/icons/universalElectronics.svg";
import Icon11 from "@/public/icons/theNqnest.svg";

type Props = {};

const Clients = (props: Props) => {
  return (
    // <div className="w-full  bg-black text-white py-[7rem] h-60">
    //   <Marquee>
    //   <div className="flex gap-60 font-bold text-2xl text-caption1">
    //     <div>PotentiaMetrics</div>
    //     <div>TelNav</div>
    //     <div>Turvo</div>
    //     <div> 21sTCenturyFox </div>
    //     <div>DollerShaveClub</div>
    //     <div>Hello</div>
    //     <div>Hello</div>
    //     <div>Hello</div>
    //     <div>Hello</div>
    //     <div>Hello</div>
    //     <div>Hello</div>
    //   </div>
    //   </Marquee>
    // </div>

    <div className="bg-black py-10">
      <Marquee>
        <div className="flex">
          {/* <Icon1 className="h-10 w-10" />
          <Icon2 className="h-10 w-10" />
          <Icon3 className="h-10 w-10" />
          <Icon4 className="h-10 w-10" />
          <Icon5 className="h-10 w-10" />
          <Icon6 className="h-10 w-10" /> */}
          <Icon7 className="h-10 w-10" />
          {/* <Icon8 className="h-10 w-10" />
          <Icon9 className="h-10 w-10" />
          <Icon10 className="h-10 w-10" />
          <Icon11 className="h-10 w-10" /> */}
        </div>
      </Marquee>
    </div>
  );
};

export default Clients;
