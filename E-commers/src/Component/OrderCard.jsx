import React from 'react';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function OrderCard() {
    return (
        <div className=' flex shadow-md rounded-lg p-2 mb-4'>
            <div className='flex'>
            <MdDelete className='absolute right-7'/>
                <img src='https://himalayaoptical.com/cdn/shop/products/888392509062_2_370x320.jpg?v=1645514126'
                    className='h-[50px] w-[50px]' />

            </div>

            <div >
                <h2>Aviator Sunglasses</h2>
                <div className='flex  justify-between'>
                    <span className='font-bold text-green-500'>₹899</span>
                    <div className='flex justify-center items-center absolute right-7'>
                        <FaMinus className='border-2 rounded-md border-gray-600 font-bold text-gray-600 hover:bg-green-500  hover:text-white transition-all ease-linear text-xl cursor-pointer p-1' />
                        <span className='mx-1'> 1 </span>
                        <FaPlus className='border-2 rounded-md border-gray-600 font-bold text-gray-600 hover:bg-green-500  hover:text-white transition-all ease-linear text-xl cursor-pointer p-1' />
                    </div>
                </div>
            </div>

        </div>

    );
}

export default OrderCard;
