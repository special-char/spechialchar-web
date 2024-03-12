import Link from 'next/link';
import React from 'react'
import './desktop.module.css'
import { ChevronDownIcon } from "@radix-ui/react-icons"
import {Header} from '@/utils/types'
import { accordionItems } from "@/lib/constData";


// const accordionItems = [
//   {
//     value: "item-1",
//     title: "Services",
//     content: ["Mobile", "Web", "Saas", "Back-End", "Cloud & Devops", "Ui & Ux"],
//   },
//   {
//     value: "item-2",
//     title: "Industry",
//     content: ["EdTech & eLearning", "Ecommerce"],
//   },
//   {
//     value: "item-3",
//     title: "Company",
//     content: ["About", "Career", "How Is Work"],
//   },
// ];


const DesktopDropdown = ({data}:Header) => {
  return (
    <div>
         <div className="hidden lg:block z-50">
        <ul className="flex justify-between items-center lg:gap-x-10 py-3  ">
          {accordionItems.data.map((dropdown, index) => (
            <div key={index} className="dropdown relative inline-block z-50 ">
              <Link
                href={`/${dropdown.title.toLowerCase()}`}
                className="dropbtn  text-white cursor-pointer hover:text-yellow-300 flex gap-x-2 text-lg "
              >
                {dropdown.title}
                <ChevronDownIcon className='hover:rotate-180 mt-1'/>
               
              </Link>
              <div className=' '>

              <li className="dropdown-content text-white  py-5 mt-0   hover:block hidden absolute  bg-black  w-screen  px-2  ">
               

                {dropdown.content.map((item, itemIndex) => (
                  <Link 
                    key={itemIndex}
                    href={`/${dropdown.title.toLowerCase()}/${dropdown.content[itemIndex].toLocaleLowerCase()}`}
                  >
                    <span className="a  hover:text-yellow-300  text-base ">
                      {item}
                    </span>
                  </Link>
                ))}
        
              </li>
              </div>
            </div>
          ))}
          <Link href="/ourthing">
            <ul className="text-white hover:text-yellow-300 text-lg ">Our Thing</ul>
          </Link>
          <Link href="/casestudio">
            <ul className="text-white hover:text-yellow-300 text-lg">Case Studio</ul>
          </Link>
          <div>
            <button className="bg-transparent border border-white py-1 px-4 text-white ">
              Contact Us
            </button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default DesktopDropdown