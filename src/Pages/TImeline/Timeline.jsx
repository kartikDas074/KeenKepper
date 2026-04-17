import React, { useContext } from 'react';
import { RecentActivites } from '../../RecentActivites/RecentActivites';
import Action from '../../Action/Action';
import NoAction from '../../Action/NoAction';

const Timeline = () => {
    let {recentAct,setRecentAct}=useContext(RecentActivites);
    console.log(recentAct);
    return (
        <div className='w-full bg-[#F8FAFC]'>
            <div className='w-full flex flex-col gap-[16px] max-w-[90vw] md:max-w-[95vw] mx-auto gap-[16px] py-[50px] md:py-[60px] bg-[#'>
                 {  
                   
                   recentAct.length>0?recentAct.map((res,ind)=><Action key={ind} res={res} call={1}></Action>):<NoAction></NoAction>
                 }
            </div>
        </div>
    );
};

export default Timeline;