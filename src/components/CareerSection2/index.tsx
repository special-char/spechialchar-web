import React from 'react';
import Image from 'next/image';
import { CareerSection2Type } from '@/utils/types';

type Props = {};

const CareerSection2 = ({ data }: CareerSection2Type) => {
    return (
        <div className='flex flex-col md:flex-row gap-10 sm:flex  ml-4 md:ml-7'>
            <div className="lg:pb-10 lg:pl-20 md:w-full md:flex items-center justify-center">
                <Image
                    src={data.url}
                    alt=""
                    height={600}
                    width={600}
                    objectFit=""
                />
            </div>

            <div className=" lg:pr-20">
                <h1 className='text-xl sm:text-2xl max-md:text-3xl lg:text-4xl xl:text-5xl mb-4'>Honesty, transparency, and family spirit</h1>
                <div className='text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl mt-2 md:mt-4 lg:mt-6'>
                    We strive always to be honest with each other and the client. That’s more than being truthful; it’s about not dodging responsibility or concealing important things.
                </div>
                <div className='text-base sm:text-lg max-md:text-xl lg:text-xl xl:text-2xl mt-4 md:mt-6'>
                    We aren’t afraid to argue. Because we care about our work, it happens. We disagree like family; we help and support each other no matter what.
                </div>
                <div className='text-base sm:text-lg max- md:text-xl lg:text-xl xl:text-2xl mt-4 md:mt-6'>
                    Our managers live by this too. You’re never too junior to ask questions or to have an opinion.
                </div>
            </div>
        </div>
    );
};

export default CareerSection2;
