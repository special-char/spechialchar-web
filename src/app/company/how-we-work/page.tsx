import HowBanner from '@/components/HowBanner'
import HowModel from '@/components/HowModel'
import Tab2 from '@/components/Tab/index2'
import TableDemo from '@/components/Tabel'
import { howWeWorktabdata, howbanner, howmodel } from '@/lib/constData'
import React from 'react'

type Props = {}

const HowWeWork = (props: Props) => {
  return (
    <>
        <HowBanner data={howbanner}/>
        <Tab2 data={howWeWorktabdata}/>
        <HowModel data={howmodel}/>
        <TableDemo/>
        
    </>
  )
}

export default HowWeWork