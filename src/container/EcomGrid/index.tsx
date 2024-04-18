import GridSection from "@/components/GridSection";
import { Button } from "@/components/ui/button";
import { ecomSection, edSection, edSection3 } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {
  button: string
};

const EcomGrid = (props: Props) => {
  return (
    <>
      <section>
        <div className="grid lg:grid-cols-2 max-md:grid-cols-1 gap-10">
          {ecomSection.section.map((item) => (
            <GridSection key={item.id} data={item} />
          ))}
        </div>
        <div className="pt-10">
          <Link title="Schedule a free consultation with us" href={"#Contact"}>
            <Button>
              <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                {props.button}

              </span>
            </Button>
          </Link>
        </div>

      </section>
    </>
  );
};

export default EcomGrid;
