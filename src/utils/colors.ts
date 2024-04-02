type PageData = {
  path: string;
  bgColor: string;
  color: string;
};

const data: PageData[] = [
  {
    path: "/",
    bgColor: "",
    color: "text-primary",
  },
  {
    path: "/services/web",
    bgColor: "",
    color: "text-yellow",
  },
];

const getColors = (pathname: string): PageData | undefined => {
  return data.find((x) => x.path === pathname);
};

export default getColors;
