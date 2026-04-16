import { Feather } from 'lucide-react';
import React, { use, useState } from 'react';
import { IoIosPersonAdd } from 'react-icons/io';
let friend=fetch('/friend.json').then(res=>res.json());
const Banner = () => {
    let cnt=0;
    let useme=use(friend);
    for(let i=0;i<useme.length;i++){
        if(useme[i].status=='Ontrack')cnt++;
    }
    let [count,setCount]=useState(cnt);
    return (
        <div className='w-full max-w-[90vw] md:max-w-[80vw] mx-auto pt-[30px] md:pt-[120px]'>
        <div className='flex flex-col justify-center items-center gap-[18px]'>
            <h1 className='text-[#1F2937] text-[24px] md:text-[48px] font-bold text-center'>Friends to keep close in your life</h1>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-[#FFFFFF]'>
                <IoIosPersonAdd />
                <p>Add a friend</p>
            </button>
        </div > 
        <div className='grid grid-cols-2 md:grid-cols-4 gap-[30px] my-[30px] md:my-[60px]'>
            <div className='px-[10px] py-[10px] rounded-[8px] bg-white shadow-sm flex flex-col justify-center items-center'>
                <h1 className='text-[#244D3F] text-[24px] md:text-[32px] font-semibold'>8</h1>
                <p className='text-[#64748B] text-[26px] md:text-[18px] font-medium'>Total Friends</p>
            </div>
            <div className='px-[10px] py-[10px] rounded-[8px] bg-white shadow-sm flex flex-col justify-center items-center'>
                <h1 className='text-[#244D3F] text-[24px] md:text-[32px] font-semibold'>{count}</h1>
                <p className='text-[#64748B] text-[26px] md:text-[18px] font-medium'>On Track</p>
            </div>
            <div className='px-[10px] py-[10px] rounded-[8px] bg-white shadow-sm flex flex-col justify-center items-center'>
                <h1 className='text-[#244D3F] text-[24px] md:text-[32px] font-semibold'>{useme.length-count}</h1>
                <p className='text-[#64748B] text-[26px] md:text-[18px] font-medium text-center'>Need Attention</p>
            </div>
            <div className='px-[10px] py-[10px] rounded-[8px] bg-white shadow-sm flex flex-col justify-center items-center'>
                <h1 className='text-[#244D3F] text-[24px] md:text-[32px] font-semibold'>8</h1>
                <p className='text-[#64748B] text-[26px] md:text-[18px] font-medium text-center'>Interactions This Month</p>
            </div>
        </div>  
        <div className='w-full border border-[0.5px] border-black/10 my-[30px] md:my-[50px]'></div> 
        
        </div>
    );
};

export default Banner;