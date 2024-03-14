import GridSection from "@/components/GridSection";
import { Button } from "@/components/ui/button";
import { uiGrid2 } from "@/lib/constData";
import React from "react";

type Props = {};

const UiGrid = (props: Props) => {
  return (
    <>
      <section>
        <div className="grid lg:grid-cols-3 max-md:grid-cols-1 gap-10">
          {uiGrid2.map((item) => (
            <GridSection data={item} />
          ))}
        </div>
        <div className="py-10">
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Discuss your Ui/Ux <span>design needs</span>
              <span>&rarr;</span>
            </span>
          </Button>
        </div>
      </section>
    </>
  );
};

export default UiGrid;
