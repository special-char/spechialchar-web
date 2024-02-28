import Cardcomp from '@/components/Cardcomp'
import React from 'react'
import Card from '../Card'

interface Props {
    
}

const ThinkingSection = (props: Props) => {
    return (
        <div>
            <h1 className="text-5xl font-extrabold m-20">Latest Project</h1>
            <Cardcomp data={Card}/>
        </div>
    )
}

export default ThinkingSection
