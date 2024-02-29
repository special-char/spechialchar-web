import React from 'react';
import  Image  from 'next/image';
import { services} from '@/lib/constData'



const WebIcon = () => {
  return (
    <section className='h-full w-full'>
      <div className='mx-4 grid gap-y-4 md:mx-6 2xl:my-10 2xl:mx-0 2xl:gap-y-6'>
        <h6 className='text-2xl font-bold md:pr-10 lg:pr-20 2xl:text-[32px] 2xl:pr-0'>Our custom web development services help you break away from the ordinary</h6>
        <div className='text-sm md:text-lg md:pr-12 lg:pr-64 font-medium 2xl:text-2xl 2xl:pr-80'>
          Building successful web solutions since 2009, we have the expertise to build something great for you, too. Whatever your challenge is, there would be few things in the web development world that we havent worked with. Tap our custom web development services to create seamless web experiences that captivate. Our ITRex team delivers:
        </div>
        <div className='grid gap-y-6 md:grid md:grid-cols-3 md:gap-x-4 '>
          {services.map((service, index) => (
            <div key={index} className='grid gap-y-4 md:gap-y-4  2xl:gap-y-6'>
              <div className='object-cover 2xl:pb-4 '>
                <Image src={service.image} alt='web' className='h-8 w-8 md:h-10 md:w-10 2xl:h-14 2xl:w-14' width={100} height={100}/>
              </div>
              <h6 className='text-xl font-bold 2xl:text-2xl'>{service.title}</h6>
              <div className='text-gray-500 text-lg'>
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WebIcon;
