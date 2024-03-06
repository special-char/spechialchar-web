import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavbarLogo from "@/public/NavbarLogo.png";
import ArrowUp from '@/public/icons/triangle-bottom-arrow-icon.svg'
import ArrowDown from '@/public/icons/triangle-top-arrow-icon.svg'
import Link from "next/link";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openDropdown = (dropdownLink) => {
    setActiveDropdown(dropdownLink);
  };
  // <---- Link ----->
  const menuItems = [
    { id: 1, link: "Services", sublinks: ["Mobile", "Web", "Sass", "Back-end", "Ui/Ux Design"] },
    { id: 2, link: "Industry", sublinks: ["Edtech & Elearning", "Ecommerce"] },
    { id: 3, link: "Company", sublinks: ["About", "Careers", "How We Work"] },
    { id: 4, link: "Our Thinking" },
    { id: 5, link: "Case Studio" }
  ];

  return (
    <nav
      className="h-full w-full lg:container pt-4"
      style={{
        backgroundColor:
          scrollPosition > 100 ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
      }}
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image src={NavbarLogo} alt="navbar" className="h-9 w-24" />
        </Link>
        <ul className="flex justify-between space-x-5 text-white">
          {menuItems.map((menuItem) => (
            <li key={menuItem.id} className="relative">
              <Link href={`/${menuItem.link.toLowerCase()}`}>
                <span
                  className="cursor-pointer hover:text-yellow flex gap-x-2 "
                  onMouseEnter={() => openDropdown(menuItem.link)}
                >
                  {menuItem.link}
                  {menuItem.sublinks && (
                    <span>
                      <ArrowUp
                        className={`fill-white hover:fill-yellow pt-2 ${activeDropdown === menuItem.link ? "hidden" : ""
                          }`}
                      />
                      <ArrowDown
                        className={`fill-white hover:fill-yellow pt-2 ${activeDropdown === menuItem.link ? "" : "hidden"
                          }`}
                      />

                    </span>
                  )}
                </span>
              </Link>
              {activeDropdown === menuItem.link && menuItem.sublinks && (
                <div
                  className="absolute left-0  top-10  w-max z-10  "
                  style={{
                    backgroundColor:
                      scrollPosition > 100
                        ? "rgba(0, 0, 0, 1)"
                        : "rgba(0, 0, 0, 0)",
                  }}
                >
                  {menuItem.sublinks.map((sublink, index) => (
                    <Link href={`/${menuItem.link.toLowerCase()}/${sublink.toLowerCase()}`} key={index}>
                      <span className="text-white flex flex-col flex-wrap  ">{sublink}</span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div>
          <button className="bg-transparent border border-white py-1 px-4 text-white">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;








// ul
// loop start li -> relative
// sublink ?
// yes
// span title
// sublink loop div -> absolute bottom 0 100%
// no
// link title

/* obj = [
  {
  id: num
  title: ""
  link : ""
  sublinks : []
}
]*/

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { TiArrowSortedDown, TiThMenu } from "react-icons/ti";
// import ArrowUp from '@/public/icons/triangle-bottom-arrow-icon.svg'
// import Arrow from "@/public/icons/arrowdown.svg";
// import Button from "../Button";
// import Facebook from "@/public/icons/facebook.svg";
// import Instagram from "@/public/icons/instagram.svg";
// import Linkedin from "@/public/icons/Linkedin.svg";
// import Youtube from "@/public/icons/youtube.svg";
// import Twitter from "@/public/icons/twitter.svg";
// import Link from "next/link";

// const Navbar = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const openSubDropdown = (subItem: any) => {
//     setActiveDropdown(subItem);
//     setDropdownOpen(true);
//   };
//   const openDropdown = (item: string | React.SetStateAction<null>) => {
//     setActiveDropdown(item);
//     setDropdownOpen(true);
//   };

// useEffect(() => {
//   const handleScroll = () => {
//     setScrollPosition(window.scrollY);
//   };

//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);

//   const closeDropdown = () => {
//     setActiveDropdown(null);
//     setDropdownOpen(false);
//   };
//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <section
//       className="h-20 lg:h-10 w-full fixed md:px-12  bg-black text-white p-4  lg:px-container"
//       style={{
//         backgroundColor:
//           scrollPosition > 100 ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
//       }}
//       onMouseLeave={closeDropdown}
//     >
//       <div className="flex justify-between items-center overflow-x-hidden">
//         <div className="relative">
//           <Image src={NavbarLogo} alt="Navbar" className="h-7 w-16 md:w-20 md:h-9 " />
//         </div>
//         <div className="lg:hidden ">
//           <TiThMenu
//             className="text-white cursor-pointer "
//             size={30}
//             onClick={toggleMobileMenu}
//           />
//         </div>
//         <div className="hidden lg:flex justify-center gap-x-6 ">
//           <li
//             onMouseEnter={() => openDropdown("Service")}
//             className="flex cursor-pointer gap-2  "
//           >
//             <div className="hover:text-yellow">Service</div>{" "}
//             <span
//               className={` ${
//                 activeDropdown === "Service" && dropdownOpen ? "rotate-240" : ""
//               }`}
//             >
//               <Arrow />
//             </span>{" "}
//             {activeDropdown === "Service" && (
//               <div className="absolute left-0 top-16  bg-inherit w-full z-10 bg-black ">
//                 <div className="bg-black  "    style={{
//         backgroundColor:
//           scrollPosition > 100 ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
//       }}>
//                   <ul
//                     onClick={() => setDropdownOpen(false)}
//                     className="relative lg:left-[210px] 2xl:left-[570px] pb-10 pt-4 cursor-pointer space-y-4 "
//                   >
//                     <li>Mobile</li>
//                     <li>Web</li>
//                     <li>Sass</li>
//                     <li>Back-end</li>
//                     <li>Ui/Ux Design</li>
//                   </ul>
//                 </div>
//               </div>
//             )}
//           </li>
//           <li
//             onMouseEnter={() => openDropdown("Industry")}
//             className="flex cursor-pointer gap-2"
//           >
//             <div className="hover:text-yellow">Industry</div>{" "}
//             <span
//               className={` ${
//                 activeDropdown === "Industry" && dropdownOpen
//                   ? "rotate-240"
//                   : ""
//               }`}
//             >
//               <Arrow />
//             </span>
//             <div className="absolute top-16  bg-inherit  z-10 w-full left-0">
//               {activeDropdown === "Industry" && (
//                 <div className="bg-black"    style={{
//                   backgroundColor:
//                     scrollPosition > 100 ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
//                 }}>
//                   <ul
//                     onClick={() => setDropdownOpen(false)}
//                     className="relative lg:left-80 2xl:left-[680px] pb-10 pt-4 cursor-pointer  space-y-4"
//                   >
//                     <li>Edtech & Elearning</li>
//                     <li>Ecommerce</li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </li>
//           <li
//             onMouseEnter={() => openDropdown("Company")}
//             className="flex cursor-pointer gap-2"
//           >
//             <div className="hover:text-yellow">Company</div>{" "}
//             <span
//               className={` ${
//                 activeDropdown === "Company" && dropdownOpen ? "rotate-240" : ""
//               }`}
//             >
//               <Arrow />
//             </span>
//             <div className="absolute top-16  bg-inherit  z-10 w-full left-0">
//               {activeDropdown === "Company" && (
//                 <div className="bg-black"   style={{
//                   backgroundColor:
//                     scrollPosition > 100 ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
//                 }}>
//                   <ul
//                     onClick={() => setDropdownOpen(false)}
//                     className="relative left-[440px] 2xl:left-[800px] pb-10 pt-4  cursor-pointer  space-y-4"
//                   >
//                     <li>About</li>
//                     <li>Careers</li>
//                     <li>How We are Work</li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </li>
//           <li className="hover:text-yellow list-none">Our Thinking</li>
//           <li className="hover:text-yellow list-none">Case Studio</li>
//         </div>

//         <div className="hidden lg:block">
//           <div className="">
//             <button className="bg-transparent border border-white py-1 px-4">
//               Contact Us
//             </button>
//           </div>
//           {/* <Button className="bg-slate-600 p-2 px-6">Contact Us</Button> */}
//         </div>
//       </div>
//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden fixed top-0 left-0 w-full h-full md:px-12 lg:px-container bg-black bg-opacity-100 px-6 pt-6 overflow-y-scroll no-scrollbar">
//           <div className="text-white text-2xl flex flex-col  ">
//             <div className="flex justify-between">
//               <div>
//                 <div>
//                   <Image src={NavbarLogo} alt="nav" className="h-7 w-16" />
//                 </div>
//               </div>
//               <span
//                 onClick={toggleMobileMenu}
//                 className="cursor-pointer text-3xl relative "
//               >
//                 &times;
//               </span>
//             </div>
//             <div className="flex flex-col gap-y-10 pt-12 pb-8">
//               {/* <li
//                 onMouseEnter={() => openDropdown("Service")}
//                 className="grid grid-cols-2 gap-x-56 cursor-pointer  gap-2"
//               >
//                 <div className="hover:text-yellow">Service </div>
//                 <div
//                   className={`pt-1   ${
//                     activeDropdown === "Service" && dropdownOpen
//                       ? "rotate-180"
//                       : ""
//                   } `}
//                 >
//                   <Arrow />
//                 </div>{" "}
//                 {activeDropdown === "Service" && (
//                   <div className="relative   bg-inherit  z-10 ">
//                     <ul
//                       onClick={() => setDropdownOpen(false)}
//                       className="  cursor-pointer space-y-3"
//                     >
//                       <li>Mobile</li>
//                       <li>Web</li>
//                       <li>Sass</li>
//                       <li>Back-end</li>
//                       <li>Ui/Ux Design</li>
//                     </ul>
//                   </div>
//                 )}
//               </li>
//               <li
//                 onMouseEnter={() => openDropdown("Industry")}
//                 className="grid grid-cols-2 gap-x-56  cursor-pointer gap-2 "
//               >
//                 <div className="hover:text-yellow">Industry</div>{" "}
//                 <span
//                   className={` pt-1  ${
//                     activeDropdown === "Industry" && dropdownOpen
//                       ? " rotate-180"
//                       : ""
//                   }`}
//                 >
//                   <Arrow />
//                 </span>
//                 <div className="relative  bg-inherit  z-10">
//                   {activeDropdown === "Industry" && (
//                     <ul
//                       onClick={() => setDropdownOpen(false)}
//                       className="  cursor-pointer space-y-3"
//                     >
//                       <li>Edtech&Elearning</li>
//                       <li>Ecommerce</li>
//                     </ul>
//                   )}
//                 </div>
//               </li>
//               <li
//                 onMouseEnter={() => openDropdown("Company")}
//                 className="grid grid-cols-2 gap-x-56  cursor-pointer gap-2"
//               >
//                 <div className="hover:text-yellow">Company</div>{" "}
//                 <span
//                   className={`pt-1  ${
//                     activeDropdown === "Company" && dropdownOpen
//                       ? " rotate-180"
//                       : ""
//                   }`}
//                 >
//                   <Arrow />
//                 </span>
//                 <div className="relative   bg-inherit  z-10">
//                   {activeDropdown === "Company" && (
//                     <ul
//                       onClick={() => setDropdownOpen(false)}
//                       className="  cursor-pointer space-y-3 "
//                     >
//                       <li>About</li>
//                       <li>Careers</li>
//                       <li>How We are Work</li>
//                     </ul>
//                   )}
//                 </div>
//               </li> */}
//               <details className="group" >
//                 <summary className="list-none flex justify-between">
//                   <p className="text-2xl font-bold hover:text-yellow">Services</p>
//                   <p className="group-open:rotate-180 transition-all">
//                     <ArrowUp className=" fill-white  hover:fill-yellow"/>
//                   </p>
//                 </summary>
//                 <div  className="pt-4 space-y-6 pl-4">

//                 <p className="text-xl">Mobile</p>
//                 <p className="text-xl">Web</p>
//                 <p className="text-xl">Sass</p>
//                 <p className="text-xl">Back-End</p>
//                 <p className="text-xl">Ui/Ux Design</p>
//                 </div>
//               </details>

//               <details className="group" >
//                 <summary className="list-none flex justify-between">
//                   <p className="text-2xl font-bold hover:text-yellow">Industry</p>
//                   <p className="group-open:rotate-180 transition-all">
//                     <ArrowUp className=" fill-white  hover:fill-yellow"/>
//                   </p>
//                 </summary>
//                 <div  className="pt-4 space-y-6 pl-4">

//                 <p className="text-xl">Edtech & Elearning</p>
//                       <p className="text-xl">Ecommerce</p>
//                 </div>
//               </details>

//               <details className="group" >
//                 <summary className="list-none flex justify-between">
//                   <p className="text-2xl font-bold hover:text-yellow">Company</p>
//                   <p className="group-open:rotate-180 transition-all">
//                     <ArrowUp className=" fill-white  hover:fill-yellow"/>
//                   </p>
//                 </summary>
//                 <div  className="pt-4 space-y-6 pl-4">

//                 <p className="text-xl">Edtech & Elearning</p>
//                       <p className="text-xl">Ecommerce</p>
//                 </div>
//               </details>
//               <li className="hover:text-yellow list-none font-bold">Our Thinking</li>
//               <li className="hover:text-yellow list-none font-bold">Case Studio</li>
//             </div>

//             <Button className="bg-inherit p-12 text-2xl mr-5  ">
//               Contact Us
//             </Button>

//             <div className="py-7">
//               <div className="flex flex-col  ">
//                 <a className="text-xl">hello@itrexgroup.com</a>
//                 <a className="text-xl">+1 213 436 7785</a>
//               </div>
//               <div className="flex justify-between pt-5">
//               <div>
//                 <Link href={"#"}>
//                   <Facebook />
//                 </Link>
//               </div>
//               <div>
//                 <Link href={"#"}>
//                   <Instagram />
//                 </Link>
//               </div>
//               <div className="pt-1">
//                 <Link href={"#"}>
//                   <Youtube />
//                 </Link>
//               </div>
//               <div>
//                 <Link
//                   href={"https://www.linkedin.com/company/thespecialcharacter/"}
//                 >
//                   <Linkedin />
//                 </Link>
//               </div>
//               <div>
//                 <Link href={"https://twitter.com/TheSpecialChar"}>
//                   <Twitter />
//                 </Link>
//               </div>
//             </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Navbar;
