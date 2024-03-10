"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { marquedataType } from "@/utils/types";
import { MarqueData } from "@/lib/constData";
// import Icon1 from "@/public.icons/wb.svg";
// import Icon5 from "@/public.icons/turvo-logo.svg";
// import Icon2 from "@/public.icons/poplidays.svg";
// import Icon3 from "@/public.icons/p&g.svg";
// import Icon4 from "@/public.icons/universalelectroniocs-logo.svg";

const Marque = ({ data }: marquedataType) => (
  <div className="h-72 flex items-center bg-black">
    <Marquee speed={100}>
      <div className="flex gap-28">
        {MarqueData.map((x) => (
          <div key={x.id}>
            <Image src={x.src} alt="image" height={100} width={220} />
          </div>
        ))}
      </div>

      
    </Marquee>

    {/* <div className="flex gap-4">
      <div>
        <Icon1 />
      </div>
      <div>
        <Icon3/>
      </div>
      <div>
        <Icon2 />
      </div>
      <div>
        <Icon4/>
      </div>
    </div> */}
  </div>
);

export default Marque;
