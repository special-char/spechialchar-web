import React from "react";
import Image from "next/image";
import { Card1 } from "@/lib/constData";
import { Card1Type } from "@/utils/types";


const ThinkCard = ({ data }: { data: Card1Type[] }) => {
  return (
    <main className=" flex flex-wrap items-center overflow-x-auto ">    
      {Card1.cards.map((item) => (
        <div key={item.id} className=" md:w-1/2  ">
          <div className="p-4">
            <Image
              src={item.url}
              className=" w-full hover:duration-300 hover:scale-105   rounded-md"
              alt="image"
              height={item.height}
              width={item.width}
            />
            <h1 className="text-4xl hover:text-blue sm:text-2xl font-bold mt-4 mb-2">
              {item.title}
            </h1>
            <div className="text-gray mb-4 text-2xl">{item.description}</div>
          </div>
        </div>
      ))}
    </main>
  );
};
export default ThinkCard;



