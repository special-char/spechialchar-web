import React from "react";

function WebBanner2() {
  return (
    <>
      <section
        className="h-full w-full"
        style={{
          backgroundImage: `url(/images/mobilebanner2.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-4  my-12 md:mx-6 md:my-36">
          <div className="text-white  ">
            <h6 className="text-4xl font-bold md:text-5xl 2xl:text-6xl">
              Changing the game <br />
              <span className="text-yellow-300">
                with advanced data solutions
              </span>
            </h6>
          </div>
        </div>
      </section>

    

      <section className="p-8 lg:p-8">
        <div className=" grid lg:grid-cols-4 font-bold xl:font-extrabold lg:text-xl xl:text-2xl gap-8 lg:p-8 lg:px-12 xl:px-36">
          <div className="text-blue lg:p-8">
            Enterprise-Grade Solutions (ERP, CRM, PLM, etc.)
          </div>
          <div className="border-t-2 text-blue border-t-orange lg:border-hidden lg:p-8">
            Logistics Solutions
          </div>
          <div className="border-t-2 text-blue border-t-orange lg:border-hidden lg:p-8">
            Data Analytics
          </div>
          <div className="border-y-2  pb-8 text-blue border-y-orange lg:border-hidden lg:p-8">
            eLearning
          </div>

          <div className="lg:border-t-2 lg:border-t-orange text-blue lg:p-8">
            SaaS Applications
          </div>
          <div className="border-t-2 border-t-orange text-blue lg:p-8">
            eHealth
          </div>
          <div className="border-t-2 border-t-orange text-blue lg:p-8">
            Omnichannel Ecommerce
          </div>
          <div className="border-t-2 pb-8 border-t-orange text-blue lg:p-8">
            FinTech Solutions
          </div>

          <div className="lg:border-t-2 lg:border-t-orange lg:p-8">
            Marketing Management
          </div>
          <div className="border-t-2 border-t-orange lg:p-8">
            Employee Productivity Apps
          </div>
          <div className="border-t-2 border-t-orange lg:p-8">
            Digital Sports
          </div>
          <div className="border-t-2 border-t-orange lg:p-8">
            Video Streaming
          </div>
        </div>
        <div className="pt-12 md:pt-8 lg:pb-12 lg:px-36">
          <button className="bg-blue p-2 px-16 md:px-6 md:text-xl font-bold text-lg  py-4 text-white">
            Discuss your web app development project &rarr;
          </button>
        </div>
      </section>

      
    </>
  );
}

export default WebBanner2;
