import CardComp from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import HomeAccordian from "@/components/HomeAccordian";
import HomeBanner from "@/components/HomeBanner";
import { Button } from "@/components/ui/button";
import HomeAccord from "@/container/HomeAccord";
import ProjectSec from "@/container/ProjectSec";
import {
  Card1,
  Cards,
  MarqueData,
  banner,
  banner1,
  footerdata,
  homeAccordiandata,
  homeBannerdata,
} from "@/lib/constData";
import { PlusIcon } from "@radix-ui/react-icons";
import ThinkSec from "@/container/ThinkSec";
import Marque from "@/components/Marque";
import Banner from "@/container/Banner";

export default function Home() {
  return (
    <>
      <Banner data={banner} className="" />
      <HomeBanner data={homeBannerdata} />
      <Marque data={MarqueData} />
      <ProjectSec />

      <HomeAccord />
      <Banner data={banner1} />
      <ThinkSec />
      <Footer data={footerdata} />
    </>
  );
}
