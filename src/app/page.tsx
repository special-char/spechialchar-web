import Button from "@/components/Button";
import Icon from "@/public/icons/xmark.svg";
import Contact from '../components/Contact/Contact'
import Blog from "@/components/Blog/Blog";
import CollaboratorCards from "@/containers/CollaboratorCard";
import Cardcomp from "@/components/Cardcomp";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import Cards from "@/containers/Card";
import FAQS from "@/containers/FAQ";
import Latest from "@/containers/LatestProjectSec"
import ThinkingSection from "@/containers/LatestThinkingSec";

export default function Home() {
	return (
		<>
			<HomeBanner />
			<Blog />
			<CollaboratorCards />
			{/* <Contact /> */}
			<Latest/>
			<FAQS />
			<ThinkingSection/>
			{/* <Footer /> */}
			{/* <Cardcomp/> */}
		</>
	);
}
