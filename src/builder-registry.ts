"use client";
import { builder, Builder } from "@builder.io/react";
import AboutAccordian from "./components/AboutAccordian";
import AboutBanner from "./components/AboutBanner";
import AboutBanner2 from "./components/AboutBanner2";
import AboutCount from "./components/AboutCount";
import AboutLinks from "./components/AboutLinks";
import BackBox from "./container/BackBox";
import BackGrid from "./container/BackGrid";
import BackGrid2 from "./container/BackGrid2";
import BackGrid3 from "./container/BackGrid3";
import Banner from "./container/Banner";
import CloudAccordian from "./container/CloudAccordian";
import CloudGrid from "./container/CloudGrid";
import CloudGrid2 from "./container/CloudGrid2";
import CloudGrid3 from "./container/CloudGrid3";
import CloudGrid4 from "./container/CloudGrid4";
import CloudSocial from "./container/CloudSocial";
import Counter from "./components/Counter/Counter";
import EcomGrid from "./container/EcomGrid";
import EcomGrid3 from "./container/EcomGrid3";
import EcomSocial from "./container/EcomSocial";
import EdAccordian from "./container/EdAccordian";
import EdGrid3 from "./container/EdGrid3";
import EdGrid5 from "./container/EdGrid5";
import EdList from "./container/EdList";
import EdTechGrid from "./container/EdTechGrid";
import EdTechGrid2 from "./container/EdTechGrid2";
import ImageAccordion from "./components/ImageAccordian";
import ImageBanner from "./components/ImageBanner";
import Index from "./components/MobileServices";
import Index1 from "./components/EcomServices";
import LatestThinking from "./components/LatestThinking";
import LatestThinking2 from "./components/LatestThinking2";
import LatestThinking3 from "./components/LatestThinking3";
import LatestThinking4 from "./components/LatestThinking4";
import MobileIcon from "./components/MobileIcon";
import MobilePage from "./components/MobilePage";
import MobileSwiper from "./components/MobileSwiper";
import OurClients from "./container/OurClients";
import OurThinking from "./components/OurThinking";
import PageBanner from "./container/PageBanner";
import ProjectBanner from "./components/ProjectBanner";
import SaasBox from "./container/SaasBox";
import SaasGrid from "./container/SaasGrid";
import SaasGrid2 from "./container/SaasGrid2";
import SaasService from "./container/SaasService";
import Service from "./container/Service";
import ServiceAccordian from "./components/ServiceAccordian";
import ServiceBox from "./components/ServiceBox";
import ServiceIcon from "./components/ServiceIcon";
import ServiceIcon2 from "./components/ServiceIcon2";
import Swiper1 from "./components/Swiper";
import Swiper2 from "./components/MobileSwiper1";
import Swiper3 from "./components/Swiper3";
import Swiper4 from "./components/Swiper4";
import Swiper7 from "./components/Swiper2";
import Tab from "./components/Tab";
import Tab1 from "./components/Tab/index1";
import Tab3 from "./components/Tab/index3";
import UiGrid from "./container/UiGrid";
import UiGrid2 from "./container/UiGrid2";
import UiUxBox from "./container/UiUxBox";
import WebGrid from "./container/WebGrid";
import WebGrid2 from "./container/WebGrid2";
import WebGrid3 from "./container/WebGrid3";
import WebGrid4 from "./container/WebGrid4";
import WebGrid5 from "./container/WebGrid5";
import WebGridSection from "./components/WebGridSection";
import YellowBanner from "./components/YellowBanner";

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
      required: false,
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

Builder.registerComponent(MobileIcon, {
  name: "MobileIcon",
  inputs: [
    {
      name: "button",
      type: "string",
      required: true,
    },
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

Builder.registerComponent(Swiper2, {
  name: "Swiper2",
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

Builder.registerComponent(Index, {
  name: "Index",
});

Builder.registerComponent(ServiceAccordian, {
  name: "ServiceAccordian",
  inputs: [],
});

Builder.registerComponent(Tab, {
  name: "Tab",
  inputs: [
    {
      name: "data",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ button2: string; button: string; title1: string; title2: string; }",
      },
      required: true,
    },
  ],
});

Builder.registerComponent(Tab1, {
  name: "Tab1",
  inputs: [
    {
      name: "button",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(MobileSwiper, {
  name: "MobileSwiper",
});

Builder.registerComponent(MobilePage, {
  name: "MobilePage",
});

Builder.registerComponent(LatestThinking, {
  name: "LatestThinking",
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(WebGrid, {
  name: "WebGrid",
  inputs: [
    {
      name: "button",
      type: "string",
      required: true,
    },
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

Builder.registerComponent(WebGridSection, {
  name: "WebGridSection",
});

Builder.registerComponent(WebGrid5, {
  name: "WebGrid5",
  inputs: [
    {
      name: "button",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(WebGrid2, {
  name: "WebGrid2",
  inputs: [
    {
      name: "button",
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

Builder.registerComponent(WebGrid4, {
  name: "WebGrid4",
  inputs: [
    {
      name: "button",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(WebGrid3, {
  name: "WebGrid3",
});

Builder.registerComponent(Swiper7, {
  name: "Swiper7",
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(ImageAccordion, {
  name: "ImageAccordion",
  inputs: [
    {
      name: "button",
      type: "string",
      required: true,
    },
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
      name: "title3",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(EcomSocial, {
  name: "EcomSocial",
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

Builder.registerComponent(EcomGrid, {
  name: "EcomGrid",
  inputs: [
    {
      name: "button",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(EcomGrid3, {
  name: "EcomGrid3",
  inputs: [
    {
      name: "button",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(Index1, {
  name: "Index1",
  inputs: [
    {
      name: "button",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(OurClients, {
  name: "OurClients",
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(LatestThinking2, {
  name: "LatestThinking2",
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(EdTechGrid, {
  name: "EdTechGrid",
  inputs: [
    {
      name: "button",
      type: "string",
      required: true,
    },
    {
      name: "text",
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

Builder.registerComponent(EdTechGrid2, {
  name: "EdTechGrid2",
  inputs: [
    {
      name: "button",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(EdGrid3, {
  name: "EdGrid3",
});

Builder.registerComponent(EdAccordian, {
  name: "EdAccordian",
});

Builder.registerComponent(EdGrid5, {
  name: "EdGrid5",
});

Builder.registerComponent(EdList, {
  name: "EdList",
});

Builder.registerComponent(LatestThinking3, {
  name: "LatestThinking3",
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(SaasGrid, {
  name: "SaasGrid",
  inputs: [
    {
      name: "description",
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

Builder.registerComponent(SaasGrid2, {
  name: "SaasGrid2",
});

Builder.registerComponent(SaasService, {
  name: "SaasService",
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
  ],
});

Builder.registerComponent(SaasBox, {
  name: "SaasBox",
  inputs: [
    {
      name: "button",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(BackGrid, {
  name: "BackGrid",
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
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(BackGrid2, {
  name: "BackGrid2",
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
  ],
});

Builder.registerComponent(BackGrid3, {
  name: "BackGrid3",
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
  ],
});

Builder.registerComponent(BackBox, {
  name: "BackBox",
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
  ],
});

Builder.registerComponent(Swiper3, {
  name: "Swiper3",
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
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(CloudAccordian, {
  name: "CloudAccordian",
  inputs: [
    {
      name: "button",
      type: "string",
      required: true,
    },
    {
      name: "description",
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

Builder.registerComponent(CloudGrid, {
  name: "CloudGrid",
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
  ],
});

Builder.registerComponent(CloudGrid2, {
  name: "CloudGrid2",
  inputs: [
    {
      name: "button",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(CloudGrid4, {
  name: "CloudGrid4",
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
  ],
});

Builder.registerComponent(CloudGrid3, {
  name: "CloudGrid3",
});

Builder.registerComponent(CloudSocial, {
  name: "CloudSocial",
});

Builder.registerComponent(OurClients, {
  name: "OurClients",
});

Builder.registerComponent(UiGrid, {
  name: "UiGrid",
  inputs: [
    {
      name: "button",
      type: "string",
      required: true,
    },
    {
      name: "text",
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

Builder.registerComponent(UiGrid2, {
  name: "UiGrid2",
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
  ],
});

Builder.registerComponent(Tab3, {
  name: "Tab3",
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
  ],
});

Builder.registerComponent(Swiper4, {
  name: "Swiper4",
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
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(UiUxBox, {
  name: "UiUxBox",
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
  ],
});

Builder.registerComponent(AboutBanner, {
  name: "AboutBanner",
  inputs: [
    {
      name: "description",
      type: "string",
      required: true,
    },
    {
      name: "subdescription",
      type: "string",
      required: true,
    },
    {
      name: "title",
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

Builder.registerComponent(AboutCount, {
  name: "AboutCount",
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
  ],
});

Builder.registerComponent(AboutAccordian, {
  name: "AboutAccordian",
  inputs: [
    {
      name: "title1",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(AboutLinks, {
  name: "AboutLinks",
  inputs: [
    {
      name: "title1",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(AboutBanner2, {
  name: "AboutBanner2",
  inputs: [
    {
      name: "heading",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(LatestThinking3, {
  name: "LatestThinking3",
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(LatestThinking4, {
  name: "LatestThinking4",
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});
