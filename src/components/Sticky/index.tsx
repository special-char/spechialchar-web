import React from "react";
import { Button } from "../ui/button";

type Props = {};

const Sticky = (props: Props) => {
  return (
    <main className="grid sticky bottom-0 z-10 group transition-all ease-in-out duration-150">
      <Button
        variant={"secondary"}
        size={"xxl"}
        className="justify-start font-extrabold text-3xl py-10"
      >
        <section>
          <span>Get in Touch</span>

        </section>
      </Button>
    </main>
  );
};

export default Sticky;
