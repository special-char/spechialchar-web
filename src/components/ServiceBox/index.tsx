// import React from 'react'

// type Props = {}

// const ServiceBox = (props: Props) => {
//     return (
//     <div className=' justify-between lg:px-20 lg:py-20 bg-blue-400 border-2 m-20 gap-2 grid lg:grid-cols-2 md:grid-cols-1'>
//         <div className='flex'>
//             <div className='text-2xl items-center'>Maturity:</div>
//             <div className='flex items-center text-xl'>on the market since 2009</div>
//         </div>
//         <div className='flex'>
//             <div className='text-2xl items-center'>Agility:</div>
//             <div className='flex items-center text-xl'>fast innovation at scale</div>
//         </div>
//         <div className='flex'>
//             <div className='text-2xl items-center'>Agility:</div>
//             <div className='flex items-center text-xl'>fast innovation at scale</div>
//         </div>
//         <div className='flex'>
//             <div className='text-2xl items-center'>Agility:</div>
//             <div className='flex items-center text-xl'>fast innovation at scale</div>
//         </div>
//     </div>
//     )
// }

// export default ServiceBox




// import React from 'react';

// type Props = {};

// const ServiceBox = (props: Props) => {
//   return (
//     <div className='bg-blue-400 border-2 m-4 lg:m-20 gap-8 p-4'>
//       <div className='grid grid-cols-1 lg:grid-cols-2'>
//         <div className='mb-4 lg:mb-0 flex'>
//           <div className='text-2xl mb-2'>Maturity:
//           on the market since 2009</div>
//         </div>
//         <div className='mb-4 lg:mb-0 flex'>
//           <div className='text-2xl mb-2'>Agility:
//           fast innovation at scale</div>
//         </div>
//         <div className='mb-4 lg:mb-0 flex'>
//           <div className='text-2xl mb-2'>Experience:
//           600+ projects completed</div>
//         </div>
//         <div className='mb-4 lg:mb-0 flex'>
//           <div className='text-2xl mb-2'>Agility:
//           fast innovation at scale</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceBox;

// import { serviceBox } from '@/lib/constData';
// import React from 'react';
// import { Button } from '../ui/button';



// const ServiceBox = () => {
//     return (
//         <div className='bg-blue-400 border-r-2 m-10 lg:mx-20 gap-5 p-4 grid lg:grid-cols-2  rounded-lg'>
            
//             {serviceBox.map((i) => {
//                 return (
//                     <div key={i.id} className='flex flex-wrap flex-row lg:px-24  '>
//                         <div className='text-lg mb-2 '>
//                             <span className='font-bold text-xl'>{i.title}</span> {i.discription}
//                         </div>



//                     </div>
//                 )
//             })
//             }
//         </div>
        
//     );
// };

// export default ServiceBox;
import { serviceBox } from '@/lib/constData';
import React from 'react';
import { Button } from '../ui/button';

const ServiceBox = () => {
  return (
    <div className='bg-blue-100 border-r-2 m-4 lg:px-20 lg: py-20  p-4 rounded-lg '>
      <ul className='list-disc pl-7 grid lg:grid-cols-2 lg:px-1 gap-4 md:grid-cols-2'>
        {serviceBox.map((i) => (
          <li key={i.id} className='text-lg mb-2 '>
            <span className='font-bold text-xl'>{i.title}</span> {i.discription}
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default ServiceBox;
