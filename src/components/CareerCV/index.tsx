import { CareerCVType } from '@/utils/types'
import React from 'react'
import { Button } from '../ui/button'


const CareerCV = ({data}: CareerCVType) => {
  return (
    <section className='bg-slate-200   border-2 border-gray    '>
    <div className='lg:py-10 py-3  '>
    <h3 className='lg:text-4xl font-bold md:text-2xl text-subtitle1 text-center'>{data.title}</h3>
        </div>
        <div className="grid pt-10 ">
                <Button
                  variant="default"
                  type="submit"
                  size="lg"
                  
                >
                  Send a CV anyway
                </Button>
              </div>
    </section>
  )
}

export default CareerCV