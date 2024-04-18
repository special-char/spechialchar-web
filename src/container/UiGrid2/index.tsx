import GridSection from "@/components/GridSection";
import { Button } from "@/components/ui/button";
import { uiGrid2 } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {
  button1:string,
  button2:string
};

const UiGrid2 = (props: Props) => {
  return (
    <>
      <section>
        <div className="grid lg:grid-cols-3 max-md:grid-cols-1 gap-10">
          {uiGrid2.map((item) => (
            <GridSection key={item.id} data={item} />
          ))}
        </div>
        <div className="pt-10">
          <Link href={"#Contact"}>
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

export default UiGrid2;
