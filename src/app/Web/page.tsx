import WebIcon from '@/components/CustomeWeb/WebIcon/WebIcon';
import WebLanding from '@/components/CustomeWeb/WebLanding/WebLanding';
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
        <WebLanding/>
        <Webswiper/>
        </>

    )
}

export default Webpage;
