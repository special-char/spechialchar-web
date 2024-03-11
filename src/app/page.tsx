

// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { PlusIcon } from "@radix-ui/react-icons";
import { Header } from "@/utils/types";
import { accordionItems } from "@/lib/constData";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
	<Navbar data={accordionItems}/>
    </>
  );

}


