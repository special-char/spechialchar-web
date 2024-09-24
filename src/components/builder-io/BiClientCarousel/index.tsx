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
      className={cn("py-6 md:py-16 flex items-center", {
        [`${className}`]: className,
      })}
      style={{ backgroundColor: background }}
    >
      <Marquee speed={100}>
        <div className="flex gap-x-[7.5rem] items-center pr-[7.5rem]">
          {clients &&
            clients.map((x, index) => (
              <div key={index}>
                <Image
                  src={x.image}
                  alt={x.title}
                  title={x.title}
                  height={100}
                  width={100}
                />
              </div>
            ))}
        </div>
      </Marquee>
    </div>
  );
};

export default BiClientCarousel;
