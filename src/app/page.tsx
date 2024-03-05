import Button from "@/components/Button";
import Icon from "@/public/icons/xmark.svg";
// import Contact from '../components/Contact/Contact'
import Blog from "@/components/Blog/Blog";
import HomeBanner from "@/components/HomeBanner";
import Card from "@/containers/Card";
import FAQS from "@/containers/FAQ";
import CollaboratorCards from "@/containers/CollaboratorCard";
import Navbar from "@/components/Navbar/Navbar";
import Latest from "@/containers/LatestProjectSec"
import ThinkingSection from "@/containers/LatestThinkingSec";
import Cardcomp1 from "@/containers/Card2";
import WebBanner2 from "@/components/WebBanner2";
import Contact from "@/components/Contact/Contact";
import Cardcomp from "@/components/Cardcomp";
import Clients from "@/containers/ClientsSlide";

export default function Home() {
	return (
		<>

			<HomeBanner />
			{/* <Contact/> */}
			<Card />
			<Cardcomp/>
			<Clients/>
			<FAQS/>
			{/* <WebBanner2/> */}

			
			 {/* <HomeBanner /> */}
			
			{/* <FAQS /> */}
			{/* <Card /> */}
			<CollaboratorCards />
			<Cardcomp1 /> 
			{/* <Contact /> */}
		</>
	);
}
