

// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { PlusIcon } from "@radix-ui/react-icons";
import { Header } from "@/utils/types";
import { accordionItems } from "@/lib/constData";
import { SwiperServices } from "@/lib/constData";
import Navbar from "@/components/Navbar";
import Swiper1 from "@/components/Swiper";

export default function Home() {
  return (
    <>
	<Navbar data={accordionItems}/>
	<Swiper1 data={SwiperServices}/>
    </>
  );

}


