
import React from 'react';
import collaborate from '@/public/images/collaborate2.png';
import Image from 'next/image';

type Props = {};

const Collaborate = (props: Props) => {
  return (
    <div className='p-4 rounded-lg  gap-4'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/8 md:mr-4 '>
          <Image
            src={collaborate}
            alt="collaborate Image"
            height={200}
            width={150}
          />
        </div>
        <div className='md:w-1/2 mt-4 md:mt-3 text-black align-item-center'>
          <h3 className='text-2xl font-semibold'>Thinking Big</h3>
          <p className='mt-1.5'>
            After digging deep to understand holistically your challenges and business objectives, we chart your technology path that will keep your business future-proof.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;