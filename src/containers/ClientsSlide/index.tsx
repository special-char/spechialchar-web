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
    <div className="bg-black text-white ">
      <div className="flex animate-slider font-bold text-2xl text-caption1 py-10">
        <div>PotentiaMetrics</div>
        <div>TelNav</div>
        <div>Turvo</div>
        <div> 21sTCenturyFox </div>
        <div>DollerShaveClub</div>
        {/* <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div> */}
      </div>
    </div>
  );
};

export default Clients;
