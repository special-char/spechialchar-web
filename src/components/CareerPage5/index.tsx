import { CareerPage5dataType } from '@/utils/types'
import React from 'react'
type Props = {
  title: string;
  desc1: string;
  desc2: string;
  desc3: string;
}
const CareerPage5 = (props: Props) => {
  return (
    <section className="">
      <div className="bg-gray1 p-12 flex flex-col justify-center text-center ">
        <div><h2 className="text-heading5">{props.title}</h2></div>
        <div className="mt-8 text-subtitle2 md:grid grid-cols-3">
          <div className="border-b-2 border-blue md:border-r-2 md:border-b-0"><p className="py-4 md:px-12">{props.desc1}</p></div>
          <div className="border-b-2 border-blue md:border-r-2 md:border-b-0"><p className="py-4 md:px-12">{props.desc2}</p></div>
          <div className=""><p className="py-4 md:px-12">{props.desc3}</p></div>
        </div>
      </div>
    </section>
  )
}

export default CareerPage5