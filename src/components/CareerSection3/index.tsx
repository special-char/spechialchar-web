import React from 'react';
import Image from 'next/image';
import { CareerSection3Type } from '@/utils/types';

type Props = {};

const CareerSection3 = ({ data }: CareerSection3Type) => {
    return (
        <div className='flex flex-col md:flex-row gap-10 sm:flex items-center m-4 md:m-7'>
            <div className="md:w-1/2 lg:pr-20">
                <h1 className='text-xl sm:text-2xl max-md:text-3xl lg:text-4xl xl:text-5xl md:pl-12'> Do you play to win?
                    <br /> Or just to avoid <br />
                    blame?</h1>
                <div className='flex flex-col sm:flex-row'>
                    <div className='text-sm sm:text-base max-md:text-lg lg:text-xl xl:text-2xl border-r-2 border-yellow-400  md:pl-12'>
                        <h6 className='mb-6'>Does this sound
                            overly lofty?</h6>
                        <h6 className='mb-6'>We’re definitely
                            not perfect.</h6>
                        <h6 className='mb-6'>We make mistakes.</h6>
                    </div>

                    <div className='text-xs sm:text-sm max-md:text-base lg:text-lg xl:text-xl pl-4 md:pl-12'>
                        <div className='mb-4'>You’re allowed to get things wrong – even horribly wrong – sometimes too. If you’re honest enough to own your mistakes, you will be safe.</div>
                        <div className='mb-4'>Working at ITRex, you’ll watch us admit mistakes all the time. That’s what initiative and transparency look like.</div>
                        <div className='mb-4'>We are all committed to each other’s success. All we ask in return is the same commitment back.</div>
                    </div>
                </div>
            </div>
            <div className="lg:pb-10 lg:pl-20 md:w-1/2 md:flex items-center justify-center">
                <Image
                    src={data.url}
                    alt=""
                    height={500}
                    width={500}
                    objectFit="cover"
                />
            </div>
        </div>
    );
};

export default CareerSection3;
