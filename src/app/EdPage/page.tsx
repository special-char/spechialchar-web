import EdSection2 from '@/components/EdSection2'
import EdSection from '@/components/EdTechSection'
import EdTechBanner from '@/containers/EdTechBanner'
import { Ed, EdSection3 } from '@/lib/constData'
import React from 'react'

interface Props {
    
}

const EdPage = (props: Props) => {
    return (
        <>
           <EdTechBanner/>
           <EdSection data={ EdSection }/> 
           <EdSection2 data={Ed}/>
        </>
    )
}

export default EdPage
