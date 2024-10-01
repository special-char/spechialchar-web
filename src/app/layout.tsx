import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { footerdata } from "@/lib/constData";
import Contact from "@/components/Contact";
import { RenderBuilderContent } from "@/components/builder";
import { builder } from "@builder.io/sdk";
import {
  BASE_URL,
  SITE_NAME,
  TWITTER_CREATER,
  TWITTER_SITE_ID,
} from "@/utils/constant";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const inter = Inter({ subsets: ["latin"] });

type SetionProps = {
  urlPath: string;
};

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const metadata: Metadata = {
  // title: {
  //   default: "Home Page | The Special Character",
  //   template: "%s | The Special Character",
  // },
  // description:
  //   "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
  keywords: ["IT Courses", " Placement Assurance", "Practical Training"],
  publisher: "Yagnesh Modh",
  authors: [
    {
      name: "The Special Character",
      url: "https://https://thespecialcharacter.com/",
    },
  ],
  creator: "Yagnesh Modh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "IT Training and Services in Ahmedabad",
  //   site: SITE_NAME,
  //   siteId: TWITTER_SITE_ID,
  //   description: "Join our practical courses to upskill your tech knowledge.",
  //   creator: TWITTER_CREATER,
  //   creatorId: TWITTER_SITE_ID,
  // },
  // openGraph: {
  //   title: "IT Training and Services in Ahmedabad",
  //   description: "Want to Upskill? Join our practical courses",
  //   url: BASE_URL,
  //   siteName: SITE_NAME,
  //   locale: "en-US",
  //   type: "website",
  // },
};

const FooterSection = async ({ urlPath }: SetionProps) => {
  const builderModelName = "footer-section";

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath,
      },
    })
    .toPromise();

  return <RenderBuilderContent content={content} model={builderModelName} />;
};

const ContactFormSection = async ({ urlPath }: SetionProps) => {
  const builderModelName = "contact-form";

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath,
      },
    })
    .toPromise();

  return <RenderBuilderContent content={content} model={builderModelName} />;
};

export const dynamic = "force-dynamic";
// export const revalidate = 600;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const urlPath = "/";
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ContactFormSection urlPath={urlPath} />
        <FooterSection urlPath={urlPath} />
        {/* <Contact />
        <Footer data={footerdata} /> */}
      </body>
    </html>
  );
}
