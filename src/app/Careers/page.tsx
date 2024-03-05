
import CareersBanner from '@/components/CareersBanner'
import CareersBanner2 from '@/components/CareersBanner2'
import NowAsk from '@/components/NowAsk'
import CareerSections from '@/containers/CareerSection'
import CareerSections1 from '@/containers/CareerSection1'
import CareerSections2 from '@/containers/CareerSection2'
import CareerSections3 from '@/containers/CareerSection3'
import CareerFlex from '@/components/CareerFlex'
import React from 'react'
import CareerOP from '@/components/CareerOp'
import CareerBuild from '@/components/CareerBuild'
import CareerMany from '@/components/CareerMany'

interface Props {
    
}

const  Careers = (props: Props) => {
    return (
        <>
        <CareersBanner/>
        <CareerSections/>
         <CareerSections1/>
         <NowAsk/>
         <CareerSections2/>
         <CareerFlex/>
         <CareersBanner2/>
         <CareerSections3/>
        <CareerOP/>
        <CareerBuild/>
        <CareerMany/>
        

         
        </>
    )
}

export default  Careers 
