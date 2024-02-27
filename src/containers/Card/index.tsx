// import Cardcomp from "@/components/Cardcomp";
// import { Card } from "@/lib/constData";


// // const Cards= () => {
// // 	return <Cardcomp data={Card}/>
// // };

// export default Cards;
import React from "react";
import Image from "next/image";

import { CardType } from "@/utils/types";

const Cardcomp = ({ data }: { data: CardType[] }) => {
  return (
    <main className="bg-gray-200 flex items-center  h-screen ">
      {data.map((card) => (
        <div key={card.id} className="max-w-md w-full bg-white p-10 rounded shadow-md">
          <h3>Latest Project</h3>
          <Image
            src={card.url}
            className="hover:duration-300 hover:scale-105 aspect-3/4 object-cover m-2 rounded-md"
            alt="image"
            height={350}
            width={450}
          />
          <h1 className="text-2xl font-semibold mb-4"> <title></title></h1>
          <div className="text-gray-600 mb-4 ">  Self-service analytics enabled by AI algorithms empowers 3 million
          users with instant actionable insights.</div>
        </div>
      ))}
    </main>
  );
};

export default Cardcomp;
