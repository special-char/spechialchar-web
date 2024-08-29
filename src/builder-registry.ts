"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const IMAGE_FILE_TYPES = ["jpeg", "jpg", "png", "gif", "avif", "webp"];

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
        name: "background",
        type: "color",
        defaultValue: "#1e3d60",
      },
      // {
      //   name: "classname",
      //   type: "string",
      // },
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
        defaultValue: "#000000",
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
            defaultValue: "#000000",
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

//BiTabs
Builder.registerComponent(
  dynamic(() => import("./components/builder-io/BiTab")),
  {
    name: "BiTab",
    inputs: [
      {
        name: "verticalTab",
        type: "boolean",
        defaultValue: false,
      },
      {
        name: "tab",
        type: "list",
        subFields: [
          {
            name: "image",
            type: "file",
          },
          {
            name: "title",
            type: "string",
          },
          {
            name: "content",
            type: "string",
          },
        ],
      },
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

//BiAnimatedImageWord
Builder.registerComponent(
  dynamic(() => import("./components/builder-io/BiAnimatedImageWord")),
  {
    name: "BiAnimatedImageWord",
    inputs: [
      {
        name: "data",
        type: "list",
        subFields: [
          {
            name: "title",
            type: "string",
          },
          {
            name: "image",
            type: "file",
          },
          {
            name: "url",
            type: "string",
          },
        ],
      },
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);
