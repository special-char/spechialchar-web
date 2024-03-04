
import CareersBanner from '@/components/CareersBanner'
import CareersBanner2 from '@/components/CareersBanner2'
import NowAsk from '@/components/NowAsk'
import CareerSections from '@/containers/CareerSection'
import CareerSections1 from '@/containers/CareerSection1'
import CareerSections2 from '@/containers/CareerSection2'
import React from 'react'

interface Props {
    
}

const  Careers = (props: Props) => {
    return (
        <>
        <CareersBanner/>
        <CareerSections/>
        <CareerSections1/>
        <NowAsk />
        <CareerSections2/>
        
       <CareersBanner2/>
        </>
    )
}

export default  Careers 
