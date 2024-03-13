import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { tabdata } from "@/lib/constData";
import { tabdataType } from "@/utils/types";
import Image from "next/image";
import { Button } from "../ui/button";

const Tab = ({ data }: tabdataType) => {
    return (

        <section className="">
            <div className="lg:py-12 py-10">
                <Tabs defaultValue="Turnkey Projects" className="">

                    <div className="flex  max-sm:overflow-x-scroll ">
                        <TabsList>
                            <div className="flex  ">
                                {tabdata.data.map((item) => {
                                    return (
                                        <>
                                            <div className="flex flex-col gap-3 border-b-2   text-xl md:text-2xl px-5 lg:text-4xl  lg:px-16 md:px-8   font-bold">
                                                <Image src={item.image} alt="" height={40} width={40} className="mx-auto" />

                                                <TabsTrigger className="pb-3 md:py-10 " value={item.value}>{item.trigger}</TabsTrigger>
                                            </div>
                                        </>

                                    );
                                })}

                            </div>
                        </TabsList>

                    </div>

                    {tabdata.data.map((item) => {
                        return (
                            <TabsContent className="text-black lg:text-2xl lg:px-1" value={item.value}>{item.content}</TabsContent>

                        );
                    })}

                </Tabs>
            </div><div className="flex md:justify-start justify-center"><Button variant="default" size="sm" className='px-8 md:px-20 py-7 text-base '>
                {data.button}
            </Button>
            </div>
        </section>
    );
};
export default Tab;

