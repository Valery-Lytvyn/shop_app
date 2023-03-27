import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { addToCart } from '../../redux/shopSlice';
import QuantityCounter from './quantityCounter/QuantityCounter';
import { notification } from '../../helpers/notification/notification';
import { TOAST_SUCCESS } from '../../constants/toastTypes';
import './product.scss';

function Product() {
   const dispatch = useDispatch();
   const [details, setDetails] = useState({})
   const location = useLocation();
   const [currentQty, setCurrentQty] = useState(1)

   useEffect(() => (
      setDetails(location.state.item)
   ), [])

   const clickHandler = () => {
      addProductToCart();
      showNotify()
   }

   const addProductToCart = () => {
      dispatch(addToCart({
         _id: details._id,
         title: details.title,
         image: details.image,
         price: details.price,
         quantity: currentQty,
         description: details.description,
      }))
      setCurrentQty(1)
   }
   const showNotify = () => notification(`${details.title} is added`, TOAST_SUCCESS);

   const setIncrementQuantity = () => {
      setCurrentQty(prev => prev + 1)
   }

   const setDecrementQuantity = () => {
      if (currentQty === 1) {
         setCurrentQty(1)
      }
      else {
         setCurrentQty(prev => prev - 1);
      }
   }


   return (
      <div className="product m-2 m-sm-5">
         <div className="row">
            <div className='col-md-4 p-0 m-0'>
               <div className="product-img-wrap ">
                  <img src={details.image} className="details-image p-0 m-0" alt="details.title" />
                  {details.isNew &&
                     <div className='sale-label px-4 py-1 m-0'>
                        <p className='p-0 m-0'>Sale</p>
                     </div>
                  }
               </div>
            </div>
            <div className="col-md-8">
               <div className="product-body">
                  <h5 className="product-title">{details.title}</h5>
                  <div className="product-text">
                     <div className='price py-3'>
                        <p className='old-price px-1 m-0'>${details.oldPrice}</p>
                        <p className='new-price px-1 m-0'>${details.price}</p>
                     </div>
                     <div className="stars py-4">
                        <AiOutlineStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                     </div>

                     <div className='product-description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quia eligendi magnam odio inventore praesentium quis debitis? Rem inventore, ratione maiores odit suscipit, voluptate dignissimos ullam facilis earum officia libero.
                     </div>

                     <div className="product-cart-part py-4">
                        <div className="quantity-part">
                           <div className="quantity-title px-1 px-sm-3">Quantity</div>
                           <QuantityCounter
                              quantity={currentQty}
                              setIncrementQuantity={setIncrementQuantity}
                              setDecrementQuantity={setDecrementQuantity}
                           />

                        </div>
                        <button className='add-btn py-2 my-2 ms-sm-3 px-sm-4'
                           onClick={clickHandler}
                        >add to cart</button>
                     </div>

                     <div className="category py-2">
                        <div className="category-title">Category:</div>
                        <div className="category-text ps-1">
                           {details.category}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div >
   )
}

export default Product