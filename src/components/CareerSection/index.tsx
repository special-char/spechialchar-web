import React from 'react';
import Image from 'next/image';
import { CareerSectionType } from '@/utils/types';

type Props = {};

const CareerSection = ({ data }: CareerSectionType) => {
    return (
        <div className='flex flex-col md:flex-row gap-10 sm:flex  md:m-7 m-5'>
            <div className="lg:pb-10 lg:pl-20  md:w-1/2 md:flex items-center justify-center  ">
                <Image
                    src={data.url}
                    alt=""
                    height={600}
                    width={600}
                    objectFit="cover "
                />
            </div>
            <div className="md:w-1/2 lg:pr-20  ">
                <h1>Who we are</h1>
                <div className='text-xl mt-4 md:mt-10 lg:text-xl '>ITRex is more than 300 technology professionals based in Poland, Georgia, Ukraine, Armenia, and the USA. We write software, craft strategies, and give expert advice.</div>
                <div className='text-xl py-1 md:mt-10 md:mb-4'>We solve problems and drive growth for our clients. They’ve included big names like Walmart, Take a Swing at Cancer, Procter & Gamble, Dun & Bradstreet, Warner Bros., 21st Century Fox, and the Dollar Shave Club.</div>
            </div>
        </div>
         
    );
}

export default CareerSection;
