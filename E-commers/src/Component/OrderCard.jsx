import React from 'react';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { removeToCard } from '../Redux/CardSlice';
import { useDispatch } from 'react-redux';


function OrderCard({CardItem,qty}) {
    const dispatch= useDispatch();
    return (
        <div className=' flex shadow-md rounded-lg p-2 mb-4'>
            <div className='flex'>
                <MdDelete onClick={()=>dispatch(removeToCard(CardItem.CardData.id))} className='absolute right-7' />
                <img src={CardItem.CardData.img}
                    className='h-[50px] w-[50px]' />

            </div>

            <div className='leading-5'>
                <h2>{CardItem.CardData.Name}</h2>
                <div className='flex  justify-between'>
                    <span className='font-bold text-green-500 text-sm'>{CardItem.CardData.Price}</span>
                    <div className='flex justify-center items-center absolute right-7'>
                        <FaMinus className='border-2 rounded-md border-gray-600 font-bold text-gray-600 hover:bg-green-500  hover:text-white transition-all ease-linear text-xl cursor-pointer p-1' />
                        <span className='mx-1'> {qty} </span>
                        <FaPlus className='border-2 rounded-md border-gray-600 font-bold text-gray-600 hover:bg-green-500  hover:text-white transition-all ease-linear text-xl cursor-pointer p-1' />
                    </div>
                </div>
            </div>

        </div>

    );
}

export default OrderCard;
