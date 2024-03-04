import React from "react";

interface Props {}

const ThinkingBanner = (props: Props) => {
  return (
    <main className=" h-screen flex bg-blue flex-wrap items-center">
      <div className="text-white  pl-8 md:pl-48 pt-12">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold mb-4 md:mb-12 ">
          Thinking
        </h1>
        <div className="text-gray font-bold text-lg md:text-2xl lg:text-4xl">
          Useful. Relevant. Challenging.
        </div>
      </div>
    </main>
  );
};

export default ThinkingBanner;
