import { serviceicon2 } from '@/lib/constData'
import React from 'react'
import ServiceIcon from '../ServiceIcon'
import { Button } from '../ui/button'

type Props = {}

const ServiceIcon2 = (props: Props) => {
    return (
        <section className="grid lg:grid-cols-3 sm:grid-cols-1 gap-20 md:grid-cols-3 ">
            {serviceicon2.data.map(x =>
                <ServiceIcon data={x} />)}
            {/* <div className="flex md:justify-start justify-center"><Button variant="default" size="sm" className='px-8 md:px-20 py-7 text-base '>
                Gate Fatern retiurn on your investment &rarr;
            </Button> */}
            {/* </div> */}
        </section>

    )
}

export default ServiceIcon2