import React from 'react'
import MobileIcon from '@/components/MobilePage/MobileIcon/MobileIcon'
import MobileMain from '@/components/MobilePage/MobileMain/MobileMain'
import MobileSwiper from '@/components/MobilePage/MobileSwiper/MobileSwiper'
import MobileEnd from '@/components/MobilePage/MobileEnd/MobileEnd'
import MobileIndustry from '@/components/MobilePage/MobileIndustry/MobileIndustry'
import Button from '@/components/Button'



const Mobile = () => {
  return (
    <>
      <MobileMain />
      <MobileIcon />
      <MobileSwiper />
      <MobileEnd />
      <MobileIndustry />
    </>
  )
}

export default Mobile