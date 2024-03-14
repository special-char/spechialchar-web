import { Button } from "@/components/ui/button";
import { cloudBox2 } from "@/lib/constData";
import React from "react";

type Props = {};

const CloudGrid3 = (props: Props) => {
  return (
    <>
      <section className="bg-[#fffae3] border-r-2 m-10 px-24 lg: py-20  p-4 rounded-lg flex flex-col gap-y-9">
        <div className="text-subtitle1 font-bold">
          Why work with The Special Char?
        </div>
        <div>
          <ul className="list-square pl-7 grid lg:grid-cols-2 lg:px-1 gap-4 md:grid-cols-2">
            {cloudBox2.map((i) => (
              <li key={i.id} className="text-lg mb-2 ">
                <span className="font-bold text-xl">{i.title}</span>{" "}
                {i.discription}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-10">
        <Button>
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            Discuss my cloud <span>project</span>
            <span>&rarr;</span>
          </span>
        </Button>
      </section>
    </>
  );
};

export default CloudGrid3;
