"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import NavbarLogo from '@/public/NavbarLogo.png';
import { TiArrowSortedDown } from "react-icons/ti";
import Link from 'next/link';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (item:any) => {
    // If the clicked item is already active and dropdown is open, close it
    if (activeDropdown === item && dropdownOpen) {
      setActiveDropdown(null);
      setDropdownOpen(false);
    } else {
      // Otherwise, set the active dropdown and open the dropdown
      setActiveDropdown(item);
      setDropdownOpen(true);
    }
  };

  const openSubDropdown = (subItem:any) => {
    // Set the active dropdown to the subItem and open the dropdown
    setActiveDropdown(subItem);
    setDropdownOpen(true);
  };

  return (
    <nav className="h-full w-full bg-black text-white p-4 2xl:px-64">
      <div className="flex justify-between">
        <div>
          <Image src={NavbarLogo} alt="Navbar" />
        </div>
        <div>
          <ul className="flex gap-x-6 2xl:pt-2 ">
            <li onClick={() => toggleDropdown('Solution')} className='flex cursor-pointer hover:text-yellow-300'>Solution  <span className='pt-1'><TiArrowSortedDown /></span></li>
            <li onClick={() => toggleDropdown('Service')} className='flex cursor-pointer hover:text-yellow-300'>Service   <span className='pt-1'><TiArrowSortedDown /></span></li>
            <li onClick={() => toggleDropdown('Industry')} className='flex cursor-pointer hover:text-yellow-300'>Industry   <span className='pt-1'><TiArrowSortedDown /></span></li>
            <li onClick={() => toggleDropdown('Company')} className='flex cursor-pointer hover:text-yellow-300'>Company   <span className='pt-1'><TiArrowSortedDown /></span></li>
            <li className='hover:text-yellow-300 '>Our Thinking</li>
            <li className='hover:text-yellow-300'>Case Studio</li>
          </ul>
        </div>
        <div>
          <button className="bg-slate-600 border border-white p-2">Contact Us</button>
        </div>
      </div>
      {dropdownOpen && (
        <div className="absolute top-16 right-0 w-full bg-black  p-4 z-10">
         <ul>
      {activeDropdown === 'Solution' && (
        <ul onClick={() => setDropdownOpen(false)} className='relative left-[530px] cursor-pointer'>
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
              <ul onClick={() => setDropdownOpen(false)} className='relative left-[630px] cursor-pointer'>
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
              <ul onClick={() => setDropdownOpen(false)}  className='relative left-[730px] cursor-pointer'>
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
              <ul onClick={() => setDropdownOpen(false)}  className='relative left-[830px] cursor-pointer'>
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
