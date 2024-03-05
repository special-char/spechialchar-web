import React from 'react';
import Image from 'next/image';
import { CollaboratorCardType } from '@/utils/types';
import { CollaboratorCard } from '@/lib/constData';

type Props = {};

const Collaborator = ({ data }: { data: CollaboratorCardType[] }) => {
  return (
    <div className="bg-black grid grid-cols-1 md:grid-cols-2 sm:grid-col-1  gap-8 p-2 lg:p-40 ">
      {CollaboratorCard.card.map((item) => (
        <div key={item.id} className=''>
          <div className='md:flex-row flex justify-center flex-col gap-8 '>
            <div className='md:justify-center flex-1/2'>
              <Image
                src={item.url}
                alt="collaborate Image"
                height={150}
                width={150}
              />
            </div>
            <div className='mt-4 md:mt-0 text-white mb-1 flex-1 '>
              <h3 className='lg:text-4xl md:text-xl font-extrabold'>{item.title}</h3>
              <div className='mt-1.5 lg:text-lg md:text-sm text-gray'>{item.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collaborator;


