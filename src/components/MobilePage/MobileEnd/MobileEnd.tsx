import React from 'react'
import EndtoEnd from '@/public/images/EndToEnd.webp'

const MobileEnd = () => {
  return (
    <section className='h-full w-full' style={{backgroundImage: `url(${EndtoEnd.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <div className='mx-4  my-12 md:mx-6 md:my-36'>
      <div className='text-white  '>
        <h6 className='text-4xl font-bold md:text-5xl 2xl:text-6xl'>End-to-end mobile  <br/><span className='text-yellow'>development services</span></h6>
      </div>
    </div>
  </section>
  )
}

export default MobileEnd