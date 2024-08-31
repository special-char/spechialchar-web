"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const IMAGE_FILE_TYPES = ["jpeg", "jpg", "png", "gif", "avif", "webp"];

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

//BICustomBanner
Builder.registerComponent(
  dynamic(() => import("./components/builder-io/BiCustomBanner")),
  {
    name: "BICustomBanner",
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

//BiHomeAccordian
Builder.registerComponent(
  dynamic(() => import("./components/BiHomeAccordian")),
  {
    name: "BiHomeAccordian",
    inputs: [
      {
        name: "homeBanner",
        type: "boolean",
      },
      {
        name: "backgroundColor",
        type: "color",
      },
      { name: "borderColor", type: "color" },
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
            type: "object",
            subFields: [
              {
                name: "titleText",
                type: "string",
              },
              {
                name: "titleColor",
                type: "color",
                defaultValue: "#000000",
              },
            ],
          },
          {
            name: "description",
            type: "object",
            subFields: [
              {
                name: "descriptionText",
                type: "string",
              },
              {
                name: "descriptionColor",
                type: "color",
                defaultValue: "#000000",
              },
            ],
          },
          {
            name: "arrowButtonLink",
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

//BiImageBanner
Builder.registerComponent(
  dynamic(() => import("./components/builder-io/BiImageBanner")),
  {
    name: "BiImageBanner",
    inputs: [
      {
        name: "image",
        type: "file",
        allowedFileTypes: IMAGE_FILE_TYPES,
      },
      {
        name: "title1",
        type: "object",
        subFields: [
          {
            name: "title",
            type: "string",
          },
          {
            name: "titleColor",
            type: "color",
            defaultValue: "#ffffff",
          },
        ],
      },
      {
        name: "title2",
        type: "object",
        subFields: [
          {
            name: "subtitle",
            type: "string",
          },
          {
            name: "subtitleColor",
            type: "color",
            defaultValue: "#ffdb3b",
          },
        ],
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

//BiServiceCard
Builder.registerComponent(
  dynamic(() => import("./components/builder-io/BiServiceCard")),
  {
    name: "BiServiceCard",
    inputs: [
      {
        name: "serviceCard",
        type: "list",
        subFields: [
          {
            name: "image",
            type: "file",
            allowedFileTypes: IMAGE_FILE_TYPES,
          },
          {
            name: "titleLine",
            type: "object",
            subFields: [
              {
                name: "title",
                type: "string",
              },
              {
                name: "titleColor",
                type: "color",
                defaultValue: "#000000",
              },
            ],
          },
          {
            name: "description",
            type: "object",
            subFields: [
              {
                name: "descriptionText",
                type: "string",
              },
              {
                name: "descriptionColor",
                type: "color",
                defaultValue: "#000000",
              },
            ],
          },
          {
            name: "subText",
            type: "object",
            subFields: [
              {
                name: "text",
                type: "string",
              },
              {
                name: "textColor",
                type: "color",
                defaultValue: "#000000",
              },
            ],
          },
        ],
      },
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

//BiGrid
Builder.registerComponent(
  dynamic(() => import("./components/builder-io/BiGrid")),
  {
    name: "CustomGrid",
    inputs: [
      {
        name: "desktopGrid",
        type: "string",
        defaultValue: "4",
        enum: ["2", "3", "4", "6"],
      },
      {
        name: "tabletGrid",
        type: "string",
        defaultValue: "2",
        enum: ["1", "2", "3", "4"],
      },
      {
        name: "mobileGrid",
        type: "string",
        defaultValue: "1",
        enum: ["1", "2", "3"],
      },
      {
        name: "gridSection",
        type: "boolean",
        defaultValue: false,
      },
      {
        name: "gap",
        type: "string",
        defaultValue: "4",
      },
    ],
    defaultChildren: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "string",
          options: { text: "I am child text block!" },
        },
      },
    ],
  }
);

//BiSwiper
Builder.registerComponent(
  dynamic(() => import("./components/builder-io/BiSwiperCard")),
  {
    name: "BiSwiperCard",
    inputs: [
      {
        name: "toggleButton",
        type: "boolean",
      },
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
            name: "imageTitle",
            type: "object",
            subFields: [
              { name: "imageText", type: "string" },
              { name: "imageTextColor", type: "color" },
            ],
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

//BiTestimonialSwiper
Builder.registerComponent(
  dynamic(() => import("./components/builder-io/BiTestimonialSwiper")),
  {
    name: "BiTestimonialSwiper",
    inputs: [
      {
        name: "testimonials",
        type: "list",
        subFields: [
          {
            name: "image",
            type: "file",
            allowedFileTypes: IMAGE_FILE_TYPES,
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "title",
            type: "string",
          },
          {
            name: "company",
            type: "string",
          },
          {
            name: "testimonial",
            type: "text",
          },
        ],
      },
      {
        name: "textColor",
        type: "color",
      },
      {
        name: "testimonialTextColor",
        type: "color",
      },
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);
