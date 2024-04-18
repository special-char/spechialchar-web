import WhiteMarque from "@/components/WhiteMarque";
import React from "react";

type Props = {
  title: string
};

const OurClients = (props: Props) => {
  return (
    <>
      <div>
        <section>
          <h2 className="text-heading1">{props.title}</h2>
        </section>
        <WhiteMarque className="bg-background" />
      </div>
    </>
  );
};

export default OurClients;
