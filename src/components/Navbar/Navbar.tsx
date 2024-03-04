import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import NavbarLogo from '@/public/NavbarLogo.png';
import { TiArrowSortedDown, TiThMenu } from "react-icons/ti";
import Arrow from "@/public/icons/arrowdown.svg"
import Button from '../Button';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const openSubDropdown = (subItem: any) => {
    setActiveDropdown(subItem);
    setDropdownOpen(true);
  };
  const openDropdown = (item) => {
    setActiveDropdown(item);
    setDropdownOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const closeDropdown = () => {
    setActiveDropdown(null);
    setDropdownOpen(false);
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };


  return (
    <nav className="h-20 w-full fixed z-10 bg-black text-white p-4 2xl:px-64" style={{
      backgroundColor:
        scrollPosition > 100 ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
    }} onMouseLeave={closeDropdown}>
      <div className="flex justify-between ">
        <div>
          <Image src={NavbarLogo} alt="Navbar" />
        </div>
        <div className="lg:hidden">
          <TiThMenu className="text-white cursor-pointer" size={30} onClick={toggleMobileMenu} />
        </div>
        <div className="hidden lg:flex justify-center gap-x-6 2xl:pt-2  " >
          <li onMouseEnter={() => openDropdown('Service')} className='flex cursor-pointer gap-2'><div className='hover:text-yellow'>Service</div>    <span className={` ${activeDropdown === 'Service' && dropdownOpen ? 'rotate-180' : ''}`}><Arrow /></span>  {activeDropdown === 'Service' && (
            <div className="absolute top-16  bg-inherit  z-10">
              <ul onClick={() => setDropdownOpen(false)} className='relative  cursor-pointer'>
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
            </div>
          )}</li>
          <li onMouseEnter={() => openDropdown('Industry')} className='flex cursor-pointer gap-2'><div className='hover:text-yellow'>Industry</div>  <span className={` ${activeDropdown === 'Industry' && dropdownOpen ? 'rotate-180' : ''}`}><Arrow /></span>
            <div className="absolute top-16  bg-inherit  z-10">
              {activeDropdown === 'Industry' && (
                <ul onClick={() => setDropdownOpen(false)} className='relative  cursor-pointer'>
                  <li>HealtCare&BioTech</li>
                  <li>Logistic&Transporention</li>
                  <li>ManuFacturing&Supply Chain</li>
                  <li>Retail</li>
                  <li>Edtech & Elearning</li>
                  <li>FinTech</li>
                  <li>Ecommerce</li>
                </ul>
              )}
            </div>
          </li>
          <li onMouseEnter={() => openDropdown('Company')} className='flex cursor-pointer gap-2'><div className='hover:text-yellow'>Company</div>    <span className={` ${activeDropdown === 'Company' && dropdownOpen ? 'rotate-180' : ''}`}><Arrow /></span>
            <div className="absolute top-16  bg-inherit  z-10">
              {activeDropdown === 'Company' && (
                <ul onClick={() => setDropdownOpen(false)} className='relative  cursor-pointer'>
                  <li>About</li>
                  <li>Careers</li>
                  <li>How We are Work</li>
                </ul>
              )}
            </div>
          </li>
          <li className='hover:text-yellow list-none'>Our Thinking</li>
          <li className='hover:text-yellow list-none'>Case Studio</li>

        </div>

        <div className='hidden lg:block'>
          <Button className="bg-slate-600 p-2">Contact Us</Button>
        </div>
      </div>
      {/* Mobile Menu */}
      {
        mobileMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex  pl-10 pt-14" >
            <div className="text-white text-2xl flex flex-col gap-y-4" >
              <span onClick={toggleMobileMenu} className="absolute top-4 right-4 cursor-pointer text-3xl">&times;</span>
              <div className="flex flex-col gap-y-2">

                <li onMouseEnter={() => openDropdown('Service')} className='grid grid-cols-2 cursor-pointer  gap-2'><div className='hover:text-yellow' >Service </div><div className={`pt-1  ${activeDropdown === 'Service' && dropdownOpen ? 'rotate-180' : ''} `}><Arrow /></div>  {activeDropdown === 'Service' && (
                  <div className="relative   bg-inherit  z-10">
                    <ul onClick={() => setDropdownOpen(false)} className='  cursor-pointer'>
                      <li>Mobile</li>
                      <li>Web</li>
                      <li>Sass</li>
                      <li>Back-end</li>
                      <li>Ui/Ux Design</li>
                    </ul>
                  </div>
                )}</li>
                <li onMouseEnter={() => openDropdown('Industry')} className='grid grid-cols-2 cursor-pointer gap-2'><div className='hover:text-yellow'>Industry</div>  <span className={` pt-1  ${activeDropdown === 'Industry' && dropdownOpen ? ' rotate-180' : ''}`}><Arrow /></span>
                  <div className="relative  bg-inherit  z-10">
                    {activeDropdown === 'Industry' && (
                      <ul onClick={() => setDropdownOpen(false)} className='  cursor-pointer'>
                        <li>Edtech & Elearning</li>
                        <li>Ecommerce</li>
                      </ul>
                    )}
                  </div>
                </li>
                <li onMouseEnter={() => openDropdown('Company')} className='grid grid-cols-2 cursor-pointer gap-2'><div className='hover:text-yellow'>Company</div>    <span className={`pt-1  ${activeDropdown === 'Company' && dropdownOpen ? ' rotate-180' : ''}`}><Arrow /></span>
                  <div className="relative   bg-inherit  z-10">
                    {activeDropdown === 'Company' && (
                      <ul onClick={() => setDropdownOpen(false)} className='  cursor-pointer'>
                        <li>About</li>
                        <li>Careers</li>
                        <li>How We are Work</li>
                      </ul>
                    )}
                  </div>
                </li>
                <li className='hover:text-yellow list-none'>Our Thinking</li>
                <li className='hover:text-yellow list-none'>Case Studio</li>

              </div>
              <Button className="bg-inherit p-2 mr-5">Contact Us</Button>
            </div>
          </div>
        )
      }
    </nav >
  );
};

export default Navbar;
