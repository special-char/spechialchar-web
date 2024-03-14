import { uiSectionType } from '@/utils/types'
import React from 'react'

type Props = {}

const GridSection = ({data}:uiSectionType) => {
  return (
    <div key={data.id} className="border-b-2 border-b-second">
              <div className="text-3xl font-extrabold">{data.title1}</div>
              <div className=" text-2xl max-md:text-lg py-10 text-gray font-light">
                {data.description}
              </div>
            </div>
  )
}

export default GridSection