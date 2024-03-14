import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import HomeAccord from "@/container/HomeAccord";
import ProjectSec from "@/container/ProjectSec";
import {
  BgBanner,
  Card1,
  Cards,
  CareerPage3data,
  MarqueData,
  MobileSwiperData,
  SwiperServices,
  accordionItems,
  careerbannerdata,
  careerpage2data,
  careerpage4data,
  careerpage5data,
  careerpage6data,
  careerpage7data,
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
import CareerBanner from "@/components/CareerBanner";
import CareerPage2 from "@/components/CareerPage2";
import CareerPage3 from "@/components/CareerPage3";
import CareerPage4 from "@/components/CareerPage4";
import CareerPage5 from "@/components/CareerPage5";
import CareerPage6 from "@/components/CareerPage6";
import CareerPage7 from "@/components/CareerPage7";

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
      {/* <MobilePage/> */}
      <CareerBanner data={careerbannerdata}/>
      <CareerPage2 data={careerpage2data}/>
      <CareerPage3 data={CareerPage3data}/>
      <CareerPage4 data={careerpage4data}/>
      <CareerPage5 data={careerpage5data}/>
      <CareerPage6 data={careerpage6data}/>
      <CareerPage7 data={careerpage7data}/>
      <HomeBanner data={homeBannerdata} />
      <Marque data={MarqueData} />
      <HomeAccord />
      <ProjectSec />
      <Collabrate />
      <ThinkSec />
    </>
  );
}
