import React from "react";
import "./cartAmount.scss";

function CartAmount({ totalAmount, clearCart }) {

   return (
      <div className="cart-amount">
         <div className="cart-amount-title p-3">
            <h2 className="fw-bolder">cart totals</h2>
         </div>
         <div className="cart-amount-subtotal p-3">
            <h5>Subtotal</h5>
            <span className="text-sum ps-3">${totalAmount}</span>
         </div>
         <div className="cart-amount-shipping p-3">
            <h5>shipping</h5>
            <span className="shipping-text ps-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam maxime natus odio adipisci.</span>
         </div>
         <div className="cart-amount-total p-3 py-4 mt-3">
            <h5>Total</h5>
            <span className="text-sum">${totalAmount}</span>
         </div>
         <div className="checkout-btn-wrap p-3">
            <div className="checkout-btn p-3" onClick={clearCart}>
               <span>proceed to checkout</span>
            </div>
         </div>
      </div>
   )
}

export default CartAmount