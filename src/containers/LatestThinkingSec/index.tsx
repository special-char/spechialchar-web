import ThinkCard from '../Card2'
import React from 'react'
import Card from '../Card'
import { Card1 } from '@/lib/constData'

interface Props {
    
}

const ThinkingSection = (props: Props) => {
    return (
        <div>
            <h1 className="text-5xl font-extrabold m-20">Latest Thinking</h1>
            <ThinkCard data={Card1}/>
        </div>
    )
}

export default ThinkingSection