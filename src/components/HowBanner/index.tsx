import { HowBannerType } from '@/utils/types'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

type Props = {
    url: string;
    title: string;
    desc: string;
    desc1: string;
    button:string
}

const HowBanner = (props :Props) => {
  return (
    <section
      className="md:h-[90vh]  h-screen
       w-full grid grid-cols-1 justify-center items-center  "
      style={{
        backgroundImage: `url(${props.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-gray text-heading1 lg:pt-36  max-sm:-mb-12  ">
        {props.title}
      </h1>
      <div className="flex max-sm:flex-col  lg:justify-center text-gray  gap-10  max-md:pb-28 max-sm:py-2 ">
        <p className="sm:border-r-2 sm:pr-4  max-sm:border-b-2 max-sm:pb-7 lg:pr-6 border-h-2 text-subtitle2">
          {props.desc}
        </p>
        <div className=" text-subtitle2 ">{props.desc1}</div>
        <Link className="-px-4 max-sm:-py-20 max-sm:-my-1 " title='Get a free consultant' href={'#Contact'}>
          <Button variant="default" size="sm" className="text-base lg:px-16 lg:py-7">
            {props.button}
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default HowBanner
