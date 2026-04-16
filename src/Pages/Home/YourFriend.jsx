import React, { Suspense } from 'react';
import loadingAnimation from '../../assets/Loading.json'
import * as Lottie from 'lottie-react';
import Friends from './Friends';
let friens=fetch('/friend.json').then(res=>res.json());
const YourFriend = () => {
     let friend=friens;
    const LottieComponent = Lottie.default.default;
    return (
        <div className='w-full max-w-[90vw] md:max-w-[80vw] mx-auto '>
            <div className='text-[#244D3F] text-[24px] md:text-[32px] font-semibold'>
                Your Friends
              </div>  
              <Suspense  fallback={
                <div className="w-48 md:w-[300px] h-48 md:w-[300px] flex justify-center items-center mx-auto">
                 <LottieComponent 
                 animationData={loadingAnimation} 
                  loop={true} 
              />
                 </div>
            }>
                    <Friends friend={friend}></Friends>
            </Suspense>
        </div>
    );
};

export default YourFriend;