import WebGrid from "@/components/WebGrid";
import { Button } from "@/components/ui/button";
import { cloudgrid4 } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {
  button1:string
  button2:string
};

const CloudGrid4 = (props : Props) => {
  return (
    <>
      <section>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {cloudgrid4.section.map((item) => (
            <WebGrid key={item.id} data={item} />
          ))}
        </div>
        <div className="pt-10">
          <Link title="cloud-strategy" href={"#Contact"}>
            <Button>
              <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                {props.button1}<span>{props.button2}</span>
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default CloudGrid4;
