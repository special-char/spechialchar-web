import HomeAccordian from "@/components/HomeAccordian";
import { Button } from "@/components/ui/button";
import { homeAccordiandata } from "@/lib/constData";
import Link from "next/link";

const AccCards = () => {
  return (
    <>
      <div className="bg-yellow-300 max-sm:px-4 px-container py-12 md:py-24  ">
        <h1 className="font-bold  text-2xl md:text-4xl lg:text-5xl flex md:justify-start justify-center">
          How we can help you
        </h1>
        <HomeAccordian />
        <Link className="flex md:justify-start justify-center" href={"https://thespecialcharacter.graphy.com/"}>
          <Button
            variant="default"
            size="sm"
            className="px-16 md:px-20 py-7 text-base "
          >
            Discuss my Project
          </Button>
        </Link>
      </div>
    </>
  );
};
export default AccCards;
