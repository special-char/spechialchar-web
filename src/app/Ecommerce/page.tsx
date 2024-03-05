

import React from 'react'
import Banner from "@/components/AboutBanner"
import Banner2 from "@/components/AboutBanner2"
import EcommerceBanner from '@/components/EcommerceBanner'
import WebBanner2 from '@/components/WebBanner2'
import { AccCard, EcommerceSection1, EcommerceSection2, EcommerceSection3 } from '@/lib/constData'
import EcommerceErp from '@/components/EcommerceErp'
import EcommerceVirtual from '@/components/EcommerceVirtual'
import BgBanner from '@/components/common/BgBanner'
import BgYellowB from '@/components/common/BgYellowB'
import Acc from '@/components/Accordian/index1'
import AccCards from '@/containers/AccCard'
interface Props {

}

const Ecommerce = (props: Props) => {
    return (
        <>
            <EcommerceBanner />
            <BgYellowB data={EcommerceSection1} />
            <EcommerceErp />
            <BgYellowB data={EcommerceSection2} />
            <EcommerceVirtual />
            <BgYellowB data={EcommerceSection3} />
        </>
    )
}

export default Ecommerce