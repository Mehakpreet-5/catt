


import React from 'react';
import { Link } from 'react-router-dom';
import Seaa from '../assets/seaa.jpg';

function AboutPage() {
    return (
        <div className='flex mt-32 justify-center items-center '>
            {/* Image Section */}
            <div className='w-7/12 flex justify-center'>
                <img src={Seaa} alt="About" className='w-9/12 rounded-lg shadow-lg mt-7' />
            </div>
            {/* Text Section */}
            <div className='w-5/12 mt-10 space-y-5 mr-40'>
                <h1 className='border border-yellow-600  w-28 rounded-full bg-yellow-100
                 bg-opacity-30 py-1 mb-5 mx-0 text-center'> About
                </h1>
                <h1 className='font-bold text-4xl fontt'>Trusted By 150+ Satisfied Clients</h1>
                <p className='text-gray-700 text-sm'>
                    Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                </p>
                <ul className='list-disc space-x-20 text-gray-700 flex ml-2'>
                    <li>Easy Customization Options</li>
                    <li>Amazing Planning for Travel</li>
                </ul>
                <div className='mt-9'>
                    <Link to="/contact" className='block text-center bg-yellow-600
                    bg-opacity-60 text-gray-700 rounded-full px-5 py-2 w-36 s'>
                        Learn More →
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
