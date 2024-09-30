import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { footerdata } from "@/lib/constData";
import Contact from "@/components/Contact";
import { RenderBuilderContent } from "@/components/builder";
import { builder } from "@builder.io/sdk";

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
  twitter: {
    card: "summary_large_image",
    images: {
      url: `${base_url}/public/icons/logo.svg`,
      width: "100px",
      height: "100px",
    },
    title: "IT Training and Services in Ahmedabad",
    siteId: "1467726470533754880",
    description: "Join our practical courses to upskill your tech knowledge.",
    creator: "Yagnesh Modh",
    creatorId: "1467726470533754880",
  },
  openGraph: {
    title: "IT Training and Services in Ahmedabad",
    description: "Want to Upskill? Join our practical courses",
    images: { url: "", width: "", height: "" },
    url: "https://it.thespecialcharacter.com",
    siteName: "The Special Character",
    locale: "en-US",
    type: "website",
  },
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

// export const dynamic = "force-dynamic";
export const revalidate = 600;

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
