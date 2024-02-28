import React from "react";
import Image from "next/image";
import { Card } from "@/lib/constData";
import { CardType } from "@/utils/types";


const Cardcomp = ({ data }: { data: CardType[] }) => {
  return (
    <main className=" flex flex-wrap items-center overflow-x-auto ">
     
          
      {Card.card.map((item) => (
        <div key={item.id} className="w-full md:w-1/2  ">
          <div className="p-4">
            {/* <h3 className="text-lg font-semibold mb-2">Latest Project</h3> */}
            <Image
              src={item.url}
              className=" w-full hover:duration-300 hover:scale-105 aspect-video object-cover rounded-md"
              alt="image"
              height={450}
              width={600}
            />
            <h1 className="text-xl sm:text-2xl font-semibold mb-4">
              {item.title}
            </h1>
            <div className="text-gray-600 mb-4">{item.description}</div>
          </div>
        </div>
      ))}
    </main>
  );
};
export default Cardcomp;



