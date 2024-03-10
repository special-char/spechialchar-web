import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";




  const accordionItems = [
    { value: 'item-1', title: 'Services', content: ['Mobile', 'Web', 'Saas','Back-End','Cloud & Devops','Ui & Ux'] },
    { value: 'item-2', title: 'Industry', content: ['EdTech & eLearning', 'Ecommerce'] },
    { value: 'item-3', title: 'Company', content: ['About', 'Career', 'How Is Work'] }
  ];

const DesktopDropdown = () => {
  return (
    <div>
        <Accordion type='single'>
            <AccordionItem value='1'>
                <AccordionTrigger>Services</AccordionTrigger>
                <AccordionContent>
                    <ul>
                        <li>hello</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  )
}

export default DesktopDropdown