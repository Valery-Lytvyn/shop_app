import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../../../redux/shopSlice";
import QuantityCounter from "../../product/quantityCounter/QuantityCounter";
import { AiOutlineClose } from "react-icons/ai";
import "./cartItem.scss";

function CartItem({ id, image, title, price, quantity, deleteItem }) {
   const dispatch = useDispatch();
   const [currentQty, setCurrentQty] = useState(quantity)

   const setIncrementQuantity = () => {
      setCurrentQty(prev => prev + 1)
      dispatch(incrementQuantity({
         _id: id
      }))
   }

   const setDecrementQuantity = () => {
      if (currentQty === 1) {
         deleteItem(id, title)
      }
      else {
         setCurrentQty(prev => prev - 1);
         dispatch(decrementQuantity({
            _id: id
         }))
      }
   }

   const countTotalPrice = () => (quantity * price).toFixed(2);

   return (
      <div className="cart-item p-0 py-4 ">
         <div className="row align-items-center p-0 m-0 ">
            <div className="col-sm-2 p-0 d-flex justify-content-between  align-items-center">
               <div className="cart-item-delete-btn px-2"
                  onClick={() => deleteItem(id, title)}
               >
                  <AiOutlineClose />
               </div>
               <div className="cart-item-img">
                  <img src={image} alt={title} />
               </div>
            </div>
            <div className="col-sm-10">
               <div className="row align-items-center p-0 ">
                  <div className="col-10 col-sm-12">
                     <p className="cart-item-title pb-2 m-0">{title}</p>
                  </div>
                  <div className="col-2 col-sm-3 p-0">
                     <div className="cart-item-price">
                        <h5>${price}</h5>
                     </div>
                  </div>
                  <div className="col-9 col-sm-6">
                     <div className="quantity-part">
                        <div className="quantity-title">Quantity</div>
                        <QuantityCounter
                           quantity={currentQty}
                           setIncrementQuantity={setIncrementQuantity}
                           setDecrementQuantity={setDecrementQuantity}
                        />
                     </div>
                  </div>
                  <div className="col-3">
                     <div className="cart-item-total-price ">
                        <h5>${countTotalPrice()}</h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div >
   )
}

export default CartItem