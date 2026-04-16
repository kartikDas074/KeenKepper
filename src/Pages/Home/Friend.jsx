import React from 'react';

const Friend = ({me}) => {
   
    return (
        <div className='flex flex-col justify-center items-center shadow-sm py-[10px] rounded-[10px]'>
            <div  className='h-[110px] w-[110px]  bg-gray-200 rounded-[10px] flex flex-col justify-center items-center'>
                <img className='h-[110px] w-[110px] rounded-full' src={me.picture} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center space-y-[17px] my-[16px]'>
                <h1 className='text-[#1F2937] text-[20px] font-semibold '>
                     {
                        me.name
                     }
                </h1>
                <p>
                     {
                        me.days_since_contact
                     }
                     d ago
                </p>
                <div className='flex flex-wrap justify-center items-center gap-[8px]'>
                     {
                    me.tags.map((res,ind)=>
                    <div key={ind} className='flex justify-center items-center px-[4px] py-[4px] rounded-[5px] bg-[#CBFADB]  text-[#244D3F] text-[16px] font-semibold '>{res}</div>
                )
                }
                 </div>
                
                <div className={`text-[#FFFFFF] text-[18px] font-medium flex justify-center items-center px-[15px] py-[5px] rounded-[20px] max-w-[80%] ${me.status=='Ontrack'?'bg-[#244D3F]':me.status=='Overdue'?'bg-[#EF4444]':'bg-[#EFAD44]'}`}>{me.status}</div>

              
            </div>
        </div>
    );
};

export default Friend;