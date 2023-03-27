import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/shopSlice";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CartAmount from "./cartAmount/CartAmount";
import CartItem from "./cartItem/CartItem";
import { notification } from "../../helpers/notification/notification";
import { TOAST_ERROR } from "../../constants/toastTypes";
import { useProductData } from "../../hooks/UseProductData";
import "./cart.scss";


function Cart() {
   const productData = useProductData();
   const dispatch = useDispatch();
   const [totalAmount, setTotalAmount] = useState("");

   useEffect(() => {
      let price = 0;
      productData.forEach(item => {
         price += item.price * item.quantity
         return setTotalAmount(price.toFixed(2));
      })
   }, [productData])

   const deleteItem = (id, title) => {
      dispatch(removeItem(id))
      notification(`${title} is removed`, TOAST_ERROR)
   }

   const clearCart = () => {
      dispatch(resetCart());
      notification(`Your Cart is Empty`, TOAST_ERROR)
   }

   return (
      <div className="cart py-3">
         {productData.length ?
            <>
               <div className="row p-0 m-0">
                  <div className="col-lg-8 p-0">
                     <h2 className="p-3 fw-bolder">shopping cart</h2>
                     {productData.map((item, index) => (
                        <CartItem
                           id={item._id}
                           image={item.image}
                           title={item.title}
                           price={item.price}
                           quantity={item.quantity}
                           key={item._id}
                           deleteItem={deleteItem}
                        />
                     ))}
                  </div>
                  <div className="col-lg-4">
                     <CartAmount totalAmount={totalAmount} clearCart={clearCart} />
                  </div>
                  <div className="col-lg-8">
                     <div className="reset-button-wrap">
                        <button className="reset-button px-4 py-2"
                           onClick={clearCart}
                        >Reset cart</button>
                     </div>
                  </div>
               </div>
            </>
            : <div className="empty-cart-message">
               <h2 className="p-4">Your Cart is Empty. Please go back to Shopping and add products to Cart.</h2>
            </div>
         }
         <Link to="/">
            <div className="home-link p-3 text-decoration-none">
               <AiOutlineArrowLeft />
               <h4 className="home-link-text ps-1 m-0" >
                  go to shopping
               </h4>
            </div>
         </Link >
      </div >
   )
}

export default Cart