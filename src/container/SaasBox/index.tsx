import { Button } from "@/components/ui/button";
import { serviceBox1 } from "@/lib/constData";
import Link from "next/link";
import React from "react";

const SaasBox = () => {
  return (
    <>
      <div>
        <div className="bg-lightblue mx-5 my-10 lg:rounded-lg ">
          <section>
            <ul className="list-square pl-4 grid lg:grid-cols-2 lg:px-1 gap-x-8 gap-y-8 md:grid-cols-2">
              {serviceBox1.map((i) => (
                <li key={i.id} className="text-lg mb-2 text-blue">
                  <span className="font-bold text-xl text-primary">
                    {i?.title}
                  </span>{" "}
                  <span className="text-primary">{i.discription}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="pb-10 px-container">
          <Link href={"https://thespecialcharacter.graphy.com/"}>
            <Button>
              <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                Lets Discuss Our{" "}
                <span>
                  parternship <span>&rarr;</span>
                </span>
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SaasBox;
