

import React from 'react'
import Banner from "@/components/AboutBanner"
import Banner2 from "@/components/AboutBanner2"
import EcommerceBanner from '@/components/EcommerceBanner'
import WebBanner2 from '@/components/WebBanner2'
import { EcommerceSection1, EcommerceSection2, EcommerceSection3 } from '@/lib/constData'
import EcommerceErp from '@/components/EcommerceErp'
import EcommerceVirtual from '@/components/EcommerceVirtual'
interface Props {

}

const Ecommerce = (props: Props) => {
    return (
        <>
            <EcommerceBanner />
            <WebBanner2 data={EcommerceSection1} />
            <EcommerceErp />
            <WebBanner2 data={EcommerceSection2} />
            <EcommerceVirtual />
            <WebBanner2 data={EcommerceSection3} />
        </>
    )
}

export default Ecommerce