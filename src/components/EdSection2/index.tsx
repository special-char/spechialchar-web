import React from "react";
import { Ed } from "@/lib/constData";
import { EdSectionType2 } from "@/utils/types";
import Button from "../Button";

interface Props {}

const EdSection2 = ({ data }: { data: EdSectionType2[] }) => {
  return (
    <section className="">
      <div className="grid lg:grid-cols-4 max-md:grid-cols-1 gap-10">
        {Ed.section2.map((item) => (
          <div key={item.id} className="border-b-2 border-b-orange">
            <div className="text-3xl font-extrabold">{item.title}</div>
            <div className=" text-2xl max-md:text-lg py-10 text-gray font-light">
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <div className="my-7">
        <Button>Schedule a free descussion </Button>
      </div>
    </section>
  );
};

export default EdSection2;
