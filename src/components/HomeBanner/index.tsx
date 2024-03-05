"use client";
import Button from '../Button'
import React, { useState, useEffect } from 'react';
type Props = {}

const HomeBanner = (props: Props) => {
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
            // type="video/mp4"
            >
                Your browser does not support the video tag.
            </video>
            <div className="relative xl:px-60 z-0 px-3  p-5 text-orange h-full flex  flex-wrap flex-col items-left justify-center xl:text-6xl font-bold text-4xl">
                Next-gen enterprise
                <div className="text-white">
                    software development company
                </div>
                <div className="flex flex-wrap  justify-between  mt-32 gap-10 text-3xl text-white">
                    <div className='pt-1'>  We think <span className='text-orange'>{values[index]}</span></div>
                    <div className=''><Button className='md:w-72 w-60 '>Let's Talk</Button></div>
                </div>
            </div>

        </main>
    )
}

export default HomeBanner