import { withChildren } from "@builder.io/react";
import React, { PropsWithChildren } from "react";

const BiSection = withChildren((props: PropsWithChildren) => {
  console.log("props", props);

  return (
    <>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <section className="px-container py-10">{props.children}</section>
    </>
  );
});

export default BiSection;
