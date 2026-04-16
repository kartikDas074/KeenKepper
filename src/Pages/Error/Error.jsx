import React from 'react';
import { useNavigate } from 'react-router';

const Error = () => {
  
  const navigate = useNavigate();
    return (
        <div className='min-h-screen bg-white'>
            <div className="min-h-screen  flex flex-col items-center justify-center px-4">
      <div className="relative">
        <h1 className="text-[12rem] font-black text-gray-200 select-none">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-[#e10426] mt-8">
            Lost in Space?
          </h2>
          <p className="text-red-500 mt-2 text-center max-w-sm font-semibold">
            The page you are looking for doesn't exist or has been moved to another URL.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all"
        >
         
          Go Back
        </button>

        <button
          onClick={() => navigate('/')}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-0.5"
        >
        
          Back to Home
        </button>
      </div>

      <div className="mt-20">
        <div className="flex gap-8 opacity-20">
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          <div className="w-16 h-1 bg-purple-600 rounded-full"></div>
          <div className="w-16 h-1 bg-indigo-600 rounded-full"></div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Error;