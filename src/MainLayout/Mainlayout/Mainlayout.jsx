import React, { useState } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import { RecentActivites } from '../../RecentActivites/RecentActivites';

const Mainlayout = () => {
      let [recentAct,setRecentAct]=useState([]);
    return (
        <div className='mainlayout'>
            <Header></Header>
            <RecentActivites.Provider value={{recentAct,setRecentAct}}>
                  <Outlet></Outlet>
            </RecentActivites.Provider>
            
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;