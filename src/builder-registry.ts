"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
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

//Section
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

//BiProjectCard
Builder.registerComponent(
  dynamic(() => import("./components/builder-io/BiProjectCard")),
  {
    name: "BiProjectCard",
    inputs: [
      {
        name: "projects",
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
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

//BiClientCarousel
Builder.registerComponent(
  dynamic(() => import("./components/builder-io/BiClientCarousel")),
  {
    name: "BiClientCarousel",
    inputs: [
      {
        name: "clients",
        type: "list",
        subFields: [
          {
            name: "title",
            type: "string",
          },
          {
            name: "image",
            type: "file",
            allowedFileTypes: IMAGE_FILE_TYPES,
          },
        ],
      },
      {
        name: "classname",
        type: "string",
      },
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

//BiBanner
Builder.registerComponent(
  dynamic(() => import("./components/builder-io/BiBanner")),
  {
    name: "BiBanner",
    inputs: [
      {
        name: "background",
        type: "color",
      },
      {
        name: "textColor",
        type: "color",
      },
      {
        name: "headingLine1",
        type: "object",
        subFields: [
          {
            name: "heading",
            type: "string",
          },
          {
            name: "textColor",
            type: "color",
          },
        ],
      },
      {
        name: "headingLine2",
        type: "string",
      },
      {
        name: "description",
        type: "text",
      },
      {
        name: "subTitle",
        type: "string",
      },
      {
        name: "animatedWords",
        type: "list",
        subFields: [
          {
            name: "word",
            type: "string",
          },
        ],
      },
      {
        name: "button",
        type: "boolean",
      },
      {
        name: "btnText",
        type: "string",
        showIf: (options) => options.get("button"),
      },
      {
        name: "btnUrl",
        type: "string",
        showIf: (options) => options.get("button"),
      },
      {
        name: "media",
        type: "file",
      },
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);
