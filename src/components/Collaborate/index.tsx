import React from 'react';
import Image from 'next/image';
import { CollaboratorCardType } from '@/utils/types';
import { CollaboratorCard } from '@/lib/constData';
import Button from '../Button';
type Props = {};

const Collaborator = ({ data }: { data: CollaboratorCardType[] }) => {
  return (
    <>
      <div className="">
      <div className='bg-black py-10 sm:py-16 md:py-20 lg:py-24 xl:py-28 gap-2 '>
          <h2 className="lg:text-5xl md:text-4xl sm:text-sm  bg-black text-white font-extrabold lg:px-36 pl-4">
            How we collaborate with you
          </h2>
        </div>
        
        <div className='px-container bg-black grid grid-cols-1 md:grid-cols-2 sm:grid-col-1  gap-8 py-2 lg:py-7 '>
          {CollaboratorCard.card.map((item) => (
            <div key={item.id} className=''>
              <div className='md:flex-row flex justify-center flex-col gap-8 '>
                <div className='md:justify-center flex-1/2'>
                  <Image
                    src={item.url}
                    alt="collaborate Image"
                    height={150}
                    width={150} />
                </div>
                <div className='mt-4 md:mt-0 text-white mb-1 flex-1 '>
                  <h3 className='lg:text-4xl md:text-xl font-extrabold'>{item.title}</h3>
                  <div className='mt-1.5 lg:text-lg md:text-sm text-gray'>{item.description}</div>
                </div>
              </div>

            </div>
          ))}
        </div>
        <div className='bg-black px-6 md:px-12 lg:px-36'>
          <Button className='md:w-72 w-60 my-8 md:my-14 font-bold pl-4'>Discuss my projectH</Button>
        </div>
      </div></>
  );
};

export default Collaborator;


