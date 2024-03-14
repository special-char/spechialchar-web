// import { careercity } from '@/lib/constData'
// import { CareerCityType } from '@/utils/types'
// import React from 'react'
// import Image from 'next/image'

// type Props = {}

// const CareerCity = ({data}: CareerCityType) => {
//   return (
//     <div className='flex flex-col gap-10 md:flex-row'>
//         <div className='grid grid-cols-2 md:flex-row md:flex-1 gap-10 lg:mb-7'>
//         <div className='flex-1'>
//                 <h2 className='lg:text-6xl font-bold md:text-4xl text-2xl'>{data.title}</h2>
//         </div>
//                 <div className='flex-1'>

//                 </div>
//                 <div className='flex-1 lg:text-xl md:text-base text-sm'>
//                     {data.description}
//                 </div>

//             </div>
//             <div className='flex'>
//       {careercity.section.map((i) => (
//           <div key={i.id} className="   ">
//         <Image src={i.url} height={200} width={200} alt="image" />
//           </div>
//         ))}
//         </div>
//     </div>
//   )
// }

// export default CareerCity


import { careercity } from '@/lib/constData';
import { CareerCityType } from '@/utils/types';
import React from 'react';
import Image from 'next/image';




const CareerCity = ({ data }: CareerCityType) => {
  return (
    <section>
      <div className='flex flex-col sm:flex-row gap-9 lg:py-5  '>

        <div className=' lg:text-xl md:text-base text-sm py-12'>
          {data.description}
        </div>
        <div className=' lg:p-3 '><h2 className='lg:text-6xl font-bold md:text-4xl text-3xl '>{data.title}</h2></div>
      </div> 
      <div className=' grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 py-5'>
        {careercity.section.map((item) => (
          <div key={item.id} className='flex flex-col items-center mb-4 md:mr-4 gap-4'>
            <Image src={item.url} height={400} width={400} alt='image' />

          </div>
        ))}
      </div>

    </section>
  );
};

export default CareerCity;
