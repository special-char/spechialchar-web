"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import OurThinking from "./components/OurThinking";
import PageBanner from "./container/PageBanner";

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
