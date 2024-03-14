import Marque from '@/components/Marque'
import { MarqueData } from '@/lib/constData'
import React from 'react'

type Props = {}

const COurClients = (props: Props) => {
  return (
    <>
        <section>
        <div className=" pt-4 md:pt-8">
          <div>
            <h2 className="text-5xl  font-bold md:text-8xl">Our Clients</h2>
          </div>
        </div>
      </section>
      <div>
        <Marque data={MarqueData} color="black" fill="black" className="" />
      </div>
    </>
  )
}

export default COurClients