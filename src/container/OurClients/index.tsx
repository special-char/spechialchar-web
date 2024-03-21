import WhiteMarque from '@/components/WhiteMarque'
import React from 'react'

type Props = {}

const OurClients = (props: Props) => {
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
        <WhiteMarque className='bg-white' />
      </div>
    </>
  )
}

export default OurClients