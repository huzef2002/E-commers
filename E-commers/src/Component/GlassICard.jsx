import React from 'react';
import { FaStar } from "react-icons/fa6";

function GlassICard() {
    return (
        <div className='w-[280px] bg-white p-2'>
            <div >
                <img src='https://himalayaoptical.com/cdn/shop/products/888392509062_2_370x320.jpg?v=1645514126'
                className='w-auto h-[180px] hover:scale-120 transition-all cursor-grab duration-500 ease-in-out' />
            </div>

            <div className='flex justify-between my-3'>
                <h2 className='font-bold'>Okley spactakal </h2>
                <span className='font-semibold text-green-500'>₹800</span>
               
            </div>
            <p className='text-sm font-normal'> this is a beast<br/> goggale four light<br/> protection ....</p>
            <div className='flex justify-between'>
                <span className='flex justify-center items-center' >
                    <FaStar fill='yellow' /> 4.5
                </span>
                <button className='  px-3 py-2 font-bold bg-green-500 hover:bg-gray-200 rounded-lg hover:text-black text-white'> Add to card</button>
            </div>

        </div>
    );
}

export default GlassICard;
