import React from 'react';

type Props = {};

const NowAsk = (props: Props) => {
  return (
    <div className='bg-gray-200 p-4 md:p-8 border-2 border-gray-400 m-9'>
      <div className='text-center'>
        <h4>Now ask yourself (and be honest)</h4>
      </div>
      <div className='flex flex-col md:flex-row text-lg md:text-xl justify-between gap-4 md:gap-10'>

        <div className='mb-4 md:mb-0 md:h-100 md:flex-1 md:border-r-2 md:border-blue-700 '>
          Does being part of a shoddy project bother you so much that you have to speak up?
        </div>

        <div className='mb-4 md:mb-0 md:h-100 md:flex-1 md:border-r-2 md:border-blue-700'>
          Do you care about your client, your project, your decisions and your team?
        </div>

        <div className='md:h-100 md:flex-1 pr-10'>
          Do you get a buzz out of solving hard problems?
        </div>
      </div>
    </div>
  );
};

export default NowAsk;
