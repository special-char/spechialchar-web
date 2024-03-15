
import HomeAccord from "@/container/HomeAccord";
import ProjectSec from "@/container/ProjectSec";
import {
  MarqueData,
  homeBannerdata,
} from "@/lib/constData";
import ThinkSec from "@/container/ThinkSec";
import Marque from "@/components/Marque";
import Collabrate from "@/components/Collabrate";
import HomeBanner from "@/components/HomeBanner";


export default function Home() {
  return (
    <>
      <HomeBanner data={homeBannerdata} />
      <Marque data={MarqueData} />
      <HomeAccord />
      <ProjectSec />
      <Collabrate />
      <ThinkSec />
    </>
  );
}
