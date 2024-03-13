
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import HomeAccord from "@/container/HomeAccord";
import ProjectSec from "@/container/ProjectSec";
import {
  BgBanner,
  Card1,
  Cards,
  MarqueData,
  footerdata,
  homeAccordiandata,
  homeBannerdata,
} from "@/lib/constData";
import { PlusIcon } from "@radix-ui/react-icons";
import ThinkSec from "@/container/ThinkSec";
import Marque from "@/components/Marque";
import Collabrate from "@/components/Collabrate";
import ServiceBox from "@/components/ServiceBox";
import SectionBox from "@/container/ServiceBox";
import Service from "@/container/Service";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import MobilePage from "@/components/MobilePage";

export default function Home() {
  return (
    <>
      {/* <HomeBanner data={homeBannerdata}/>
      <Marque data={MarqueData}/>
      <HomeAccord/>
      <ProjectSec/>
      <Collabrate/>
      <ThinkSec/> */}
      {/* <SectionBox/>
      <Service/> */}
      <MobilePage/>
    </>
  );
}


