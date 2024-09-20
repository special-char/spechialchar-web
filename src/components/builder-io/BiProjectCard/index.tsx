import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ProjectCardProps = {
  id: number;
  image: string | StaticImport;
  title: string;
  description: string;
};

type Props = {
  projects: ProjectCardProps[];
};

export function BiProjectCard({ projects }: Props) {
  return (
    <div>
      <div className="">
        <Carousel opts={{ align: "center" }} className="relative">
          <div className=" flex z-20 gap-x-10">
            <CarouselContent className="w-full">
              {projects &&
                projects.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="group sm:basis-2/5 md:basis-2/5"
                  >
                    <div className=" border-2 z-10 overflow-hidden border-none">
                      <Image
                        src={item?.image}
                        className="w-full aspect-video object-cover rounded-md group-hover:transform group-hover:duration-75 group-hover:scale-110"
                        alt="image"
                        title={item?.title}
                        height={550}
                        width={700}
                      />
                    </div>
                    <Link href={`/casestudies/${item.id}`} title={item.title}>
                      <h3 className="text-heading6 group-hover:text-blue font-bold mb-2 mt-4 ">
                        {item.title}
                      </h3>
                      <p className="text-primary text-subtitle2">
                        {item.description}
                      </p>
                    </Link>
                  </CarouselItem>
                ))}
            </CarouselContent>
          </div>
          <CarouselPrevious className="bg-blue h-8 sm:h-12 w-8 sm:w-12 max-sm:translate-y-48 left-0 sm:translate-x-[50%]" />
          <CarouselNext className="bg-blue h-8 sm:h-12 w-8 sm:w-12 max-sm:translate-y-48 max-sm:left-10 sm:right-0 sm:translate-x-[-50%]" />
        </Carousel>
      </div>
    </div>
  );
}

export default BiProjectCard;
