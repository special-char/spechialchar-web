import React from 'react';
import Image from 'next/image';
import { CareerSection3Type } from '@/utils/types';

const CareerSection3 = ({ data }: CareerSection3Type) => {
    return (
        <div className='flex flex-col md:flex-row gap-10 sm:flex  m-4 md:m-7'>
            <div className="md:w-full lg:w-1/2 lg:pl-20">
                <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:pl-12 mb-6 text-blue-800'>Do you play to win?
                    <br /> Or just to avoid <br />
                    blame?</h2>
                <div className='grid lg:grid-cols-2 max-sm:grid-cols-1'>
                    <div className='text-lg md:text-xl lg:text-2xl xl:text-3xl border-r-2 border-gray md:border-none md:pl-12 p-4'>
                        <h6 className='mb-4 font-bold'>Does this<br/> sound<br/>
                            overly lofty?</h6>
                        <h6 className='mb-4 font-bold'>We’re<br/> definitely<br/>
                            not perfect.</h6>
                        <h6 className='mb-4 font-bold'>We make mistakes.</h6>
                    </div>

                    <div className='text-sm md:text-base lg:text-lg xl:text-xl pl-4 md:pl-12'>
                        <div className='mb-4'>You’re allowed to get things wrong – even horribly wrong – sometimes too. If you’re honest enough to own your mistakes, you will be safe.</div>
                        <div className='mb-4'>Working at ITRex, you’ll watch us admit mistakes all the time. That’s what initiative and transparency look like.</div>
                        <div className='mb-4'>We are all committed to each other’s success. All we ask in return is the same commitment back.</div>
                    </div>
                </div>
            </div>
            <div className="lg:pb-10 lg:pr-20 flex-shrink-">
                <Image
                    src={data.url}
                    alt=""
                    height={500}
                    width={500}
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default CareerSection3;
