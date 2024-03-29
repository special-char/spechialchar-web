import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { accordionItems, footerdata } from "@/lib/constData";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Special Character",
  description: "We are welcome to our site The special character",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Contact />
        <Footer data={footerdata} />
      </body>
    </html>
  );
}
