import Button from "@/components/Button";
import Icon from "@/public/icons/xmark.svg";
import Contact from '../components/Contact/Contact'
import Blog from "@/components/Blog/Blog";
import HomeBanner from "@/components/HomeBanner";
import Card from "@/containers/Card";

export default function Home() {
	return (
		<>

			<HomeBanner />
			<Contact/>
			<Card />
		</>
	);
}
