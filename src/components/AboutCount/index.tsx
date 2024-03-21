import { AboutData } from '@/lib/constData'
import React from 'react'

type Props = {}

const AboutCount = (props: Props) => {
  return (
    <div className='bg-black'>
      <section className=" text-white">
        <div className="bg-black grid gap-10 py-4 md:py-8 ">
          <div className="py-8">
            <h2 className="text-5xl md:text-7xl text-yellow-400 font-bold lg:text-9xl">
              Key facts <span className='text-white'>about us </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {AboutData.map((x) => (
              <div key={x.id}>
                <div className="text-yellow-400 font-bold text-4xl lg:text-8xl">{x.title1}</div>
                <div className="md:text-2xl font-base">{x.title2}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutCount