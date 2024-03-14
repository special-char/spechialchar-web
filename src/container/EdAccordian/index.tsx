import EdAccord from "@/components/EdAccord";
import { Button } from "@/components/ui/button";
import { edAccordiandata } from "@/lib/constData";
import React from "react";

type Props = {};

const EdAccordian = (props: Props) => {
  return (
    <>
      <section>
        <div>
          <EdAccord data={edAccordiandata} />
        </div>
        <div className="py-10">
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Strart your elearning <span>software development project </span>
              <span>&rarr;</span>
            </span>
          </Button>
        </div>
      </section>
    </>
  );
};

export default EdAccordian;
