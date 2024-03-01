import React from 'react';
import BlogBannerImg from '@/public/AI-development-1-1920x667.webp';

const Blogbanner = () => {
  return (
    <section className='h-full w-full' style={{backgroundImage: `url(${BlogBannerImg.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className='mx-4  my-12 md:mx-6 md:my-36'>
        <div className='text-white  '>
          <h6 className='text-4xl font-bold md:text-5xl 2xl:text-6xl'>Changing the game  <br/><span className='text-yellow'>with advanced data solutions</span></h6>
        </div>
      </div>
    </section>
  );
}

export default Blogbanner;
