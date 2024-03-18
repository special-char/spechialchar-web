import { Button } from "@/components/ui/button";
import { edBox } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {};

const EdList = () => {
  return (
    <>
      <section className="bg-[#fffae3] border-r-2 md:m-10 lg:px-24 lg:py-20  p-4 rounded-lg flex flex-col gap-y-9">
        <div>
          <ul className="list-square pl-7 grid lg:grid-cols-2 lg:px-1 gap-x-10 md:grid-cols-2">
            {edBox.map((i) => (
              <li key={i.id} className="text-lg mb-2 ">
                <span className="font-bold text-xl">{i.title}</span>{" "}
                {i.discription}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-10">
        <Link href={"https://thespecialcharacter.graphy.com/"}>
        <Button>
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            Discuss your custom <span>elearning solution</span>
            <span>&rarr;</span>
          </span>
        </Button>
        </Link>
        
      </section>
    </>
  );
};

export default EdList;
