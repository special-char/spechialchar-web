import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mobiletabdata } from "@/lib/constData";
import { tabdataType } from "@/utils/types";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
type Props = {
  
  button: string;
  
}
const Tab1 = (props:Props) => {
  return (
    <section>
      <Tabs defaultValue="BigData">
        <TabsList className="flex  max-sm:overflow-x-scroll ">
          {mobiletabdata.data.map((item) => {
            return (
              <TabsTrigger
                key={item.id}
                className="flex flex-col gap-5  justify-between  text-heading4 px-5  py-5  lg:px-16 md:px-8   "
                value={item.value}
              >
                <img
                  src={item.image}
                  alt="tab-items"
                  title="tabs-svgs"
                  height={40}
                  width={40}
                  className="mx-auto"
                />
                {item.trigger}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {mobiletabdata.data.map((item) => {
          return (
            <TabsContent
              key={item.id}
              className="text-primary lg:text-subtitle3 lg:px-1"
              value={item.value}
            >
              {item.content}
            </TabsContent>
          );
        })}
      </Tabs>

      <div className="pt-10">
        <Link className="" href={"#Contact"}>
          <Button className="">
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
             {props.button}

            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};
export default Tab1;
