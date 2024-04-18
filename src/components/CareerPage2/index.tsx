import Image from "next/image";
import React from "react";
type Props = {
  title: string
  src: string
  des1: string
  des2: string
  des3: string
}

const CareerPage2 = (props: Props) => {
  return (
    <section className="">
      <div className="md:grid grid-cols-2 gap-6 lg:gap-x-16">
        <div className="">
          <Image src={props.src} alt="image" title="who-we-are" height={600} width={600} />
        </div>
        <div className="mt-8">
          <h2 className="text-heading1">{props.title}</h2>
          <div className="mt-8  flex flex-col gap-8 text-subtitle1">
            <p>{props.des1}</p>
            <p>{props.des2}</p>
            <p>{props.des3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPage2;
