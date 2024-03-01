
import CareersBanner from '@/components/CareersBanner'
import CareersBanner2 from '@/components/CareersBanner2'
import NowAsk from '@/components/NowAsk'
import CareerSections from '@/containers/CareerSection'
import React from 'react'

interface Props {
    
}

const  Careers = (props: Props) => {
    return (
        <>
        <CareersBanner/>
        <CareerSections/>
        <NowAsk/>
       <CareersBanner2/>
        </>
    )
}

export default  Careers 
