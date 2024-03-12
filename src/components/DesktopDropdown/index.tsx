import Link from 'next/link';
import React from 'react'
import './desktop.module.css'
import { ChevronDownIcon } from "@radix-ui/react-icons"
import {Header} from '@/utils/types'
import { accordionItems } from "@/lib/constData";




const DesktopDropdown = ({data}:Header) => {
  return (
    <div>
         <div className="hidden lg:block z-50">
        <ul className="flex justify-between items-center lg:gap-x-10   ">
          {accordionItems.data.map((dropdown, index) => (
            <div key={index} className="dropdown hover:block relative inline-block z-50 " >
              <Link
                href={`/${dropdown.title.toLowerCase()}`}
                className="  text-white cursor-pointer hover:text-yellow-300 flex gap-x-2 text-lg "
              >
                {dropdown.title}
                <ChevronDownIcon className='hover:rotate-180 mt-1'/>
               
              </Link>
              <div className=''>

              <li className="dropdown-content  text-white  py-5 mt-0   hover:block hidden absolute  bg-black  w-max  px-2  "  >
               

                {dropdown.content.map((item, itemIndex) => (
                  <Link 
                    key={itemIndex}
                    href={`/${dropdown.title.toLowerCase()}/${dropdown.content[itemIndex].toLocaleLowerCase()}`}
                  >
                    <span className="block py-2  hover:text-yellow-300  text-base ">
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