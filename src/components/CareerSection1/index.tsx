import React from 'react';
import Image from 'next/image';
import { CareerSection1Type } from '@/utils/types';

type Props = {};

const CareerSection1 = ({ data }: CareerSection1Type) => {
    return (
        <div className='flex flex-col md:flex-row gap-10 sm:flex items-center m-4 md:m-7'>
            <div className="md:w-1/2 lg:pr-20">
                <h1 className='text-xl sm:text-2xl max-md:text-3xl lg:text-4xl xl:text-5xl  md:pl-12'>WHY SHOULD  APPLY</h1>
                <div className='flex flex-col sm:flex-row'>
                    <h4 className='text-sm sm:text-base max-md:text-lg lg:text-xl xl:text-2xl border-r-2 border-yellow-400  md:pl-12 mt-5'>
                        Look,
                        <br/> this is not for everyone.
                    </h4>
                    <div className='text-xs sm:text-sm max-md:text-base lg:text-lg xl:text-xl pl-4 md:pl-12mt-5'>
                        <div className='mb-2'>If you only want a salary and don’t much<br/> care about how good your projects are,<br/> you’ll probably hate it here.</div>
                        <div className='mb-2'>If you hide behind policies and processes <br/> because, secretly, you’re terrified of owning <br/>ideas or decisions, you too will think it sucks.</div>
                    </div>
                </div>
            </div>
            <div className="lg:pb-10 lg:pl-20 md:w-1/2 md:flex items-center justify-center">
                <Image
                    src={data.url}
                    alt=""
                    height={600}
                    width={600}
                    objectFit="cover"
                />
            </div>
        </div>
    );
};

export default CareerSection1;
