import Button from "@/components/Button";
import Icon from "@/public/icons/xmark.svg";
// import Contact from '../components/Contact/Contact'
import Blog from "@/components/Blog/Blog";
import HomeBanner from "@/components/HomeBanner";
import Card from "@/containers/Card";
import FAQS from "@/containers/FAQ";
import CollaboratorCards from "@/containers/CollaboratorCard";
import Navbar from "@/components/Navbar/Navbar";
import Latest from "@/containers/LatestProjectSec";
import ThinkingSection from "@/containers/LatestThinkingSec";
import Cardcomp1 from "@/containers/Card2";
import Cardcomp from "@/components/Cardcomp";
import ThinkCard from "@/components/ThinkCard";
import ProjectSection from "@/containers/LatestProjectSec";

export default function Home() {
	return (
		<>
			<HomeBanner />
		 	<FAQS />
			<ProjectSection/>
			 <CollaboratorCards />
			<ThinkingSection/>
			
		</>
	);
}
