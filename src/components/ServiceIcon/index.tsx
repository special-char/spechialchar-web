import React from 'react'
import Image from 'next/image'
import { ServiceIconType } from '@/utils/types';


const ServiceIcon = ({data}: ServiceIconType) => {
    return (
        <div className=''>
            <div className=' lg:gap-5 '>
                <div className="flex flex-col gap-y-2 gap-2">
                    <div className="lg:pb-4 sm:pb-2">
                        {/* <Aindroid className="h-10 w-10 2xl:h-14 2xl:w-14  " /> */}
                        <Image src={data.url} height={50} width={50} alt='image'/>
                    </div>
                    <div>
                        <h2 className='font-bold lg:text-3xl md:text-xl text-xl'>{data.title}</h2>
                    </div>
                    <div className="lg:text-xl md:text-sm sm:text-sm text-slate-500 md:pr-6 lg:pr-4 ">

                        {data.description}   </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceIcon