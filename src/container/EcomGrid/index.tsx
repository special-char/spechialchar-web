import GridSection from "@/components/GridSection";
import { Button } from "@/components/ui/button";
import { ecomSection, edSection, edSection3 } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {};

const EcomGrid = (props: Props) => {
  return (
    <>
      <section>
        <div className="grid lg:grid-cols-2 max-md:grid-cols-1 gap-10">
          {ecomSection.section.map((item) => (
            <GridSection data={item} />
          ))}
        </div>
        <Link className="py-10" href={"https://thespecialcharacter.graphy.com/"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Schedule a free <span> consultation with us </span>
              <span>&rarr;</span>
            </span>
          </Button>
        </Link>
      </section>
    </>
  );
};

export default EcomGrid;
