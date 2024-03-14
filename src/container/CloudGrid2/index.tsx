import { Button } from "@/components/ui/button";
import { cloudgrid } from "@/lib/constData";
import React from "react";

type Props = {};

const CloudGrid2 = (props: Props) => {
  return (
    <>
      <section>
        {cloudgrid.data.map((i) => {
          return (
            <div className="flex justify-between my-10 pb-10 border-b-2 border-b-gray-200">
              <div className="font-bold text-xl w-60">{i.title}</div>
              <div className="text-gray-400 text-xl w-[40rem]">
                {i.description}
              </div>
            </div>
          );
        })}
        <div className="py-10">
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Talk to <span>cloud expert </span>
              <span>&rarr;</span>
            </span>
          </Button>
        </div>
      </section>
    </>
  );
};

export default CloudGrid2;
