"use client"
import React from 'react'
import ImageBanner from '../ImageBanner'
import YellowBanner from '../YellowBanner'
import { MarqueData, MobileBgBanner1, MobileBgBanner2, MobileBgBanner3, MobileYellowBanner1, MobileYellowBanner2 } from '@/lib/constData'
import { MobilePageData } from '@/utils/types'
import Marque from '../Marque'

const Data = [
    {
      id: 1,
      title1: "13+",
      title2: "years in mobile application development",
    },
    {
      id: 2,
      title1: "300+",
      title2: "top-tier software development experts",
    },
    {
      id: 3,
      title1: "100+",
      title2: "millions of users enjoy our apps",
    },
    {
      id: 4,
      title1: "200+",
      title2: "clients around the globe",
    },
    {
      id: 5,
      title1: "99%",
      title2: "app reliability rate",
    },
    {
        id: 6,
        title1: "600+",
      title2: "products delivered",
      },
  ];

const MobilePage = ({data}: MobilePageData) => {
  return (
    <>
    {/* <ImageBanner data={MobileBgBanner1} />

    <ImageBanner data={MobileBgBanner2}/>

    <YellowBanner data={MobileYellowBanner1}/>

    <ImageBanner data={MobileBgBanner3} />

    <YellowBanner data={MobileYellowBanner2}/> */}

<div className=" text-white">
{/* p-8 bg-black md:px-12 md:pt-8 grid gap-8 lg:gap-12 lg:m-4 lg:mx-20 lg:p-24 */}
        <div className="bg-black px-container grid gap-8 py-4 md:p-8 lg:mx-20 lg:py-12 lg:px-20">
          <div className="pt-8">
            <h2 className="text-3xl md:text-5xl font-extrabold lg:text-7xl">What makes us different</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {Data.map(x => (<div key={x.id}>
              <div className="text-yellow-400 text-6xl">{x.title1}</div>
              <div className='font-base'>{x.title2}</div>
            </div>))}
          </div>
        </div>
      </div>


      <div>
        <div className='px-container pt-4 md:pt-8 lg:pl-16'>
            <div><h2 className='text-5xl  font-bold md:text-8xl'>Our Clients</h2></div>
        </div>
        <Marque data={MarqueData} color="white"/>
      </div>

    </>
    )
}

export default MobilePage