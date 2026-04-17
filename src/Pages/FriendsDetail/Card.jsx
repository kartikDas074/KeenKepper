import React from 'react';

const Card = ({me}) => {
    return (
        <div  className='flex flex-col justify-center items-center shadow-sm px-[10px] py-[10px] rounded-[10px] group relative border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 overflow-hidden hover:bg-[#c3b1b1]'>
            <div  className='h-[80px] w-[80px]   rounded-[10px] flex flex-col justify-center items-center'>
                <img className='h-[80px] w-[80px] rounded-full' src={me.picture} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center space-y-[14px] my-[16px]'>
                <h1 className='text-[#1F2937] text-[18px] font-semibold '>
                     {
                        me.name
                     }
                </h1>
                
                <div className={`text-[#FFFFFF] text-[16px] font-medium flex justify-center items-center px-[15px] py-[3px] rounded-[20px] max-w-[80%] ${me.status=='Ontrack'?'bg-[#244D3F]':me.status=='Overdue'?'bg-[#EF4444]':'bg-[#EFAD44]'}`}>{me.status}</div>

                <div className='flex flex-wrap justify-center items-center gap-[8px]'>
                     {
                    me.tags.map((res,ind)=>
                    <div key={ind} className='flex justify-center items-center px-[4px] py-[4px] rounded-[5px] bg-[#CBFADB]  text-[#244D3F] text-[14px] font-semibold '>{res}</div>
                )
                }
                 </div>
                
                <div>
                    <p className='text-[12px] font-medium text-[#64748B] text-center '>{me.bio}</p>
                </div>
                
                <div>
                    <p className='text-[14px] font-medium text-[#64748B] text-center '>{me.email}</p>
                </div>
              
            </div>
        </div>
    );
};

export default Card;