type PageData = {
  path: string;
  bgColor: string;
  color: string;
  hover: string;
};

import { ourThinkingData } from "@/lib/constData";

const data: PageData[] = [
  {
    path: "/",
    bgColor: "",
    color: "text-primary",
    hover: "hover:bg-background",
  },
  {
    path: "/services/web",
    bgColor: "",
    color: "text-background",
    hover: "hover:bg-darkblue",
  },
  {
    path: "/services/software-engineering",
    bgColor: "bg-primary",
    color: "text-background",
    hover: "hover:bg-primary",
  },
  {
    path: "/services/mobile",
    bgColor: "bg-gray",
    color: "text-primary",
    hover: "hover:bg-gray",
  },
  {
    path: "/services/saas",
    bgColor: "bg-primary",
    color: "text-background",
    hover: "hover:bg-primary",
  },
  {
    path: "/services/back-end",
    bgColor: "bg-darkblue1",
    color: "text-background",
    hover: "hover:bg-darkblue1",
  },
  {
    path: "/services/cloud-devops",
    bgColor: "bg-primary",
    color: "text-background",
    hover: "hover:bg-primary",
  },
  {
    path: "/services/uiux-design",
    bgColor: "bg-yellow",
    color: "text-primary",
    hover: "hover:bg-yellow",
  },
  {
    path: "/industry/elearning",
    bgColor: "bg-darkblue2",
    color: "text-background",
    hover: "hover:bg-darkblue2",
  },
  {
    path: "/industry/ecommerce",
    bgColor: "bg-gray1",
    color: "text-primary",
    hover: "hover:bg-gray1",
  },
  {
    path: "/company/about",
    bgColor: "",
    color: "text-primary",
    hover: "hover:bg-yellow",
  },
  {
    path: "/company/career",
    bgColor: "",
    color: "text-background",
    hover: "hover:bg-primary",
  },
  {
    path: "/company/how-we-work",
    bgColor: "",
    color: "text-background",
    hover: "hover:bg-primary",
  },
  {
    path: "/ourthinking",
    bgColor: "bg-specialblue",
    color: "text-background",
    hover: "hover:bg-specialblue",
  },
  {
    path: "/casestudies",
    bgColor: "bg-specialblue",
    color: "text-background",
    hover: "hover:bg-specialblue",
  },
];

const getColors = (pathname: string): PageData | undefined => {
  return data.find((x) => x.path === pathname);
};

export default getColors;
