import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mobiletabdata, tabdata } from "@/lib/constData";
import { tabdataType } from "@/utils/types";
import Image from "next/image";
import { Button } from "../ui/button";
import style from "@/components/Tab/style.module.css";
import Link from "next/link";
const Tab1 = ({ data }: tabdataType) => {
    return (

        <section className="">
            <div className=" py-10">
                <Tabs defaultValue="Big Data" className="">

                    <div className="flex md:justify-center max-sm:overflow-x-scroll ">
                        <TabsList>
                            <div className="flex  ">
                                {mobiletabdata.data.map((item) => {
                                    return (
                                        <>
                                            <div className="flex flex-col gap-5  border-b-2  text-xl md:text-2xl  px-5 lg:text-4xl  xl:px-16  md:px-9   font-bold">
                                                <Image src={item.image} alt="" height={40} width={40} className="mx-auto" />

                                                <TabsTrigger className="pb-3 md:py-6" value={item.value}>{item.trigger}</TabsTrigger>
                                            </div>
                                        </>

                                    );
                                })}

                            </div>
                        </TabsList>

                    </div>

                    {mobiletabdata.data.map((item) => {
                        return (
                            <TabsContent className="text-black lg:text-2xl lg:px-1" value={item.value}>{item.content}</TabsContent>

                        );
                    })}

                </Tabs>
            </div><Link className="flex md:justify-start justify-center" href={"https://thespecialcharacter.graphy.com/"}><Button variant="default" size="sm" className='px-8 md:px-20 py-7 text-base '>
                {data.button}
            </Button>
            </Link>
        </section>
    );
};
export default Tab1;

