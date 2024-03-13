import { saasSection } from '@/lib/constData'
import { SaasSectionType } from '@/utils/types'
import React from 'react'

type Props = {}

const SaasGrid = ({data}:SaasSectionType) => {
  return (
    <>
    <div key={data.section.id} className="border-b-2 border-b-second">
            <div className="text-3xl font-extrabold">{data.section.title}</div>
            <div className=" text-2xl max-md:text-lg py-10 text-gray font-light">
              {data.section.description}
            </div>
          </div></>
  )
}

export default SaasGrid