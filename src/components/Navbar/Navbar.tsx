"use client";
import React, { useState ,useEffect } from 'react';
import Image from 'next/image';
import NavbarLogo from '@/public/NavbarLogo.png';
import { TiArrowSortedDown } from "react-icons/ti";
import Link from 'next/link';
import Button from '../Button';

const Navbar = () => {
  

  const openSubDropdown = (subItem:any) => {
    // Set the active dropdown to the subItem and open the dropdown
    setActiveDropdown(subItem);
    setDropdownOpen(true);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const openDropdown = (item) => {
    setActiveDropdown(item);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
    setDropdownOpen(false);
  };

  return (
    <nav className="h-20 w-full fixed z-10 bg-black text-white p-4 2xl:px-64" style={{
        backgroundColor:
          scrollPosition > 100 ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
      }} onMouseLeave={closeDropdown} >
      <div className="flex justify-between" >
        <div>
          <Image src={NavbarLogo} alt="Navbar" />
        </div>
        <div>
          <ul className="flex gap-x-6 2xl:pt-2 ">
          <li onMouseEnter={() =>   openDropdown('Solution')  } className='flex cursor-pointer hover:text-yellow'>Solution  <span className='pt-1'><TiArrowSortedDown /></span></li>
            <li onMouseEnter={() =>   openDropdown('Service') } className='flex cursor-pointer hover:text-yellow'>Service   <span className='pt-1'><TiArrowSortedDown /></span></li>
            <li onMouseEnter={() =>   openDropdown('Industry')}  className='flex cursor-pointer hover:text-yellow'>Industry   <span className='pt-1'><TiArrowSortedDown /></span></li>
            <li onMouseEnter={() =>   openDropdown('Company') } className='flex cursor-pointer hover:text-yellow'>Company   <span className='pt-1'><TiArrowSortedDown /></span></li>
            <li className='hover:text-yellow '>Our Thinking</li>
            <li className='hover:text-yellow'>Case Studio</li>
          </ul>
        </div>
        <div>
          <Button className="bg-white  p-2">Contact Us</Button>
        </div>
      </div>
      {dropdownOpen && (
        <div className="absolute top-16 right-0 w-full bg-inherit  p-4 z-10">
         <ul>
      {activeDropdown === 'Solution' && (
        <ul onClick={() => setDropdownOpen(false)} className='relative left-[30.3rem] gap-y-9 cursor-pointer'>
          <li onClick={() => openSubDropdown('Data')}>Data</li>
          {activeDropdown === 'Data' && (
            <ul className='relative left-[630px] cursor-pointer'>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          )}
          <li>Artificial Intelligence</li>
          <li>Automation</li>
          <li>Blockchain</li>
          <li>Extended Reality</li>
          <li>Internet of Things</li>
        </ul>
      )}
            {activeDropdown === 'Service' && (
              <ul onClick={() => setDropdownOpen(false)} className='relative left-[36.6rem] cursor-pointer'>
                <li>Mobile</li>
                <li>Web</li>
                <li>Sass</li>
                <li>Back-end</li>
                <li>Cloud&Devops</li>
                <li>Dedicated Team</li>
                <li>Qa&Testing</li>
                <li>Technology Consulting</li>
                <li>Ui/Ux Design</li>
                <li>Support&Maintance</li>
              </ul>
            )}
            {activeDropdown === 'Industry' && (
              <ul onClick={() => setDropdownOpen(false)}  className='relative left-[42.8rem] cursor-pointer'>
                <li>HealtCare&BioTech</li>
                <li>Logistic&Transporention</li>
                <li>ManuFacturing&Supply Chain</li>
                <li>Retail</li>
                <li>Edtech & Elearning</li>
                <li>FinTech</li>
                <li>Ecommerce</li>
              </ul>
            )}
            {activeDropdown === 'Company' && (
              <ul onClick={() => setDropdownOpen(false)}  className='relative left-[48.95rem] cursor-pointer'>
                <li>About</li>
                <li>Careers</li>
                <li>How We are Work</li>
              </ul>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
