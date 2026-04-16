import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content p-10">
   <div className='flex flex-col justify-center items-center gap-[16px]'>
      <div className=" text-[24px] md:text-[30px] font-extrabold text-[#FFFFFF]">Keen<span className='text-[#FFFFFF]'>Keeper</span></div>
    <p className=" text-[16px] text-[#FFFFFF]/50">
      Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
    </p>
    
   </div>
     
    
  
  <nav>
    <p className=" text-[19px] text-[#FFFFFF] font-bold">Social Links</p>
    <div className="grid grid-flow-col gap-4">
      <a className=' h-[40px] w-[40px] rounded-full bg-[#FFFFFF] flex justify-center items-center '>
        <FaFacebook className='text-black text-2xl' />
      </a>
      <a className=' h-[40px] w-[40px] rounded-full bg-[#FFFFFF] flex justify-center items-center '>
       <FaInstagramSquare className='text-black text-2xl' />
      </a>
      <a className=' h-[40px] w-[40px] rounded-full bg-[#FFFFFF] flex justify-center items-center '>
         <BsTwitterX className='text-black text-2xl' />
      </a>
    </div>
    
  </nav>
  <hr className='w-full border border-[0.5px] border-black/10' />
  <div className='w-full flex flex-col md:flex-row justify-between items-center gap-[10px]'>
   <p>© 2026 KeenKeeper. All rights reserved.</p>
   <div className='flex justify-center items-center gap-[10px]'>
    <a href="">Privacy Policy</a>
    <a href="">Terms of Service</a>
    <a href="">Cookies</a>
   </div>
  </div>
  
</footer>
    );
};

export default Footer;