import { CareerCVType } from '@/utils/types'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'


const CareerCV = ({ data }: CareerCVType) => {
  return (
    <section className='bg-gray   border-2 border-gray    '>
      <div className='lg:py-10 py-3  '>
        <h3 className='lg:text-4xl font-bold md:text-2xl text-subtitle1 text-center'>{data.title}</h3>
      </div>
      <Link className="grid pt-10 " href={"#Contact"}>
        <Button
          variant="default"
          type="submit"
          size="lg"

        >
          Send a CV anyway
        </Button>
      </Link>
    </section>
  )
}

export default CareerCV