"use client";
import Image from 'next/image';
import React from 'react';
import Blog1 from '../../../public/Blog1.webp';
import Blog2  from '../../../public/Blog2.webp'

const blogs = [
  {
    id: 1,
    image: Blog1,
    categories: ['Big Data', 'Product Development'],
    title: 'Mastering data discovery: A Practical Manual',
    link: '#'
  },
  {
    id: 2,
    image: Blog2,
    categories: ['Artificial Intelligence', 'FinTech','Product Development'],
    title: 'Mastering data discovery: A Practical Manual',
    link: '#'
  },
  {
    id: 3,
    image: Blog1,
    categories: ['Big Data', 'Product Development'],
    title: 'Mastering data discovery: A Practical Manual',
    link: '#'
  },
  {
    id: 4,
    image: Blog2,
    categories: ['Artificial Intelligence', 'FinTech','Product Development'],
    title: 'Mastering data discovery: A Practical Manual',
    link: '#'
  },
  {
    id: 5,
    image: Blog1,
    categories: ['Big Data', 'Product Development'],
    title: 'Mastering data discovery: A Practical Manual',
    link: '#'
  },
  {
    id: 6,
    image: Blog2,
    categories: ['Artificial Intelligence', 'FinTech','Product Development'],
    title: 'Mastering data discovery: A Practical Manual',
    link: '#'
  },
 
];

const Blog = () => {
  return (
    <section className='h-screen w-full  '>
        <div className='2xl:grid 2xl:grid-cols-2 2xl:m-0   '>

      {blogs.map(blog => (
        <div key={blog.id} className='flex flex-col gap-3 m-4 md:gap-5 md:pb-20 pb-10  '>
          <div>
            <Image src={blog.image} alt='blog' className='object-cover w-screen h-60 md:h-[450px] ' />
          </div>
          <div className=''>
            <div className="flex gap-1 text-nowrap flex-wrap">
              {blog.categories.map((category, index) => (
                <React.Fragment key={index}>
                  <a href="#" className='text-base'>{category}</a>
                  {index !== blog.categories.length - 1 && <span className='text-base'>/</span>}
                </React.Fragment>
              ))}
            </div>
            <div className='py-4 hover:text-blue-400'>
              <a href={blog.link}>
                <span className='text-2xl font-bold md:text-4xl'>{blog.title}</span>
              </a>
            </div>
          </div>
        </div>
      ))}
        </div>
    </section>
  );
}

export default Blog;
