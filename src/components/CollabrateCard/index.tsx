import React from 'react'
import { CollaboratorCard } from '@/lib/constData'
import Image from 'next/image'


const CollabrateCard = ({data}: Props) => {
  return (
    <div>
        <div className='md:flex-row flex justify-start flex-col lg:gap-8 m-4 md:gap-3 '>
                <div className='md:justify-center flex-1/2 items-center'>
                  <Image
                    src={data.url}
                    alt="collaborate Image"
                    height={150}
                    width={150} />
                </div>
                <div className='mt-4 md:mt-0 text-black mb-1 flex-1  '>
                  <h3 className='lg:text-3xl md:text-xl font-extrabold'>{data.title}</h3>
                  <div className='mt-1.5 lg:text-base md:text-sm text-gray'>{data.description}</div>
                </div>
              </div>
    </div>
  )
}

export default CollabrateCard


