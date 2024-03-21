import { HowBannerType } from '@/utils/types'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

type Props = {}

const HowBanner = ({ data }: HowBannerType) => {
  return (
    <section
      className="md:h-[90vh]  h-screen
       w-full grid grid-cols-1 justify-center items-center  "
      style={{
        backgroundImage: `url(${data.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-slate-200 text-heading2 font-bold lg:pt-36  max-sm:-mb-12  ">
        {data.title}
      </div>
      <div className="flex max-sm:flex-col  lg:justify-center text-slate-200  gap-10  max-md:pb-28 max-sm:py-2 ">
        <div className="sm:border-r-2 sm:pr-4  max-sm:border-b-2 max-sm:pb-7 lg:pr-6 border-h-2 text-sm">
          {data.desc}
        </div>
        <div className=" text-sm ">{data.desc1}</div>
        <Link className="-px-4 max-sm:-py-20 max-sm:-my-1 " href={'https://thespecialcharacter.graphy.com/'}>
          <Button variant="default" size="sm" className="text-base lg:px-16 lg:py-7">
            Get a free consultant
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default HowBanner
