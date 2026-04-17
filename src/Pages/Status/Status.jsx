import React, { useContext } from 'react';
import { RecentActivites } from '../../RecentActivites/RecentActivites';
import NoAction from '../../Action/NoAction';
import ChartShow from './ChartShow';

const Status = () => {
    let {recentAct,setRecentAct}=useContext(RecentActivites);
    return (
        <div className='w-full bg-[#F8FAFC]'>
            <div>
                <ChartShow recentAct={recentAct}></ChartShow>
            </div>
        </div>
    );
};

export default Status;