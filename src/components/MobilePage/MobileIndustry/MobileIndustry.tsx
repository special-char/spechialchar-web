import React from 'react'
import Delivery from '@/public/images/Delivery.jpeg'

const MobileIndustry = () => {
  return (
    <section className='h-full w-full' style={{backgroundImage: `url(${Delivery.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <div className='mx-4  my-12 md:mx-6 md:my-36'>
      <div className='text-white  '>
        <h6 className='text-4xl font-bold md:text-5xl 2xl:text-6xl'>Delivering industry-specific <br/><span className='text-yellow'>mobile app solutions</span></h6>
      </div>
    </div>
  </section>
  )
}

export default MobileIndustry