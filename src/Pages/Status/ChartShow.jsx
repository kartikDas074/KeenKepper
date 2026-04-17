import React, { useState } from 'react';
import Pic from './Pic';
import BarDia from './BarDia';

const ChartShow = ({recentAct}) => {
    const data = [
    { name: 'Calls', count:0 },
    { name: 'Text', count: 0 },
    { name: 'Video', count:0 },
    ];
    
    if(recentAct.length>0){
    data[0].count= recentAct.filter(a => a.action === 'call').length;
    data[1].count=recentAct.filter(a => a.action === 'text').length;
    data[2].count= recentAct.filter(a => a.action === 'video').length;
    }

    const [chart,setChart]=useState('Pie Diagram');
    let Toggole=()=>{
        if(chart=='Pie Diagram')setChart('Bar Diagram');
        else setChart('Pie Diagram');
    }
    return (
        <div className='py-[40px] w-full max-w-[95vw] md:max-w-[80vw] mx-auto'>
            <div className='flex justify-between items-center '>
                <p className='text-[20px] md:text-[40px] font-bold text-[#1F2937]'>Friendship Analytics</p>
                <button onClick={Toggole} className='btn bg-[#1F2937] text-[#FFFFFF] text-2xl px-[10px] '>{chart}</button>
            </div>
            <div className='my-[30px] space-y-[100px] mb-[100px]'>
                <p className='text-[#244D3F]  text-[20px] font-semibold'>By interection type</p>
                {
                    chart=='Pie Diagram'?<Pic Info={data}></Pic>:<BarDia Info={data}></BarDia>
                }
            </div>
        </div>
    );
};

export default ChartShow;