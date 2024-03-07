import React from 'react'
import WebIcon from '@/components/WebPage/WebIcon/WebIcon';
import WebLanding from '@/components/WebPage/WebLanding/WebLanding';
import WebMain from '@/components/WebPage/WebMain/WebMain';
import Webswiper from '@/components/WebPage/Webswiper/Webswiper';
import WebContactus from '@/components/WebPage/WebContactus/WebContactus';



interface Props {
    
}

const Webpage = (props: Props) => {
    return (
        <>
        <WebMain/>
        <WebIcon/>
        <WebContactus/>
        <WebLanding/>
        <Webswiper/>
        </>

    )
}

export default Webpage;
