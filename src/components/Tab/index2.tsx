import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { howWeWorktabdata } from "@/lib/constData";
import { tabdataType } from "@/utils/types";
import { Button } from "../ui/button";
import Link from "next/link";
const Tab2 = ({ data }: tabdataType) => {
    return (

        <section className="">
            <div className="flex max-lg:flex-wrap md:gap-16 lg:gap-60 gap-10">
                <h2 className="text-heading1">{data.title1}</h2>
                <h3 className="text-primary text-subtitle1 md:pr-40">{data.title2}</h3>
            </div>
            <div className=" py-10">
                <Tabs defaultValue="Agile" className="">

                    <div className="flex justify-center max-sm:overflow-x-scroll ">
                        <TabsList>
                            <div className="flex  ">
                                {howWeWorktabdata.data.map((item) => {
                                    return (
                                        <>
                                            <div className="flex flex-col gap-5 text-heading3 border-b-2  text-s px-5   xl:px-16  md:px-9   ">
                                                <TabsTrigger className="pb-3 md:py-6" value={item.value}>
                                                    {item.trigger}
                                                </TabsTrigger>
                                            </div>
                                        </>

                                    );
                                })}

                            </div>
                        </TabsList>

                    </div>

                    {howWeWorktabdata.data.map((item) => {
                        return (
                            <TabsContent key={item.id} className="text-primary" value={item.value}>
                                <div className="flex text-left flex-wrap text-subtitle2 lg:p-0 px-5 gap-10">
                                    <div className=" lg:flex-1 lg:pr-20">{item.content}</div>
                                    <div className="font-bold  flex  gap-3 flex-col lg:flex-1">
                                        {item.title}
                                        {item.list.map((item) =>
                                        (
                                            <ul key={item.id} className="list-square">
                                                <li className="text-primary font-medium pr-16 ">{item.text}</li>
                                            </ul>
                                        )
                                        )}
                                    </div>
                                </div>
                            </TabsContent>

                        );
                    })}

                </Tabs>
            </div>
            <div><Link href={"https://thespecialcharacter.graphy.com/"}><Button variant="default" size="sm" className='px-8 md:px-20 py-7 text-base '>
                {data.button}
            </Button>
            </Link>
            </div>


        </section>
    );
};
export default Tab2;

