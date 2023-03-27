import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import './quantityCounter.scss';

function QuantityCounter({ quantity, setIncrementQuantity, setDecrementQuantity }) {

   return (
      <div className="quantity-counter my-2 px-3">
         <button className='decrement-btn p-0 px-2'
            onClick={setDecrementQuantity}
         >
            <AiOutlineMinus />
         </button>
         <div className="quantity-number px-2"> {quantity} </div>
         <button className='increment-btn p-0 px-2'
            onClick={setIncrementQuantity}
         >
            <AiOutlinePlus />
         </button>
      </div>
   )
}

export default QuantityCounter