import { Button } from "@/components/ui/button";
import { ecomSocial } from "@/lib/constData";
import { ecomSectionType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = {
  title: string
  button: string
}
const EcomSocial = (props: Props) => {
  return (
    <>
      <section className="flex flex-col gap-y-10">
        <div className="text-heading1  font-bold md:pr-24">{props.title}</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ecomSocial.section.map((i) => {
            return (
              <>
                <div
                  key={i.id}
                  className="border-2 broder-gray-200 flex justify-center items-center px-9 py-10"
                >
                  <Image
                    src={i.url}
                    alt={"ecome-social"}
                    title="ecom-cliets"
                    height={100}
                    width={100}
                  ></Image>
                </div>
              </>
            );
          })}
        </div>
        <div className="pt-10">
          <Link
            title="Lets discuss your optimal fit"
            href={"#Contact"}
          >
            <Button>
              <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                {props.button}
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default EcomSocial;
