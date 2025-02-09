import React from 'react';
import { IoMdClose } from "react-icons/io";
import OrderCard from './OrderCard';

function Order() {
  return (
    <div className='top-0 right-0 fixed h-full bg-white w-full lg:w-[20vw] p-3'>
      <div className='flex items-center my-3 justify-between'>
        <span className='text-gray-800 text-xl font-bold '>
           My Order
        </span>
        <IoMdClose className='border-2 rounded-md border-gray-600 font-bold text-xl hover:border-red-600 hover:text-red-600 cursor-pointer p-1'/>
      </div>

        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
      <div className='absolute bottom-2'>
        <h3 className='font-semibold '>Item :</h3>
        <h3 className='font-semibold mb-3'>Total Amount :</h3>
        <button className='w-[90vw] lg:w-[18vw] px-3 py-2 font-bold bg-green-500 hover:bg-gray-200 rounded-lg hover:text-black text-white'> Place Order</button>
      </div>
    </div>
  );
}

export default Order;
