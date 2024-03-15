// import { howmodel } from '@/lib/constData'
// import { HowModelType } from '@/utils/types'
// import React from 'react'



// const HowModel = ({data}: HowModelType) => {
//   return (
//     <section>
//         <div>
//         <h3 className='lg:text-4xl font-bold md:text-2xl  '>{data.heading}</h3>
//         </div>
//         <div className='flex-1 lg:text-xl md:text-base text-sm py-10'>
//         {data.par}

//                 </div>

//                 <div>
//                 {howmodel.section.map((item) => (
//           <div key={item.id} className='flex    '>
//             <div className='font-bold lg:text-2xl md:text-2xl'>
//               {item.title}
//             </div>
//             <div>
//               <div>{item.desc}</div>
//               <div>{item.desc1}</div>
//             </div>
//             </div>
//           ))}
//                 </div>
//     </section>
//   )
// }

// export default HowModel

import { howmodel } from '@/lib/constData';
import { HowModelType } from '@/utils/types';
import React from 'react';
import { Button } from '../ui/button';

const HowModel = ({ data }: HowModelType) => {
  return (
    <section className="py-8">
      <div className=" mb-8">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">{data.heading}</h3>
      </div>

      <div className=" mb-8 lg:pr-72 md: pr-12 ">
        <p className="text-base md:text-lg lg:text-base flex-1 text-gray-400">{data.par}</p>
      </div>

  

<div className="">
  {howmodel.section.map((item) => (
    <div key={item.id} className="border-b-2 border-gray-300 py-4 flex flex-col md:flex-row ">
      <div className='flex-1'>
        <h4 className="text-lg md:text-subtitle1 lg:text-3xl font-bold mb-2">{item.title}</h4>
      </div>
      <div className='flex-1 md:flex-grow '>
        <div className=''>
          <p className="text-sm md:text-base lg:text-subtitle1 text-slate-400 lg:py-6">{item.desc}</p>
        </div>
        <div className='-pl-2'>
          {/* <p className="text-base md:text-base lg:text-lg font-bold lg:py-4 py-3">{item.desc1}</p> */}
            <Button variant={"link"} size={"icon"}>show more</Button>
          <div>
          </div>

        </div>
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default HowModel;





    {/* <div className=" ">
        {howmodel.section.map((item) => (
          <div key={item.id} className="border-b-2 border-gray-300  py-4 flex  ">
            <div className='flex flex-1'>
              <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">{item.title}</h4>
            </div>
            <div className=' flex-1 '>
  <div className=''>
    <p className="text-sm md:text-base lg:text-lg">{item.desc}</p>
  </div>
  <div className='py-4'>
    <p className="text-sm md:text-base lg:text-lg font-bold">{item.desc1}</p>
  </div>
</div>

          </div>
        ))}
      </div> */}