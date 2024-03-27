import Image from "next/image";
import React from "react";
import Rpa from "@/public.images/projectsection.webp";
import { cn } from "@/lib/utils";

const dataCase = [
  {
    title:
      " From the outset, our collaboration was grounded in innovation and adaptability.  Integrating first closely with the clients Center of Excellence, we helped them:",
    description: [
      {
        title: "Refine RPA solutions to cater to specific demands",
      },
      {
        title:
          "  Set up and enhance business processes to optimize data collection",
      },
      {
        title: "Build and improve pre-built models",
      },
    ],
  },

  {
    title:
      " From the outset, our collaboration was grounded in innovation and adaptability.  Integrating first closely with the clients Center of Excellence, we helped them:",
    description: [
      {
        title: "Refine RPA solutions to cater to specific demands",
      },
      {
        title:
          "  Set up and enhance business processes to optimize data collection",
      },
      {
        title: "Build and improve pre-built models",
      },
    ],
  },
  {
    title:
      " From the outset, our collaboration was grounded in innovation and adaptability.  Integrating first closely with the clients Center of Excellence, we helped them:",
    description: [
      {
        title: "Refine RPA solutions to cater to specific demands",
      },
      {
        title:
          "  Set up and enhance business processes to optimize data collection",
      },
      {
        title: "Build and improve pre-built models",
      },
    ],
  },
  {
    title:
      " From the outset, our collaboration was grounded in innovation and adaptability.  Integrating first closely with the clients Center of Excellence, we helped them:",
    description: [
      {
        title: "Refine RPA solutions to cater to specific demands",
      },
      {
        title:
          "  Set up and enhance business processes to optimize data collection",
      },
      {
        title: "Build and improve pre-built models",
      },
    ],
  },
  {
    title:
      " From the outset, our collaboration was grounded in innovation and adaptability.  Integrating first closely with the clients Center of Excellence, we helped them:",
    description: [
      {
        title: "Refine RPA solutions to cater to specific demands",
      },
      {
        title:
          "  Set up and enhance business processes to optimize data collection",
      },
      {
        title: "Build and improve pre-built models",
      },
    ],
  },
  {
    title:
      " From the outset, our collaboration was grounded in innovation and adaptability.  Integrating first closely with the clients Center of Excellence, we helped them:",
    description: [
      {
        title: "Refine RPA solutions to cater to specific demands",
      },
      {
        title:
          "  Set up and enhance business processes to optimize data collection",
      },
      {
        title: "Build and improve pre-built models",
      },
    ],
  },
];

const CaseBanner = ({
  className,
  order,
}: {
  className?: string;
  order?: string;
}) => {
  return (
    <div
      className={cn("grid grid-cols-2 bg-second  h-full w-full  ", {
        [`${className}`]: className,
      })}
    >
      <div
        className={cn("lg:order-2 ", {
          [`${order}`]: order,
        })}
      >
        <Image
          src={Rpa}
          alt="Rpa"
          title="Rpa"
          className="h-screen  w-full sticky top-0 object-fit"
        />
      </div>
      <div className="lg:order-1 px-36 py-10  ">
        <div>
          <h1 className="font-bold text-5xl">Our collaboration</h1>
        </div>

        {dataCase.map((x, index) => (
          <div key={index}>
            <div className="py-3 text-xl">
              <div className="flex flex-col gap-y-5  flex-nowrap">
                {x.title}
              </div>
            </div>
            <div>
              {x.description.map((y, subindex) => (
                <ul key={subindex} className="list-disc">
                  <li>{y.title}</li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseBanner;
