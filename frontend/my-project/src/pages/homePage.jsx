// import React from 'react';
// import Seaa from '../assets/seaa.jpg';

// function HomePage() {
//     return (
//         <div className='relative h-screen w-screen'>
//             <img src={Seaa} alt="" className='h-full w-full object-cover' />
//             <div className='absolute top-0 left-0 w-full h-full flex flex-col  bg-black bg-opacity-20
//              text-white p-5 '>
//                 <div className='mt-52 ml-32 justify-center items-center h-72 w-4/12'>
//                     <h1 className='text-6xl font-bold mb-2 text-center'>Discover Your</h1>
//                     <h2 className='text-5xl mb-4 text-center'>Perfect Getaway</h2>
//                     <p className='max-w-2xl text-center'>
//                         Welcome to Travel Goo! Let us help you find Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique impedit placeat aspernatur totam vel magnam cupiditate cumque, distinctio iure vero necessitatibus dolor explicabo, obcaecati exercitationem! Modi distinctio vel porro nihil.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HomePage;


import React from 'react';
import Seaa from '../assets/seaa.jpg';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <div className="relative h-screen w-screen overflow-hidden">
                {/* Background Image */}
                <img src={Seaa} alt="Sea background" className="h-full w-full " />

                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-20 text-white p-6">
                    <div className="text-center max-w-2xl">
                        <h1 className="text-5xl font-bold mb-4">Explore the Beauty of the World</h1>
                        <h2 className="text-2xl font-light mb-6">Your Journey Begins Here</h2>
                        <p className="mb-8">
                            Discover breathtaking destinations, unique experiences, and unforgettable moments.
                            Whether you're looking for an adventure in the mountains, a relaxing escape on a sandy beach,
                            or a cultural exploration in a bustling city, we've got you covered. Let us guide you to your
                            next great adventure.
                        </p>
                        <button className="px-6 py-3 bluee bg-opacity-20 hover:bg-blue-700 text-blue-950 rounded-lg font-semibold">
                            Start Your Journey
                        </button>
                    </div>
                </div>
            </div>

        
           
           
        </>
    );
}

export default HomePage;
