import Cardcomp from '@/components/Cardcomp'
import { Card } from '@/lib/constData'
import React from 'react'



interface Props {

}

const ProjectSection = (props: Props) => {
    return (
        <div>
            <h1 className="text-5xl font-extrabold m-20">Latest Project</h1>
            <Cardcomp data={Card} />
        </div>
    )
}

export default ProjectSection
