import { withChildren } from "@builder.io/react";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  attributes: any;
};

const BIText = ({ children, attributes }: Props) => {
  console.log({ attributes, type: typeof attributes });

  return (
    <div className="text-4xl" {...attributes}>
      {children}
    </div>
  );
};

export default withChildren(BIText);
