import React from 'react';
import * as Lottie from 'lottie-react';
import loadingAnimation from '../assets/Loading.json';
const NoAction = () => {
    const LottieComponent = Lottie.default.default;
    return (
        <div className="flex flex-col items-center justify-center p-10 min-h-[400px] text-center">
                {/* Lottie Animation */}
                <div className="w-48 md:w-[300px] h-48 md:w-[300px] flex justify-center items-center mx-auto ">
                 <LottieComponent 
                 animationData={loadingAnimation} 
                  loop={true} 
              />
                 </div>
                
               
                <h3 className="mt-4 text-xl font-semibold text-gray-700">No activities yet!</h3>
                <p className="text-gray-500 max-w-xs mt-2">
                    Start interacting with your friends to see your recent actions logged here.
                </p>
                
               
                <button className="mt-6 px-5 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-all shadow-lg shadow-blue-200">
                    Go to Home
                </button>
            </div>
    );
};

export default NoAction;