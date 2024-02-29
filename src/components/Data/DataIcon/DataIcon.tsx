import Image from "next/image";
import Link from "next/link";
import React from "react";
import Data1 from "@/public/database-2-fill.png";
import Data2 from "@/public/database-fill.png";
import Data3 from "@/public/lock-2-fill.png";
import Data4 from "@/public/macbook-fill.webp";

const DataIcon = () => {
  return (
    <section className="h-full w-full">
      <div className="m-4 md:m-6 ">
        <div className="md:grid md:grid-cols-4 md:gap-x-6 pb-10  ">

        <div className="pb-6 grid gap-y-4  md:gap-y-6 lg:pb-11 ">
          <div className=" pb-2 ">
            <Image src={Data1} alt="Data1" className="h-10 w-10 object-cover" />
          </div>
          <div className="">
            <h6 className="font-bold">Data Management</h6>
          </div>
          <div>
            <p className="text-lg text-gray">
              Expert in metadata, governance, and data storage - both{" "}
              <Link href="/" className="text-blue text-lg">
                data warehouse
              </Link>{" "}
              and lake,{" "}
              <Link href="/" className="text-blue text-lg">
                our data management consuktance
              </Link>{" "}
              optimizes storage costs, ensures compliance, and delivers seamless
              data.{" "}
            </p>
          </div>
        </div>
        <div className="grid gap-y-4 pb-6 md:pb-16 2xl:pb-16">
          <div className=" pb-2">
            <Image src={Data2} alt="Data2" className="h-10 w-10 object-cover" />
          </div>
          <div>
            <h6 className="font-bold">Data Integration</h6>
          </div>
          <div>
            <p className="text-lg text-gray">
              Merge data sources for billing, payroll, fraud detection,
              sentiment analysis, and more in one place. Our{" "}
              <Link href="/" className="text-blue text-lg">
                data integration developers
              </Link>{" "}
              simplify this via ETL/ELT tools and custom APIs.
            </p>
          </div>
        </div>
        <div className="grid gap-y-4 pb-6 md:pb-2 lg:pb-4 2xl:pb-11">
          <div className=" pb-2">
            <Image src={Data3} alt="Data2" className="h-10 w-10 object-cover" />
          </div>
          <div>
            <h6 className="font-bold">Data Security</h6>
          </div>
          <div>
            <p className="text-lg text-gray">
              Advance your data protection with {" "}
              <Link href="/" className="text-blue text-lg">
                cloud adoption
              </Link>{" "}
              , data encryption, and masking expertise. Our DevSecOps team
              streamlines security-as-code adoption to preempt breaches and cut
              resource costs.
            </p>
          </div>
        </div>
        <div className="grid gap-y-4 pb-10 lg:pb-12  2xl:pb-20">
          <div className=" pb-2">
            <Image src={Data4} alt="Data2" className="h-10 w-10 object-cover" />
          </div>
          <div>
            <h6 className="font-bold">Data Visulization</h6>
          </div>
          <div>
            <p className="text-lg text-gray">
              We Craft {" "}
              <Link href="/" className="text-blue text-lg">
                data visulization
              </Link>{" "}
              for easy, informed decision-making and sturdy ad-hoc analysis. You
              can also leverage our {" "}
              <Link href="/" className="text-blue text-lg">
                AR/VR development
              </Link>{" "}
              or voice assistants for effortless access to your data.
            </p>
          </div>
        </div>
        </div>
        <div>
            <button className="bg-blue text-white text-xl p-4" >Discusss Your Project With big data consultants <span className="text-black">&rarr; </span></button>
        </div>
      </div>
    </section>
  );
};

export default DataIcon;
