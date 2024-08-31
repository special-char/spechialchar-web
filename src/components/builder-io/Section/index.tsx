import { withChildren } from "@builder.io/react";
import React, { PropsWithChildren } from "react";

const Section = withChildren((props: PropsWithChildren) => {
  return <section className="px-container py-12">{props.children}</section>;
});

export default Section;
