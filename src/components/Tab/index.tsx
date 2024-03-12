import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { tabdata } from "@/lib/constData";
import { tabdataType } from "@/utils/types";
import Image from "next/image";
import { Button } from "../ui/button";

const Tab = ({ data }: tabdataType) => {
    return (

        <div className="lg:px-52 px-5 lg:py-12 py-16">
            <div className="lg:py-12 py-10">
                <Tabs defaultValue="account" className="">

                    <div className="flex md:justify-center items-center max-sm:overflow-x-scroll ">
                        <TabsList>
                            <div className="flex  ">
                                {tabdata.data.map((item) => {
                                    return (
                                        <>
                                            <div className="flex flex-col ">
                                                <Image src={item.image} alt="" height={40} width={40} className="mx-auto" />

                                                <TabsTrigger value={item.value}>{item.trigger}</TabsTrigger>
                                            </div>
                                        </>

                                    );
                                })}

                            </div>
                        </TabsList>

                    </div>

                    {tabdata.data.map((item) => {
                        return (
                            <TabsContent value={item.value}>{item.content}</TabsContent>

                        );
                    })}

                </Tabs>
            </div><div className="flex md:justify-start justify-center"><Button variant="default" size="sm" className='px-8 md:px-20 py-7 text-base '>
                {data.button}
            </Button>
            </div>
        </div>
    );
};
export default Tab;

