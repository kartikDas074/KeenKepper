import React from 'react';
import { GoGraph } from 'react-icons/go';
import { IoIosHome } from 'react-icons/io';
import { RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';
const Navbar = () => {
    return (
        <div className='navbar bg-base-100 shadow-sm py-[18px] md:py-[20px]'>
               <div className="flex justify-between items-center w-full max-w-[90vw] md:max-w-[85vw] mx-auto" >
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-[5px]">
      <li>
        <NavLink to='/' className={({isActive})=> isActive?'text-[#FFFFFF] bg-[#244D3F]':''}>
        <div className='flex justify-center items-center gap-1 text-[16px] font-semibold'>
            <IoIosHome />
            <p>Home</p>
        </div>
        </NavLink>
        </li>
      <li >
        <NavLink to='/TimeLine' className={({isActive})=> isActive?'text-[#FFFFFF] bg-[#244D3F]':''}>
            <div className='flex justify-center items-center gap-1 text-[16px] font-semibold'>
                <RiTimeLine />
                <p>TimeLine</p>
            </div>
        </NavLink>
      </li>
      <li>
        <NavLink to='/Status' className={({isActive})=> isActive?'text-[#FFFFFF] bg-[#244D3F]':''}>
            <div className='flex justify-center items-center gap-1 text-[16px] font-semibold'>
                <GoGraph />
                <p>Status</p>
            </div>
        </NavLink>
      </li>
    </ul>
    </div>
    <div className=" text-[24px] md:text-[30px] font-extrabold text-[#1F2937]">Keen<span className='text-[#244D3F]'>Keeper</span></div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-0.5">
      <li>
        <NavLink to='/' className={({isActive})=> isActive?'text-[#FFFFFF] bg-[#244D3F]':''}>
        <div className='flex justify-center items-center gap-1 text-[16px] font-semibold'>
            <IoIosHome />
            <p>Home</p>
        </div>
        </NavLink>
        </li>
      <li >
        <NavLink to='/TimeLine' className={({isActive})=> isActive?'text-[#FFFFFF] bg-[#244D3F]':''}>
            <div className='flex justify-center items-center gap-1 text-[16px] font-semibold'>
                <RiTimeLine />
                <p>TimeLine</p>
            </div>
        </NavLink>
      </li>
      <li>
        <NavLink to='/Status' className={({isActive})=> isActive?'text-[#FFFFFF] bg-[#244D3F]':''}>
            <div className='flex justify-center items-center gap-1 text-[16px] font-semibold'>
                <GoGraph />
                <p>Status</p>
            </div>
        </NavLink>
      </li>
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;