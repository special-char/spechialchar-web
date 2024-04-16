import GridSection from "@/components/GridSection";
import { Button } from "@/components/ui/button";
import { webSection2 } from "@/lib/constData";
import { ServiceIconType } from "@/utils/types";
import Link from "next/link";
import React from "react";
type Props={
  button:string
}
const WebGrid4 = (props:Props) => {
  return (
    <section className="flex flex-col gap-y-5">
      <div className="grid md:grid-cols-4 gap-8  ">
        {webSection2.data.map((x) => (
          <GridSection key={x.description} data={x} />
        ))}
      </div>
      <div className="pt-5">
        <Link href={"#Contact"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              {props.button}

            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WebGrid4;
