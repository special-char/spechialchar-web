
import React from 'react';
import Image from 'next/image';
import { CollaboratorCardType } from '@/utils/types';
import { CollaboratorCard } from '@/lib/constData';

type Props = {};

const Collaborator = ({ data }: { data: CollaboratorCardType[] }) => {
  return (

    <main className="bg-gray-200 flex items-center overflow-x-auto  h-screen " >
      {CollaboratorCard.card.map((item) => (
        <div key={item.id} className='p-4 rounded-lg  gap-4'>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/8 md:mr-4 '>


              <Image
                src={item.url}
                alt="collaborate Image"
                height={200}
                width={150}
              />
            </div>
            <div className='md:w-1/2 mt-4 md:mt-3 text-black align-item-center'>
              <h3 className='text-2xl font-semibold'>{item.title}</h3>
              <div className='mt-1.5'>{item.description}
              </div>
            </div>
          </div>
        </div>
      ))
      }
    </main>

  );
};
export default Collaborator;