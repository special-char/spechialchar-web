"use client";
import { HomeBannerdataType } from '@/utils/types';
import React, { useState, useEffect } from 'react';


const HomeBanner = ({ data }: HomeBannerdataType) => {
    const [index, setIndex] = useState(0);
    const values = ['value', 'future', 'new'];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % values.length);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className=" relative overflow-hidden h-screen ">
            <video
                autoPlay
                loop
                muted
                className="absolute xl:w-full max-w-none "
                src="/images/newVideo.mp4"
            >
                Your browser does not support the video tag.
            </video>
            <div className="relative px-container max-sm:px-4 sm:px-8 z-0  text-yellow-300 h-full flex flex-wrap flex-col items-left justify-center lg:text-6xl font-bold text-4xl">
                {data.title}
                <div className="text-white">
                    {data.title2}
                </div>
                <div className="flex flex-wrap  justify-between  mt-32 gap-10 text-3xl text-white">
                    <div className='pt-1'> {data.subtitle} <span className='text-yellow-300'>{values[index]}</span></div>
                    <div className=''><button className='md:w-72 w-60 '>{data.button}</button></div>
                </div>
            </div>

        </main>
    )
}

export default HomeBanner