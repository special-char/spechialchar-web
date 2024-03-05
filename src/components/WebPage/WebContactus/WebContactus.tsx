import React from "react";

const WebContactus = () => {
  const WebData = [
    {
      title: "Progressive Web Apps (PWAs)",
      description:
        "Build a lightweight and platform-agnostic PWA in its latest iteration or revamp your existing web app into a PWA for impressive performance",
    },
    {
      title: "Accelerated Mobile Pages ",
      description:
        "Strip your web pages down to the basics so that they load superfast, delivering an unmatched user experience and improving your site visibility",
    },
    {
      title: "Single-page Applications ",
      description:
        "Dynamically updating content with no page refreshing, SPAs are a superb way to provide a faster and simple experience to users. Build your SPA with us",
    },
    {
      title: "Serverless architecture",
      description:
        "Get excellent scalability, improve your web app performance, and cut project costs by placing the underlying infrastructure in the cloud",
    },
  ];
  return (
    <section className="h-full w-full">
      <div className="mx-4 md:mx-6  2xl:mx-0">
        <div className="">
          <div className="text-base pb-3 md:text-[17px] md:pr-3 font-medium md:pb-6 lg:pr-44  2xl:text-2xl 2xl:pr-[510px]">
            Our mission is to take business like yours to the top. That &apos;s
            why ITRex is more than just a professional provider of custom web
            development services. Innovators at heart, we help you turn the
            latest tech innovations into exceptional business value. We help you
            outrun the competition.
          </div>
          <div className="2xl:flex 2xl:space-x-14  2xl:gap-y-3">

          {WebData.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-3  2xl:gap-y-3  ">
              <div className="">
                <span className="font-bold md:text-xl 2xl:text-2xl ">{item.title}</span>
              </div>
              <div className="2xl:pt-3">
                <span className="text-[13px]  leading-none text-slate-400 font-semibold md:text-lg lg:text-base  2xl:text-[16px] 2xl:pr-10 ">
                  {item.description}
                </span>
                {index !== WebData.length - 1 && (
                  <hr className="text-yellow  mt-5 2xl:hidden"></hr>
                )}
              </div>
            </div>
          ))}
          </div>
          <div className="pt-10 2xl:pt-24">
            <button className="bg-blue p-2 px-8 text-lg text-white font-bold  py-4">
              Contact us &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebContactus;
