import React, { use } from 'react';
import Friend from './Friend';

const Friends = ({friend}) => {
    let useme=use(friend);
    return (
        <div >
              

              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[20px]'>
                {
                    useme.map((res,ind)=><Friend key={ind} me={res}></Friend>)
                }
              </div>
        </div>
    );
};

export default Friends;