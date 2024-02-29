import React from 'react';

type Props = {};

const CaseBanner = (props: Props) => {
  return (
    <div className="bg-orange p-8 md:p-16 lg:p-24 xl:p-32 2xl:p-48 ">
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl text-black ">
        Our Latest<br />Challenges
      </h1>

    </div>
  );
};

export default CaseBanner;
