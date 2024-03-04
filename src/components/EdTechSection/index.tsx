import React from "react";
import Button from "../Button";
import { EdSection } from "@/lib/constData";
import { EdSectionType } from "@/utils/types";

interface Props {}

const EdSection1 = ({ data }: { data: EdSectionType[] }) => {
  return (
    <section >
      <div className="flex flex-wrap w-[75%]">
        <div className="text-4xl font-extrabold">
          We craft educational software for every need
        </div>
        <div className=" text-2xl max-md:text-lg py-10 font-light">
          We help our clients in K-12, postsecondary, and corporate segments to
          redefine the way they teach, learn, communicate, and operate. EdTech
          startups and educational software companies, in turn, use our
          eLearning software development expertise to win the market with
          next-gen features that drive online education way forward. K-12
        </div>
      </div>
      <div className="grid lg:grid-cols-2 max-md:grid-cols-1 gap-10">
        {EdSection.section.map((item) => (
          <div key={item.id} className="border-b-2 border-b-orange">
            <div className="text-3xl font-extrabold">{item.title}</div>
            <div className=" text-2xl max-md:text-lg py-10 text-gray font-light">
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <div className="my-8 font-bold text-2xl">
        <Button>Otp for custom eLearning development</Button>
      </div>
    </section>
  );
};

export default EdSection1;
