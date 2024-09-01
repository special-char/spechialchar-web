import { cn } from "@/lib/utils";
import { withChildren } from "@builder.io/react";
import React, { PropsWithChildren } from "react";

type Props = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  content?: string;
  className?: string;
} & PropsWithChildren;

const BIHeading = ({ level = "h1", content, className, children }: Props) => {
  const Comp = level;
  return (
    <Comp className={cn("", { [`${className}`]: !!className })}>
      {children || content}
    </Comp>
  );
};

export default withChildren(BIHeading);
