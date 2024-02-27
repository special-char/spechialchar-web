import React from 'react';
import Image from 'next/image';
import { CollaboratorCardType } from '@/utils/types';
import { CollaboratorCard } from '@/lib/constData';

type Props = {};

const Collaborator = ({ data }: { data: CollaboratorCardType[] }) => {
  return (
    <main className="bg-black grid grid-cols-1 md:grid-cols-2 gap-10 p-2 lg:p-40 ">
      {CollaboratorCard.card.map((item) => (
        <div key={item.id} className='rounded-lg overflow-hidden bg-black '>
          <div className='flex flex-col md:flex-row justify-center '>
            <div className='md:justify-center '>
              <Image
                src={item.url}
                alt="collaborate Image"
                height={300}
                width={250}
              />
            </div>
            <div className=' mt-4 md:mt-0 text-white mb-1'>
              <h3 className='text-xl font-semibold'>{item.title}</h3>
              <div className='mt-1.5'>{item.description}</div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Collaborator;
