import React from "react";
import { Button } from "../ui/button";

type Props = {};

const Sticky = (props: Props) => {
  return (
    <main className="grid sticky bottom-0 z-10">
      <Button variant={"secondary"} size={"xl"} className="justify-start">
        <section>
          <span>Get in Touch</span>
          <span>&rarr;</span>
        </section>
      </Button>
    </main>
  );
};

export default Sticky;
