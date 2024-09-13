"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { MarqueData } from "@/lib/constData";
import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type clientsProps = {
  title: string;
  image: string | StaticImport;
};

type Props = {
  className?: string;
  clients: clientsProps[];
  background?: string;
};

const BiClientCarousel = ({ className, clients, background }: Props) => {
  return (
    <div
      className={cn("py-24 flex items-center", {
        [`${className}`]: className,
      })}
      style={{ backgroundColor: background }}
    >
      <Marquee speed={100}>
        <div className="flex gap-x-[7.5rem] items-center">
          {clients &&
            clients.map((x, index) => (
              <div key={index}>
                <Image
                  src={x.image}
                  alt={x.title}
                  title={x.title}
                  height={70}
                  width={70}
                  className="object-cover"
                />
              </div>
            ))}
        </div>
      </Marquee>
    </div>
  );
};

export default BiClientCarousel;

// return (
//   <div
//     className={cn("py-24 flex items-center bg-specialblue", {
//       [`${className}`]: className,
//     })}
//   >
//     <Marquee speed={100}>
//       <div className="flex gap-x-[7.5rem] items-center">
//         {clients &&
//           clients.map((x) => (
//             <div key={x.title}>
//               <Image
//                 src={x.image}
//                 alt="clients"
//                 title={x.title}
//                 height={70}
//                 width={70}
//                 className="object-cover"
//               />
//             </div>
//           ))}
//       </div>
//     </Marquee>
//   </div>
// );
