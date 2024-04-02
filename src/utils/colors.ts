type PageData = {
  page: string;
  bgColor: string;
  color: string;
  color1: string;
  color2: string;
};

const data: PageData[] = [
  {
    page: "home",
    bgColor: "",
    color: "text-primary",
    color1: "text-yellow",
    color2: "text-background",
  },
  {
    page: "services",
    bgColor: "",
    color: "text-primary",
    color1: "text-yellow",
    color2: "text-background",
  },
];

const getColors = (pageName: string): PageData | undefined => {
  return data.find((x) => x.page === pageName);
};

export default getColors;
