import { CareerPage3dataType } from "@/utils/types";
import React from "react";

const CareerPage3 = ({ data }: CareerPage3dataType) => {
  return (
    <section className="font-bold">
      <div className="mb-4">
        <h3 className="text-4xl ">{data.title}</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6">
        {data.data.map((x) => (
          <div key={x.id}>
            {/* <Svg fill="yellow" /> */}
            {x.src}
            <h4 className="text-2xl">
              {x.description}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerPage3;

// {
//   MarqueData.map((x) => (
//     <div key={x.id}>
//       <Image src={x.src} alt="image" height={100} width={220} />
//     </div>
//   ));
// }
