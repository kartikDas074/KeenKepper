import React, { useContext } from 'react';
import { RecentActivites } from '../../RecentActivites/RecentActivites';
import Action from '../../Action/Action';
import NoAction from '../../Action/NoAction';
import RecentAction from './RecentAction';

const Timeline = () => {
    let {recentAct,setRecentAct}=useContext(RecentActivites);
    console.log(recentAct);
    return (
        <div className='w-full bg-[#F8FAFC]'>
            <div className='w-full flex flex-col gap-[16px] max-w-[90vw] md:max-w-[95vw] mx-auto gap-[16px] py-[50px] md:py-[60px] '>
                <div className='text-[20px] md:text-[40px] font-bold text-[#1F2937]'>
                    TimeLine
                </div>
                <div className='w-full flex flex-col gap-[16px] max-w-[90vw] md:max-w-[95vw] mx-auto gap-[16px] py-[50px] md:py-[60px] '>
                

                {  
                   
                   recentAct.length>0?<RecentAction recentAct={recentAct}></RecentAction>:<NoAction></NoAction>
                 }
                </div>
                
            </div>
        </div>
    );
};

export default Timeline;