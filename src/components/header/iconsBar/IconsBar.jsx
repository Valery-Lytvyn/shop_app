import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { useProductData } from "../../../hooks/UseProductData";
import "./iconsBar.scss";
import iconBag from "../../../assets/images/bag-icon.png";

function IconsBar() {
   const productData = useProductData();
   const productQuantity = productData.reduce(function (acc, obj) { return acc + obj.quantity }, 0);
   const userInfo = useSelector(state => state.eshop.userInfo);

   return (
      <div className="icons-bar">
         <Link to="/cart">
            <div className="icon-bag-wrap px-2">
               <div className="icon-bag">
                  <img className="icon-bag-img" src={iconBag} alt="icon bag" />
                  <span className="icon-bag-counter p-0 m-0">
                     {productQuantity}</span>
               </div>
            </div>
         </Link>
         <Link to="/login">
            <div className="user-info-wrap">
               {userInfo ?
                  <div className="user-info">
                     <div className="user-logo mx-2 ">
                        <img src={userInfo.userPhoto} alt="user logo" />
                     </div>
                     <div className="user-name ps-2 m-0">
                        <h6>{userInfo.userName}</h6>
                     </div>
                  </div> :
                  <div className="user-logo mx-2">
                     <AiOutlineUser />
                  </div>
               }
            </div>
         </Link>
      </div>
   )
}

export default IconsBar