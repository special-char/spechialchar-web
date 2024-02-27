import React from "react";
import Image from "next/image";
import { Card } from "@/lib/constData";
import { CardType } from "@/utils/types";


const Cardcomp = ({ data }: { data: CardType[] }) => {
  return (
    <main className=" flex flex-wrap items-center overflow-x-auto h-screen">
     
          
      {Card.card.map((item) => (
        <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <div className=" p-4">
            {/* <h3 className="text-lg font-semibold mb-2">Latest Project</h3> */}
            <Image
              src={item.url}
              className="hover:duration-300 hover:scale-105 aspect-video object-cover m-2 rounded-md"
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



