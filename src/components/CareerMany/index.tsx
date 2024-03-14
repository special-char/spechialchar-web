import { CareerManyType } from '@/utils/types'
import React from 'react'

type Props = {}

const CareerMany = ({data}: CareerManyType) => {
  return (
    <section>
        <div className='text-center'>
<h2 className='lg:text-6xl font-bold md:text-4xl text-3xl'>{data.title}</h2>
</div>
<div className='lg:py-10 p-4'>
<div className=' lg:text-xl md:text-base text-sm text-center'>
                    {data.desc}
                </div>
                <div className=' lg:text-xl md:text-base text-sm text-center'>
                    {data.desc1}
                </div>
                <div className=' lg:text-xl md:text-base text-sm text-center'>
                    {data.desc2}
                </div>
                </div>
    </section>
   
  )
}

export default CareerMany