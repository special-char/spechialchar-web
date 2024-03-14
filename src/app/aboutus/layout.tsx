import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";

import { accordionItems } from "@/lib/constData";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar data={accordionItems} />
      {children}
      <Contact/>
    </>
  );
}
