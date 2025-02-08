import React from 'react';

function Catogary() {
  return (
    <>
        <div>
          <h3 className='font-semibold'>Find the best Goggal</h3>
        </div>
        <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button className='mt-4 px-3 py-2 font-bold bg-gray-200 hover:bg-green-500 rounded-lg hover:text-white'>All</button>
        <button className='mt-4 px-3 py-2 font-bold bg-gray-200 hover:bg-green-500 rounded-lg hover:text-white'>Lunch</button>
        <button className='mt-4 px-3 py-2 font-bold bg-gray-200 hover:bg-green-500 rounded-lg hover:text-white'>Breakfast</button>
        <button className='mt-4 px-3 py-2 font-bold bg-gray-200 hover:bg-green-500 rounded-lg hover:text-white'>Dinner</button>
        </div>
    </>
  );
}

export default Catogary;
