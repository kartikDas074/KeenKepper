import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Card from './Card';
import { RiDeleteBinLine, RiNotificationSnoozeFill } from 'react-icons/ri';
import { LuArchive } from 'react-icons/lu';
import { TiEdit } from 'react-icons/ti';
import { MdAddCall } from 'react-icons/md';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { IoMdVideocam } from 'react-icons/io';

const FriendsDetail = () => {
    let params=useParams();
    let Id=params.Id;
    let detial=useLoaderData();
    let Friend=detial.find(res=>res.id==Id);
    
    return (
        <div className='w-full bg-[#F8FAFC]'>
            <div className='w-full max-w-[90vw] md:max-w-[85vw] mx-auto py-[50px] md:py-[100px]'>
                 <div className='grid grid-cols-1 md:grid-cols-5 gap-[30px]'>
                     <div className='gap-[16px] col-span-2 flex flex-col justify-center items-center'>
                            <Card me={Friend}></Card>
                            <button  className='btn w-full'><RiNotificationSnoozeFill />Snooze In 2 Weeks</button>
                            <button  className='btn w-full'><LuArchive />Archive</button>
                            <button  className='btn w-full'><RiDeleteBinLine />Delete</button>
                     </div>
                     <div className=' col-span-3 flex flex-col justify-start items-center gap-[16px] md:gap-[30px]'>
                           <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-[16px]'>
                                 <div className='flex justify-center items-center shadow-sm flex-col px-[20px] py-[20px] rounded-[15px]'>
                                    <h2 className='text-[30px] font-semibold text-[#244D3F] text-center'>{Friend.days_since_contact}</h2>
                                    <p className='text-[18px] font-medium text-[#64748b] text-center'>Days Since Contact</p>
                                 </div>
                                 <div className='flex justify-center items-center shadow-sm flex-col px-[20px] py-[20px] rounded-[15px]'>
                                    <h2 className='text-[30px] font-semibold text-[#244D3F] text-center'>{Friend.goal}</h2>
                                    <p className='text-[18px] font-medium text-[#64748b] text-center'>Goal(Days)</p>
                                 </div>
                                 <div className='flex justify-center items-center shadow-sm flex-col px-[20px] py-[20px] rounded-[15px]'>
                                    <h2 className='text-[30px] font-semibold text-[#244D3F] text-center'>{Friend.next_due_date}</h2>
                                    <p className='text-[18px] font-medium text-[#64748b] text-center'>Next Due</p>
                                 </div>
                                 
                           </div>
                           <div className='w-full flex justify-between items-center shadow-sm  px-[20px] py-[20px] rounded-[15px]'>
                            <div>
                                   <p className='text-[20px] font-semibold text-[#244D3F] text-center'>Relationship Goal </p>
                                   <p className='text-[15px] font-medium text-[#64748b] text-center'>Connect Every {Friend.goal} Days</p>
                            </div>
                            <div> 
                                <button className='btn bg-gray-200'><TiEdit />Edit</button>
                            </div>
                           </div>
                           <div className=' flex flex-col w-full shadow-sm py-[10px] px-[15px] rounded-[20px] gap-[20px]'>
                            <div className='text-[15px] font-semibold text-[#244D3F] text-center text-start '>
                                Quick Check-In
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-[20px]'>
                                <div>
                                    <button className='btn flex flex-col h-[100px] px-[40px] bg-gray-300 px-[20px] py-[20px] w-full'>
                                    <p><MdAddCall className='text-2xl' /></p>
                                    <p className='text-[18px] font-semibold text-[#1F2937] text-center'>Call</p>
                                    </button>
                                    
                                </div>
                                
                                <div>
                                    <button className='btn flex flex-col h-[100px] px-[40px] bg-gray-300 px-[20px] py-[20px] w-full'>
                                    <p><FaEnvelopeOpenText className='text-2xl' /></p>
                                    <p className='text-[18px] font-semibold text-[#1F2937] text-center'>Text</p>
                                    </button>
                                    
                                </div>
                                <div>
                                    <button className='btn flex flex-col h-[100px] px-[40px] bg-gray-300 px-[20px] py-[20px] w-full'>
                                    <p><IoMdVideocam className='text-2xl' /></p>
                                    <p className='text-[18px] font-semibold text-[#1F2937] text-center'>Video</p>
                                    </button>
                                    
                                </div>
                            </div>
                           </div>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default FriendsDetail;