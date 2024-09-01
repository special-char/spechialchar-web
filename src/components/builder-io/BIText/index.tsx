import { withChildren } from "@builder.io/react";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  attributes: any;
};

const BIText = ({ children, attributes }: Props) => {
  console.log({ attributes, type: typeof attributes });

  return (
    <p className="text-4xl" {...attributes}>
      {children}
    </p>
  );
};

export default withChildren(BIText);
