import { CollaboratorCard } from '@/lib/constData'
import React from 'react'
import CollabrateCard from '@/components/CollabrateCard'
import { Button } from '@/components/ui/button'


const Collabrate = (props: Props) => {
  return (
    <div>
        <div className=' py-10  md:py-20 lg:py-24  gap-2  lg:px-44  ' >
          <h1 className=' font-extrabold lg:text-5xl sm:text-3xl px-4 text-3xl'>
            How we collaborate with you
          </h1>
        </div>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 '>

                
        {CollaboratorCard.map(x =>
                    <CollabrateCard data={x} />)}
           </div>         

    

    </div>
  )
}

export default Collabrate