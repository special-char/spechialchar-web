import React from 'react';
import AboutBanner2Img from '@/public/images/AboutBanner2.webp';

const AboutBanner2 = () => {
  return (
    <section className='h-full w-full' style={{backgroundImage: `url(${AboutBanner2Img.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className='mx-4  my-12 md:mx-6 md:my-36'>
        <div className='text-white  '>
          <h6 className='text-4xl font-extrabold md:text-5xl lg:text-6xl 2xl:text-7xl'>We are hungrrrrry <br/><span className='text-yellow'>for your success</span></h6>
        </div>
      </div>
    </section>
  );
}

export default AboutBanner2;