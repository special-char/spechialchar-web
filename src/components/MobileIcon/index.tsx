import { mobileicon } from '@/lib/constData'
import React from 'react'
import ServiceIcon from '../ServiceIcon'

type Props = {}

const MobileIcon = (props: Props) => {
  return (
    <>
     <section>

<div className='gap-3'><h2 className='font-extrabold lg:text-4xl  sm:text-2xl p-4'>Custom app solutions for any mobile platform</h2></div>
<div className='py-2   md:pr-12 lg:pr-64  p-4'><p className='text-bold text-2xl'>We develop consumer and enterprise apps of any complexity that can handle a rapidly growing user base. Many of our clients’ products have expanded from an MVP to a full-featured app with millions of users.</p></div>
<div className='grid md:grid-cols-3 gap-8 p-4 '>
    {mobileicon.map(x =>
        <ServiceIcon data={x} />)}

</div>



</section>
    {/* <section className="grid lg:grid-cols-3 sm:grid-cols-1 gap-20 md:grid-cols-3 ">

        
        {mobileicon.map(x =>
                <ServiceIcon data={x} />)}
                </section> */}
    </>
  )
}

export default MobileIcon