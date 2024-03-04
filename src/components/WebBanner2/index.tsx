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
              <span className="text-yellow-300">with advanced data solutions</span>
            </h6>
          </div>
        </div>
      </section>

      <div className="bg-yellow p-8 lg:p-12">
        <div className="lg:px-2 lg:py-4 lg:pr-60">
          <p className="font-medium  text-xl">
            As a top-tier provider of custom web application development
            services to enterprises, ITRex can fulfill any of your digital
            needs, whatever your industry is. Create your innovative and
            high-performing web application using the right front and back-end
            technology to get results quickly. Our web apps deliver the utmost
            usability, scalability, and cross-browser compatibility, along with
            a competitive edge to drive your growth.
          </p>
        </div>
      </div>

      {/* <section className="">
        <div className="bg-black text-white grid gap-4">
          <div className="flex flex-col gap-4 text-blue-500 ">
            <span className="border-b-2 border-b-orange-500">Lorem ipsum dolor sit amet.</span>
            <span className="border-b-2 border-b-orange-500">Lorem ipsum dolor sit amet.</span>
            <span className="border-b-2 border-b-orange-500">Lorem ipsum dolor sit amet.</span>
            <span className="border-b-2 border-b-orange-500">Lorem ipsum dolor sit amet.</span>
          </div>
          <div className="flex flex-col gap-4 text-blue-500">
          <span className="border-b-2 border-b-orange-500">Lorem ipsum dolor sit amet.</span>
          <span className="border-b-2 border-b-orange-500">Lorem ipsum dolor sit amet.</span>
          <span className="border-b-2 border-b-orange-500">Lorem ipsum dolor sit amet.</span>
          <span className="border-b-2 border-b-orange-500">Lorem ipsum dolor sit amet.</span>
          </div>
          <div className="flex flex-col gap-4">
          <span className="border-b-2 border-b-orange-500">Lorem ipsum dolor sit amet.</span>
          <span className="border-b-2 border-b-orange-500">Lorem ipsum dolor sit amet.</span>
          <span className="border-b-2 border-b-orange-500">Lorem ipsum dolor sit amet.</span>
          <span className="border-b-2 border-b-orange-500">Lorem ipsum dolor sit amet.</span>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default WebBanner2;


