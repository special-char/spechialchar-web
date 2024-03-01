import WebIcon from '@/components/CustomeWeb/WebIcon/WebIcon';
import WebMain from '@/components/CustomeWeb/WebMain/WebMain';
import Webswiper from '@/components/CustomeWeb/Webswiper/Webswiper';
import React from 'react'

interface Props {
    
}

const Webpage = (props: Props) => {
    return (
        <>
        <WebMain/>
        <WebIcon/>
        <Webswiper/>
        </>

    )
}

export default Webpage;
