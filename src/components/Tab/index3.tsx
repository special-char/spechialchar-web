import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { uiuxtabdata } from "@/lib/constData";
import { tabdataType } from "@/utils/types";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
const Tab3 = ({ data }: tabdataType) => {
  return (
    <section className="">
      <div className=" py-10">
        <Tabs defaultValue="Discover" className="">
          <div className="flex md:justify-center max-sm:overflow-x-scroll ">
            <TabsList>
              <div className="flex  ">
                {uiuxtabdata.data.map((item) => {
                  return (
                    <>
                      <div className="flex flex-col gap-5 justify-between border-b-2  text-heading4 px-5    md:px-8   ">
                        <Image
                          src={item.image}
                          alt="ui/ux-designer"
                          title="refresh-svg"
                          height={60}
                          width={60}
                          className="mx-auto"
                        />

                        <TabsTrigger
                          className="max-sm:mx-6 lg:px-3 pb-6"
                          value={item.value}
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

          {uiuxtabdata.data.map((item) => {
            return (
              <TabsContent
                key={item.id}
                className="text-primary text-subtitle3 lg:px-1"
                value={item.value}
              >
                {item.content}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
      <div>
        <Link href={"https://thespecialcharacter.graphy.com/"}>
          <Button
            variant="default"
            size="sm"
            className="px-8 md:px-20 py-7 text-base "
          >
            {data.button} &rarr;
          </Button>
        </Link>
      </div>
    </section>
  );
};
export default Tab3;
