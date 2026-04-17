import React from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { IoMdVideocam } from 'react-icons/io';
import { MdAddCall } from 'react-icons/md';

const Action = ({res,call}) => {
    console.log(res);
     let {name,date,action}=res;
    return (
        <div className='w-full bg-gray-200 shadow-sm '>
            <div className='w-full flex justify-start gap-[16px] m items-center px-[10px] py-[20px] '>
                <div className='flex justify-center items-center '>
                    {
                        action=='text'?<FaEnvelopeOpenText className='text-3xl font-bold text-[#0a1918]' />:action=='call'?<MdAddCall className='text-4xl text-[#f31212]' />:<IoMdVideocam className='text-3xl text-[#1623b7]' />
                    }
                </div>
                <div>
                    <p className='flex font-medium justify-start text-[20px] gap-[8px]'><span className='text-[#244D3F] font-bold'>{action}</span> <span className={`${call=='2'?'hidden':''} text-[#64748b]`}> with {name}</span></p>
                    <p className='font-medium text-[18px] text-[#64748B] '>{date}</p>
                </div>
            </div>
        </div>
    );
};

export default Action;