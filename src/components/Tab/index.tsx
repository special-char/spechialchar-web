import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabdata } from "@/lib/constData";
import { tabdataType } from "@/utils/types";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Tab = ({ data }: tabdataType) => {
  return (
    <section className="">
      <div className="lg:py-12 py-10">
        <Tabs defaultValue="Turnkey Projects" className="">
          <div className="flex  max-sm:overflow-x-scroll ">
            <TabsList role="tab" aria-checked="true">
              <div className="flex  ">
                {tabdata.data.map((item) => {
                  return (
                    <>
                      <div className="flex flex-col gap-3 border-b-2  justify-between  text-heading4 px-5   lg:px-16 md:px-8   ">
                        <Image
                          src={item.image}
                          alt="tab-items"
                          title="tabs-svgs"
                          height={40}
                          width={40}
                          className="mx-auto"
                        />

                        <TabsTrigger
                          className="pb-3 md:py-10 "
                          value={item.value}
                          role="button"
                        >
                          {item.trigger}
                        </TabsTrigger>
                      </div>
                    </>
                  );
                })}
              </div>
            </TabsList>
          </div>

          {tabdata.data.map((item) => {
            return (
              <TabsContent
                key={item.id}
                role="tablist"
                className="text-primary lg:text-subtitle3 lg:px-1"
                value={item.value}
              >
                {item.content}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>

      <Link className="py-10" href={"https://thespecialcharacter.graphy.com/"}>
        <Button className="">
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            {data.button} <span>{data.button2} </span>
            <span>&rarr;</span>
          </span>
        </Button>
      </Link>
    </section>
  );
};
export default Tab;
