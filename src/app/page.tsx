import CardComp from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import HomeAccordian from "@/components/HomeAccordian";
import HomeBanner from "@/components/HomeBanner";
import { Button } from "@/components/ui/button";
import HomeAccord from "@/container/HomeAccord";
import ProjectSec from "@/container/ThinkSec";
import {
  Card1,
  Cards,
  MarqueData,
  footerdata,
  homeAccordiandata,
  homeBannerdata,
} from "@/lib/constData";
import { PlusIcon } from "@radix-ui/react-icons";
import ThinkSec from "@/container/ProjectSec";
import Marque from "@/components/Marque";
import Collabrate from "@/components/Collabrate";
import ServiceBox from "@/components/ServiceBox";
import SectionBox from "@/container/ServiceBox";
import Service from "@/container/Service";

export default function Home() {
  return (
    <>
	<HomeBanner data={homeBannerdata}/>
	<Marque data={MarqueData}/>
	<HomeAccord/>
	<ProjectSec/>
	<ThinkSec/>
	<Collabrate/>
	<Footer data={footerdata}/>
	<SectionBox/>

<Service/>
    </>
  );
}
