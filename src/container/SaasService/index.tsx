import { Button } from "@/components/ui/button";
import { listData, listData1, listData2 } from "@/lib/constData";
import React from "react";

type Props = {};

const SaasService = () => {
  return (
    <section className="flex flex-col ">
      <ul className="grid lg:grid-cols-2 px-4">
        <div className="">
          {listData1.data.map((i) => {
            return (
              <div className="list-square text-subtitle2">
                <li key={i?.id} className="font-bold">
                  {i.title}
                </li>
              </div>
            );
          })}
        </div>
        <div>
          {listData2.data.map((i) => {
            return (
              <div className="list-square text-subtitle2">
                <li key={i?.id} className="font-bold">
                  {i.title}
                </li>
              </div>
            );
          })}
        </div>
      </ul>
      <div className="py-10">
        <Button>
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            Request our saas development<span>services </span>
            <span>&rarr;</span>
          </span>
        </Button>
      </div>
    </section>
  );
};

export default SaasService;
