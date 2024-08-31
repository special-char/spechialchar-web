import { withChildren } from "@builder.io/react";
import React, { PropsWithChildren } from "react";

const BiSection = withChildren((props: PropsWithChildren) => {
  return <section className="px-container py-10">{props.children}</section>;
});

export default BiSection;
