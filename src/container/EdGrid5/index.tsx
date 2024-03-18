import ServiceIcon from "@/components/ServiceIcon";
import { Button } from "@/components/ui/button";
import { edSection3 } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {};

const EdGrid5 = (props: Props) => {
  return (
    <>
      <section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {edSection3.map((x) => (
            <ServiceIcon data={x} />
          ))}
        </div>
        <div className="py-10">
        <Link className="py-10" href={"https://thespecialcharacter.graphy.com/"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Get your custom eLearning <span>solution </span>
              <span>&rarr;</span>
            </span>
          </Button>
        </Link>
        </div>
        
      </section>
    </>
  );
};

export default EdGrid5;
