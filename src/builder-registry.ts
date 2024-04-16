"use client";
import { builder, Builder } from "@builder.io/react";
import Banner from "./container/Banner";
import Counter from "./components/Counter/Counter";
import ImageBanner from "./components/ImageBanner";
import OurThinking from "./components/OurThinking";
import PageBanner from "./container/PageBanner";
import ProjectBanner from "./components/ProjectBanner";
import Service from "./container/Service";
import ServiceBox from "./components/ServiceBox";
import ServiceIcon from "./components/ServiceIcon";
import ServiceIcon2 from "./components/ServiceIcon2";

import Tab from "./components/Tab";
import YellowBanner from "./components/YellowBanner";
import Swiper1 from "./components/Swiper";

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

Builder.registerComponent(PageBanner, {
  name: "PageBanner",
  inputs: [
    {
      name: "title1",
      type: "string",
      required: true,
    },
    {
      name: "title2",
      type: "string",
      required: false,
    },
  ],
});

Builder.registerComponent(OurThinking, {
  name: "OurThinking",
  inputs: [
    {
      name: "className",
      type: "string",
    },
    {
      name: "cost",
      type: "string",
      required: true,
    },
    {
      name: "id",
      type: "number",
      required: true,
    },
    {
      name: "image",
      type: "string",
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(ProjectBanner, {
  name: "ProjectBanner",
  inputs: [
    {
      name: "description1",
      type: "string",
      required: true,
    },
    {
      name: "description2",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(Banner, {
  name: "Banner",
  inputs: [
    {
      name: "button1",
      type: "string",
      required: true,
    },
    {
      name: "button2",
      type: "string",
      required: true,
    },
    {
      name: "description",
      type: "string",
      required: true,
    },
    {
      name: "image",
      type: "string",
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(Service, {
  name: "Service",
  inputs: [
    {
      name: "heading",
      type: "string",
      required: true,
    },
    {
      name: "texts",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(ServiceIcon, {
  name: "ServiceIcon",
  inputs: [
    {
      name: "data",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ url: string; title: string; description: string; languages: string; }",
      },
      required: true,
    },
  ],
});

Builder.registerComponent(ImageBanner, {
  name: "ImageBanner",
  inputs: [
    {
      name: "title1",
      type: "string",
      required: true,
    },
    {
      name: "title2",
      type: "string",
      required: true,
    },
    {
      name: "url",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(YellowBanner, {
  name: "YellowBanner",
  inputs: [
    {
      name: "description",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(ServiceIcon2, {
  name: "ServiceIcon2",
  inputs: [
    {
      name: "texts",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(Tab, {
  name: "Tab",
  inputs: [
    {
      name: "button",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(ServiceBox, {
  name: "ServiceBox",
  inputs: [
    {
      name: "button",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(Swiper1, {
  name: "Swiper1",
  inputs: [
    {
      name: "button",
      type: "string",
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

