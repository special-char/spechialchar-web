import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/Accordian"
import { AccCard } from "@/lib/constData";
import { AccCardType } from "@/utils/types";

const Acc = ({ data }: AccCardType) => {

    return (
        <>

            {/* {AccCard.cards?.map((item) => {
                return (
                    // <Accordion className="bg-yellow text-black" key={item.id} type="single" collapsible>
                    //     <AccordionItem value={item.value}>
                    //         <AccordionTrigger>{item.question}</AccordionTrigger>
                    //         <AccordionContent>
                    //             {item.answer}
                    //         </AccordionContent>
                    //     </AccordionItem>
                    // </Accordion>
                    

                );

            })} */}
            <Accordion type="single" collapsible className="w-full bg-yellow text-4xl ">
                <AccordionItem value="item-1">
                    <AccordionTrigger><h1>Is it accessible?</h1></AccordionTrigger>
                    <AccordionContent>
                        <h3>Yes. It adheres to the WAI-ARIA design pattern.</h3>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger><h1>Is it styled?</h1></AccordionTrigger>
                    <AccordionContent>
                        <h3>Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.</h3>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger><h1>Is it animated?</h1></AccordionTrigger>
                    <AccordionContent>
                        <h3>Yes. It's animated by default, but you can disable it if you prefer.</h3>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>


    );
};
export default Acc;
