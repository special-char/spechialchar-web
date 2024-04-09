type PageData = {
  path: string;
  bgColor: string;
  color: string;
  hover: string;
  fillcolor: string;
};

const data: PageData[] = [
  {
    path: "/",
    bgColor: "",
    color: "text-primary",
    hover: "hover:bg-background",
    fillcolor: "black",
  },
  {
    path: "/services/web",
    bgColor: "",
    color: "text-background",
    hover: "hover:bg-darkblue",
    fillcolor: "white",
  },
  {
    path: "/services/software-engineering",
    bgColor: "bg-primary",
    color: "text-background",
    hover: "hover:bg-primary",
    fillcolor: "white",
  },
  {
    path: "/services/mobile",
    bgColor: "bg-gray",
    color: "text-primary",
    hover: "hover:bg-gray",
    fillcolor: "black",
  },
  {
    path: "/services/saas",
    bgColor: "bg-primary",
    color: "text-background",
    hover: "hover:bg-primary",
    fillcolor: "white",
  },
  {
    path: "/services/back-end",
    bgColor: "bg-darkblue1",
    color: "text-background",
    hover: "hover:bg-darkblue1",
    fillcolor: "white",
  },
  {
    path: "/services/cloud-devops",
    bgColor: "bg-primary",
    color: "text-background",
    hover: "hover:bg-primary",
    fillcolor: "white",
  },
  {
    path: "/services/uiux-design",
    bgColor: "bg-yellow",
    color: "text-primary",
    hover: "hover:bg-yellow",
    fillcolor: "black",
  },
  {
    path: "/industry/elearning",
    bgColor: "bg-darkblue2",
    color: "text-background",
    hover: "hover:bg-darkblue2",
    fillcolor: "white",
  },
  {
    path: "/industry/ecommerce",
    bgColor: "bg-gray1",
    color: "text-primary",
    hover: "hover:bg-gray1",
    fillcolor: "black",
  },
  {
    path: "/company/about",
    bgColor: "",
    color: "text-primary",
    hover: "hover:bg-yellow",
    fillcolor: "black",
  },
  {
    path: "/company/career",
    bgColor: "",
    color: "text-background",
    hover: "hover:bg-primary",
    fillcolor: "white",
  },
  {
    path: "/company/how-we-work",
    bgColor: "",
    color: "text-background",
    hover: "hover:bg-primary",
    fillcolor: "white",
  },
  {
    path: "/ourthinking",
    bgColor: "bg-specialblue",
    color: "text-background",
    hover: "hover:bg-specialblue",
    fillcolor: "white",
  },
  {
    path: "/casestudies",
    bgColor: "bg-specialblue",
    color: "text-background",
    hover: "hover:bg-specialblue",
    fillcolor: "white",
  },
];

const getColors = (pathname: string): PageData | undefined => {
  return data.find((x) => x.path === pathname);
};

export default getColors;
