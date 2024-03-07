
import ServiceIcon from '@/components/ServiceIcon'
import { serviceicon } from '@/lib/constData'
import React from 'react'




const Service = (props: Props) => {
    return (
        <section>

            <div className='py-1'><h4>Custom software engineering services that bring value from day one</h4></div>
            <div className='py-2 text-sm md:text-lg md:pr-12 lg:pr-64 font-medium '><p className='text-bold text-xl'>We offer a whole gamut of software engineering and consulting services to help our clients create technology systems for enterprise resource planning, collaboration, customer management, data analysis, and process automation. You can turn to our software engineering firm for:</p></div>
            <div className='grid md:grid-cols-4 gap-8 '>
                {serviceicon.map(x =>
                    <ServiceIcon data={x} />)}

            </div>



        </section>
    )
}

export default Service
