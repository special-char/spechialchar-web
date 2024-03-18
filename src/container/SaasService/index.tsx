import { Button } from "@/components/ui/button";
import { listData, listData1, listData2 } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {};

const SaasService = () => {
  return (
    <section className="flex flex-col ">
      <ul className="grid md:grid-cols-2 px-4">
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
      <Link className="py-10" href={"https://thespecialcharacter.graphy.com/"}>
        <Button>
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            Request our saas development<span>services </span>
            <span>&rarr;</span>
          </span>
        </Button>
      </Link>
    </section>
  );
};

export default SaasService;
