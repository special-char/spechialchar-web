import Image from "next/image";
import Link from "next/link";
import React from "react";
import Aindroid from "@/public/aindroid.svg";
import Ios from "@/public/ios-1.svg";
import Cross from "@/public/cross_platforms.svg";

const MobileIcon = () => {
  // Define data for mobile platform sections
  const mobilePlatformData = [
    {
      title: "Android",
      icon: <Aindroid className="h-10 w-10 2xl:h-14 2xl:w-14 " />,
      description:
        "Using innovative concepts and data-driven insights, we craft high-performance apps that rank high on Google Play and transform business.",
      languages: ["Java", "Kotlin"],
    },
    {
      title: "IOS",
      icon: <Ios className="h-10 w-10 2xl:h-14 2xl:w-14" />,
      description:
        "We boast a legacy of great iOS apps for a range of business niches, which never leave the iPhones and iPads home screens of the delighted users.",
      languages: ["Swift", "Objective-C"],
    },
    {
      title: "Cross-platform",
      icon: <Cross className="h-10 w-10 2xl:h-14 2xl:w-14 " />,
      description:
        "Whatever the complexity, we bring the full benefit of cross-platform tech to the table, including lower costs, faster time to market and maximum reach",
      languages: ["React Native", "Flutter"],
    },
  ];

  return (
    <section>
      <div className="mx-4 md:mx-6 2xl:mx-0">
        <div className="pb-6">
          <div>
            <h6 className="font-bold pr-4 md:text-2xl lg:pb-2 2xl:text-3xl  ">
              Custom app solutions for any mobile platform
            </h6>
          </div>
          <div className="text-[13px] pr-2 text-slate-600 md:text-xl lg:pr-44 2xl:text-2xl 2xl:pr-[350px]">
            We develop consumer and enterprise apps of any complexity that can
            handle a rapidly growing user base. Many of our clients’ products
            have expanded from an{" "}
            <Link href="/Web" className="text-blue md:text-xl">
              MVP
            </Link>{" "}
            to a full-featured app with millions of users.
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 md:space-x-2">
          {/* Render mobile platform sections using map */}
          {mobilePlatformData.map((platform, index) => (
            <div key={index} className="flex flex-col gap-y-2 pb-10">
              <div className="pb-4">{platform.icon}</div>
              <div>
                <h5>{platform.title}</h5>
              </div>
              <div className="text-lg text-slate-500 md:pr-6 lg:pr-4">
                {platform.description}
              </div>
              <div className="font-bold text-lg flex gap-x-1">
                {platform.languages.map((language, index) => (
                  <React.Fragment key={index}>
                    <span>{language}</span>
                    {index !== platform.languages.length - 1 && (
                      <span className="text-blue font-bold">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="pt-10 2xl:pt-10">
            <button className="bg-blue p-2 px-8 text-lg text-white font-bold  py-4">
              Let’s build an app &rarr;
            </button>
          </div>
      </div>
    </section>
  );
};

export default MobileIcon;
