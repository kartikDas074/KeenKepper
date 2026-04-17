import React, { useState } from 'react';
import Action from '../../Action/Action';
import NoAction from '../../Action/NoAction';

const RecentAction = ({recentAct}) => {
   const [precentAct,setPreAct]=useState(recentAct);
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
    return (
        <div>
            <div>
               <select
                onChange={(e) => FilterMe(e.target.value)}
                className="px-4 py-2 w-[40%] rounded-lg border text-sm text-[#1F2728] my-[20px] focus:outline-none"
                >
                <option value="all">Filter</option>
               <option value="all">All Activities</option>
               <option value="call">Calls 📞</option>
               <option value="text">Text 💬</option>
               <option value="video">Video 🎥</option>
              </select>
            </div>
                        

            {
               precentAct.length>0? precentAct.map((res,ind)=><Action key={ind} res={res} call={1}></Action>):<NoAction></NoAction>
            }
        </div>
    );
};

export default RecentAction;