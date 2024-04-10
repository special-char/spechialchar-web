import EdAccord from "@/components/EdAccord";
import { Button } from "@/components/ui/button";
import { edAccordiandata } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {};

const EdAccordian = (props: Props) => {
  return (
    <>
      <section>
        <div>
          <EdAccord data={edAccordiandata} />
        </div>
        <div className="pt-10">
          <Link title="elearing-development" href={"https://thespecialcharacter.graphy.com/"}>
            <Button>
              <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                Start your elearning software<span> development project </span>

              </span>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default EdAccordian;
