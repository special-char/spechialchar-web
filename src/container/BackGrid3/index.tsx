import WebGrid from "@/components/WebGrid";
import { Button } from "@/components/ui/button";
import { backicon2 } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {
  button1:string,
  button2:string
}

const BackGrid3 = (props : Props) => {
  return (
    <section>
      <div className="grid md:grid-cols-4 gap-8 ">
        {backicon2.map((x) => (
          <WebGrid key={x.id} data={x} />
        ))}
      </div>
      <div className="py-10">
        <Link href={"#Contact"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              {props.button1}<span>{props.button2}</span>
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BackGrid3;
