type PageData = {
  path: string;
  bgColor: string;
  color: string;
  hover: string;
  bannerbg:string;
};

const data: PageData[] = [
  {
    path: "/",
    bgColor: "bg-transparent",
    color: "text-primary",
    hover: "hover:bg-background",
    bannerbg:""
  },
  {
    path: "/services/web",
    bgColor: "",
    color: "text-background",
    hover: "hover:bg-darkblue",
    bannerbg:"bg-darkblue"
  },
  {
    path: "/services/software-engineering",
    bgColor: "bg-primary",
    color: "text-background",
    hover: "hover:bg-primary",
    bannerbg:"bg-primary"
  },
  {
    path: "/services/mobile",
    bgColor: "bg-gray",
    color: "text-primary",
    hover: "hover:bg-gray",
    bannerbg:"bg-gray"
  },
  {
    path: "/services/saas",
    bgColor: "bg-primary",
    color: "text-background",
    hover: "hover:bg-primary",
    bannerbg:"bg-primary"
  },
  {
    path: "/services/back-end",
    bgColor: "bg-darkblue1",
    color: "text-background",
    hover: "hover:bg-darkblue1",
    bannerbg:"bg-darkblue1"
  },
  {
    path: "/services/cloud-devops",
    bgColor: "bg-primary",
    color: "text-background",
    hover: "hover:bg-primary",
    bannerbg:"bg-primary"
  },
  {
    path: "/services/uiux-design",
    bgColor: "bg-yellow",
    color: "text-primary",
    hover: "hover:bg-yellow",
    bannerbg:"bg-yellow"
  },
  {
    path: "/industry/elearning",
    bgColor: "bg-darkblue2",
    color: "text-background",
    hover: "hover:bg-darkblue2",
    bannerbg:"bg-darkblue2"
  },
  {
    path: "/industry/ecommerce",
    bgColor: "bg-gray1",
    color: "text-primary",
    hover: "hover:bg-gray1",
    bannerbg:"bg-gray1"
  },
  {
    path: "/company/about",
    bgColor: "",
    color: "text-primary",
    hover: "hover:bg-yellow",
    bannerbg:""
  },
  {
    path: "/company/career",
    bgColor: "",
    color: "text-background",
    hover: "hover:bg-primary",
    bannerbg:""
  },
  {
    path: "/company/how-we-work",
    bgColor: "",
    color: "text-background",
    hover: "hover:bg-primary",
    bannerbg:""
  },
  {
    path: "/ourthinking",
    bgColor: "bg-specialblue",
    color: "text-background",
    hover: "hover:bg-specialblue",
    bannerbg:""
  },
  {
    path: "/casestudies",
    bgColor: "bg-specialblue",
    color: "text-background",
    hover: "hover:bg-specialblue",
    bannerbg:""
  },
];

const getColors = (pathname: string): PageData | undefined => {
  return data.find((x) => x.path === pathname);
};

export default getColors;
