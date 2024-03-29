import { webGridSectiondata } from "@/lib/constData";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

function WebGridSection() {
  return (
    <section className="flex flex-col gap-y-10">
      <div className="grid grid-cols-4 gap-5 mx-auto max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 ">
        {webGridSectiondata.data.map((x) => (
          <Link
            key={x.id}
            href={x?.ref}
            className="text-blue-700 hover:text-blue-300 duration-300 text-2xl font-bold border-b-2 py-4 border-b-second"
          >
            {x.link}
          </Link>
        ))}
      </div>
      <div>
      <Link className="" href={"https://thespecialcharacter.graphy.com/"}>
        <Button>
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            Discuss your web app<span>develpoment project </span>
            <span>&rarr;</span>
          </span>
        </Button>
      </Link>
      </div>
    </section>
  );
}

export default WebGridSection;
