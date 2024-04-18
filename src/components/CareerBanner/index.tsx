import { CareerBannerdataType } from "@/utils/types";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
type Props = {
  title1: string
  title2: string
  title3: string
  title4: string
  button: string
  url: string
}
const CareerBanner = (props: Props) => {
  return (
    <section
      className="h-screen w-full  flex items-center justify-center"
      style={{
        backgroundImage: `url(${props.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-background text-center p-4 sm:p-0">
        <div className="flex flex-col gap-10 py-4">
          <h1 className="text-heading1 tracking-tight text-yellow ">
            {props.title1}
            <br></br>
            {props.title2}
          </h1>
          <h2 className="text-subtitle1">
            {props.title3}
            <br />
            {props.title4}
          </h2>
          <div>
            <Link title="Open Positions" href={"/company/career#TableDemo"}>
              <Button className="">{props.button}</Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerBanner;
