// import { HowBannerType } from '@/utils/types'
// import React from 'react'
// import Image from 'next/image'

// type Props = {}

// const HowBanner = ({data}: HowBannerType) => {
//   return (
    
//     <section
//     className="h-screen w-full"
//     style={{
//       backgroundImage: `url(${data.url})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//     }}
//   >
//    <div className=" my-12 md:my-36">
//       <div className='text-slate-200 text-6xl font-bold'>{data.title}</div>
//       <div className='flex py-40 text-slate-200 lg:pr-96    '>
//         <div className='border-r-2 '>{data.desc}</div>
//         <div className='pl-3'>{data.desc1}</div>
//       </div>
//       </div>
       
        
//     </section>
    
    
//   )
// }

// export default HowBanner


// import { HowBannerType } from '@/utils/types'
// import React from 'react'
// import Image from 'next/image'
// import { Button } from '../ui/button'

// type Props = {}

// const HowBanner = ({data}: HowBannerType) => {
//   return (
//     <section
//       className="h-screen w-full"
//       style={{
//         backgroundImage: `url(${data.url})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="my-12 md:my-36 ">
//         <div className="text-slate-200 text-6xl font-bold">{data.title}</div>
//         <div className="flex flex-col md:flex-row md:justify-start py-10 md:py-40  text-slate-200 lg:pr-96">
//           <div className="border-b-2 md:border-b-0 md:border-r-2 mb-4  md:pr-8">
//             {data.desc}
//           </div>
//           <div className="pl-3">{data.desc1}</div>
//           {/* <div className=" py-12 ">
//             <Button
//               variant="default"
//               size="sm"
//               className=" text-base "
//             >
//               Get a free conslutant
//             </Button>
//           </div> */}
//         </div>
//         <div className="  ">
//             <Button
//               variant="default"
//               size="sm"
//               className=" text-base "
//             >
//               Get a free conslutant
//             </Button>
//           </div>
//       </div>
      
//     </section>
//   )
// }

// export default HowBanner


// import { HowBannerType } from '@/utils/types'
// import React from 'react'
// import Image from 'next/image'
// import { Button } from '../ui/button'

// type Props = {}

// const HowBanner = ({data}: HowBannerType) => {
//   return (
//     <section
//       className="h-screen w-full flex flex-col justify-center  "
//       style={{
//         backgroundImage: `url(${data.url})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//         <div className="text-slate-200 text-heading2 font-bold ">{data.title}</div>
//       <div className="my-12 md:my-36 flex sm:flex-row">
//         <div className="flex flex-col md:flex-row md:justify-start text-slate-200 lg:pr-96 ">
//           <div className="border-b-2 md:border-b-0  mb-4 md:mb-0 md:pr-8">
//             {data.desc}
//           </div>
          
//           <div className="md:pl-3 lg:pl-3 lg:gap-32 ">{data.desc1}</div>
//         </div>
//         <div className=" lg:py-20  ">
//           <Button variant="default" size="sm" className="text-base">
//             Get a free consultant
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default HowBanner


import { HowBannerType } from '@/utils/types'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

type Props = {}

const HowBanner = ({data}: HowBannerType) => {
  return (
    <section
      className="h-screen w-full grid grid-cols-1 justify-center items-center"
      style={{
        backgroundImage: `url(${data.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div className="text-slate-200 text-heading2 font-bold  ">
          {data.title}
        </div>
      <div className="flex max-sm:flex-col  justify-center text-slate-200  gap-10">
        <div className="sm:border-r-2  max-sm:border-b-2 max-sm:pb-7 lg:pr-6 border-h-2">
          {data.desc}
        </div>
        <div className="">{data.desc1}</div>
        <div className=" max-lg:mt-20 lg:mt-8">
          <Button variant="default" size="sm" className="text-base">
            Get a free consultant
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HowBanner
