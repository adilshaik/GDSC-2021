import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const EventCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  let completed = true;
  return (
    <div
      data-aos='fade-left'
      className='max-w-4xl mx-auto rounded-xl my-20 p-4 flex items-center shadow-xl'
    >
      <div
        style={{ backgroundColor: '#ECEBFA' }}
        className='w-52 h-32 rounded-md flex flex-col text-center items-center justify-center'
      >
        <h4 className='font-extrabold text-xl italic'>02 Nov 2021</h4>
        <h4 className='uppercase my-1 text-lg font-bold text-gray-600 tracking-wide'>
          6:00 pm
        </h4>
      </div>
      <div className='w-full ml-4 p-2 flex flex-col'>
        <h3 className='text-xl font-semibold mb-2'>
          Introduction to 30 days of google cloud
        </h3>
        <p className='text-md font-semibold text-gray-500 pr-7'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
          temporibus dicta tempore, doloribus incidunt magni repudiandae id
          perferendis. Quas, hic!
        </p>
        {completed ? (
          <a href='' className='my-2 text-indigo-700 font-semibold underline'>
            Watch Video
          </a>
        ) : (
          <a href='' className='my-2 text-indigo-700 font-semibold underline'>
            Register
          </a>
        )}
      </div>
    </div>
  );
};
