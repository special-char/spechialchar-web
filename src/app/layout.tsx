import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { footerdata } from "@/lib/constData";
import Contact from "@/components/Contact";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Home Page | The Special Character",
    template: "%s | The Special Character",
  },
  description:
    "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
  keywords: ["IT Courses", " Placement Assurance", "Practical Training"],
  publisher: "Yagnesh Modh",
  authors: [
    {
      name: "The Specail Char",
      url: "https://https://thespecialcharacter.com/",
    },
  ],
  creator: "Yagnesh Modh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      noimageindex: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Training and Services in Ahmedabad",
    siteId: "1467726470533754880",
    description: "Join our practical courses to upskill your tech knowledge.",
    creator: "Yagnesh Modh",
    creatorId: "1467726470533754880",
  },
  openGraph: {
    title: "IT Training and Services in Ahmedabad",
    description: "Want to Upskill? Join our practical courses",
    url: "https://thespecialcharacter.com",
    siteName: "The Special Character",
    locale: "en-US",
    type: "website",
  },
};

const idJsonObject = {
  "@context": "http://schema.org",
  "@type": "Person",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Seattle",
    addressRegion: "WA",
    postalCode: "98052",
    streetAddress: "20341 Whitworth Institute 405 N. Whitworth"
  },
  colleague: [
    "http://www.xyz.edu/students/alicejones.html",
    "http://www.xyz.edu/students/bobsmith.html"
  ],
  email: "mailto:jane-doe@xyz.edu",
  image: "janedoe.jpg",
  jobTitle: "Professor",
  name: "Jane Doe",
  telephone: "(425) 123-4567",
  url: "http://www.janedoe.com"
};
const idJsonLd = { __html: JSON.stringify(idJsonObject) }

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
