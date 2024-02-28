"use client";
import React from 'react'
import Itrex from '@/public/icons/itrex.svg'
import Link from 'next/link'
import { useEffect, useState } from 'react';

interface Props {
    
}

const Header = (props: Props) => {
    const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
    return (
        <header className='h-20 z-10 fixed w-full bg-black ' style={{
            backgroundColor: scrollPosition > 100 ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0)',
          }}>
            <div className='py-4'>
                <Link href='/'><Itrex/></Link>
            </div>-
            <div className=''>
                
            </div>
        </header>
    )
}

export default Header
