import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { BiSolidCart } from "react-icons/bi";
import { TbMoodEmpty } from "react-icons/tb";
import OrderCard from './OrderCard';
import { useSelector } from 'react-redux';

function Order() {

  const CardItem = useSelector((state) => state.card.card);
  const [activeCard, setActiveCard] = useState(true);

  console.log(CardItem);
  return (
    <>
      <div className={`top-0 right-0 fixed h-full bg-white w-full lg:w-[20vw] p-3 transition-all duration-500 z-50 ${activeCard ? "translate-x-0" : "translate-x-full"}`}>
        <div className='flex items-center my-3 justify-between'>
          <span className='text-gray-800 text-xl font-bold '>
            My Order
          </span>
          <IoMdClose onClick={() => setActiveCard(!activeCard)} className='border-2 rounded-md border-gray-600 font-bold text-xl hover:border-red-600 hover:text-red-600 cursor-pointer p-1' />
        </div>
        {CardItem.length > 0 ?
          CardItem.map((glass) => {
            return (
              <OrderCard key={glass.CardData.id} CardItem={glass} qty={glass.qty} />
            );
          }) :
          <>
            <span className='flex justify-center items-center mt-20 mr-auto' >
              <TbMoodEmpty className='h-40 w-40 ' />
            </span>
            <h1 className='flex justify-center items-center mt-5 mr-auto text-4xl font-semibold'>Empty..!</h1>
          </>
        }

        <div className='absolute bottom-2'>
          <h3 className='font-semibold '>Item :</h3>
          <h3 className='font-semibold mb-3'>Total Amount :</h3>
          <button className='w-[90vw] lg:w-[18vw] px-3 py-2 font-bold bg-green-500 hover:bg-gray-200 rounded-lg hover:text-black text-white'> Place Order</button>
        </div>
      </div>
      <BiSolidCart onClick={() => setActiveCard(true)} className='cursor-pointer fixed bottom-4 right-4 text-5xl rounded-full p-3 shadow-md bg-white' />
    </>
  );
}

export default Order;
