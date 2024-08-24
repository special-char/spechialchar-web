"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(
  dynamic(() => import("./components/builder-io/Section")),
  {
    name: "Section",
    // Adding defaults is important for easy usability
    defaultChildren: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "string",
          options: { text: "I am child text block!" },
        },
      },
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);
