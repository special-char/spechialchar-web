import { Data } from '@/lib/constData'
import React from 'react'

type Props = {}

const AboutCount = (props: Props) => {
  return (
    <section className=" text-white">
        {/* p-8 bg-black md:px-12 md:pt-8 grid gap-8 lg:gap-12 lg:m-4 lg:mx-20 lg:p-24 */}
        <div className="bg-black grid gap-8 py-4 md:p-8 lg:py-12 lg:px-20">
          <div className="pt-8">
            <h2 className="text-3xl md:text-5xl font-extrabold lg:text-7xl">
              What makes us different
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {Data.map((x) => (
              <div key={x.id}>
                <div className="text-yellow-400 text-6xl">{x.title1}</div>
                <div className="font-base">{x.title2}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default AboutCount