"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const IMAGE_FILE_TYPES = ["jpeg", "jpg", "png", "gif", "avif", "webp", "svg"];

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
  dynamic(() => import("./components/BiSection")),
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

Builder.registerComponent(Footer, {
  name: "Footer",
  inputs: [
    {
      name: "data",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ title: string; address: string; email: string; mobile: string; privacy: string; copyright: string; }",
      },
      required: true,
    },
  ],
});

Builder.registerComponent(
  dynamic(() => import("./components/BiHomeAccordian")),
  {
    name: "BiHomeAccordian",
    inputs: [
      {
        name: "accordian",
        type: "list",
        subFields: [
          {
            name: "id",
            type: "number",
            required: true,
          },
          {
            name: "image",
            type: "file",
            allowedFileTypes: IMAGE_FILE_TYPES,
          },
          {
            name: "title",
            type: "string",
          },
          {
            name: "description",
            type: "string",
          },
        ],
      },
      {
        name: "button",
        type: "boolean",
        defaultValue: true,
      },
      {
        name: "ButtonTitle",
        type: "string",
      },
      {
        name: "link",
        type: "string",
      },
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);
