import Blog from '@/components/Blog/Blog'
import ThinkingBanner from '@/components/ThinkingBanner'
import React from 'react'

interface Props {
    
}

const OurThinking = (props: Props) => {
    return (
        <>
        <ThinkingBanner/>  
        <Blog/>  
        </>
    )
}

export default OurThinking
