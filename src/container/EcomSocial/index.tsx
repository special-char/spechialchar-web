import { Button } from "@/components/ui/button";
import { ecomSocial } from "@/lib/constData";
import { ecomSectionType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EcomSocial = ({ data }: ecomSectionType) => {
  return (
    <>
      <section className="flex flex-col gap-y-10">
        <div className="lg:text-6xl md:text-5xl text-3xl  font-bold md:pr-24">
          {data.title}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ecomSocial.section.map((i) => {
            return (
              <>
                <div
                  key={i.id}
                  className="border-2 broder-gray-200 flex justify-center items-center px-9 py-10"
                >
                  <Image src={i.url} alt={""} height={100} width={100}></Image>
                </div>
              </>
            );
          })}
        </div>
        <Link className="py-10" href={"https://thespecialcharacter.graphy.com/"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Let's discuss your<span>optimal fit </span>
              <span>&rarr;</span>
            </span>
          </Button>
        </Link>
      </section>
    </>
  );
};

export default EcomSocial;
