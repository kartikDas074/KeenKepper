import React, { useState } from 'react';
import Action from '../../Action/Action';
import NoAction from '../../Action/NoAction';

const RecentAction = ({recentAct}) => {
   const [precentAct,setPreAct]=useState(recentAct);
   const [namesrc,setNameSrc] =useState('');
   const setme=(str)=>{
    let pk=recentAct.filter(res=>res.action==str);
    setPreAct(pk);
   }
   const FilterMe=(str)=>{
    if(str=='text'||str=='call'||str=='video'){
         setme(str)
    }else {
        setPreAct(recentAct);
    }
   }
  
   const ClickSort=()=>{
        const sorting=[...precentAct].sort((a,b)=>{
          const dateA= new Date(`${a.date} ${a.time}`);
          const dateB=new Date(`${b.date} ${b.time}`);
          return dateB-dateA;
   })
      setPreAct(sorting);
   }

   const handleClick=(e)=>{
      setNameSrc(e.target.value);
   }
   const searchme=(e)=>{
      if(e.key=='Enter'){
          let pk=recentAct.filter(res=>res.name==namesrc);
          setPreAct(pk);
      }
   }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-[20px] my-[18px]'>
                <div className='w-full'>
               <select
                onChange={(e) => FilterMe(e.target.value)}
                className="px-4 w-full py-2 rounded-lg border text-sm text-[#1F2728] my-[20px] focus:outline-none"
                >
                <option value="all">Filter</option>
               <option value="all">All Activities</option>
               <option value="call">Calls 📞</option>
               <option value="text">Text 💬</option>
               <option value="video">Video 🎥</option>
              </select>
            </div>

            <div>
                <button onClick={ClickSort} className='btn w-full btn-primary'>sort</button>
            </div>

            <div>
               <input 
                 type="search" 
                 name="name" 
                 onChange={handleClick}
                 onKeyDown={searchme}
                 placeholder="Search friends by name..."
                 className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white shadow-sm placeholder:text-gray-400"
             />
            </div>
            </div>
            
                        
           <div className='flex flex-col justify-center items-center gap-[16px]'>
            {
               precentAct.length>0? precentAct.map((res,ind)=><Action key={ind} res={res} call={1}></Action>):<NoAction></NoAction>
            }
           </div>
            
        </div>
    );
};

export default RecentAction;