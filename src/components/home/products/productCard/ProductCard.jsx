import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../../redux/shopSlice";
import { TOAST_SUCCESS } from "../../../../constants/toastTypes";
import { notification } from "../../../../helpers/notification/notification";
import "./productCard.scss";

function ProductCard({ product }) {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleDetails = () => {
      const rootId = product.title.toLowerCase().split(" ").join("");
      navigate(`/product/${rootId}`, {
         state: {
            item: product
         }
      });
   };

   const addProductToCart = () => {
      dispatch(addToCart({
         _id: product._id,
         title: product.title,
         image: product.image,
         price: product.price,
         quantity: 1,
         description: product.description,
      }));
      notification(`${product.title} is added`, TOAST_SUCCESS);
   };

   return (
      <div className="product-card">
         <div className="product-img-wrap" onClick={handleDetails}>
            <img className="product-img" src={product.image} alt="l" />
         </div>
         <div className="card-body">
            <div className="card-body-row w-100 py-2">
               <div className="card-title-wrap px-1">
                  <p className="card-title px-1">{product.title}</p>
               </div>
               <div className="price-wrap">
                  <div className="price p-1">
                     <p className="old-price px-1 m-0">${product.oldPrice}</p>
                     <p className="new-price px-1 m-0">${product.price}</p>
                  </div>
                  <p className="hidden-text p-1 m-0"
                     onClick={addProductToCart}>
                     add to cart <span><BsArrowRight /></span></p>
               </div>
            </div>
            <p className="product-category p-2 m-0">{product.category}</p>
         </div>
         {product.isNew &&
            <div className="sale-label px-3 py-1 m-0">
               <p className="p-0 m-0">Sale</p>
            </div>}
      </div>
   );
}

export default ProductCard 