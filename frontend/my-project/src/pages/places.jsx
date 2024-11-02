

import React from 'react';
import Seaa from '../assets/seaa.jpg';

function Places() {
  return (
    <>
      <div className='KKK h-screen w-screen mt-32'>
        <div className='m-3  text-center space-y-4 mt-40 p-1'>
          <h1 className='font-bold text-5xl fontt mt-20'>Explore Destinations</h1>
          <h2 className='text-gray-700 text-lg'>Discover breathtaking locations to travel</h2>
        </div>

        {/* cards div*/}
        <div className='flex justify-center'>
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-72">
            <div className="relative h-40 overflow-hidden text-white rounded-md">
              <img src={Seaa} alt="Destination view" className="object-cover w-full h-full p-2" />
            </div>
            <div className="p-4 text-center">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                Website Review Check
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                The place is close to Barceloneta Beach
              </p>
              <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all 
              shadow-md hover:shadow-lg mt-4" >
                Read more
              </button>
            </div>
           
            </div>
       
        </div>
      </div>
    </>
  );
}

export default Places;


