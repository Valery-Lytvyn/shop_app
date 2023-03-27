import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./navigationBar/NavigationBar";
import IconsBar from "./iconsBar/IconsBar";
import ToastMessage from '../../helpers/notification/ToastMessage';
import "./header.scss";
import e_logo from "../../assets/images/e-logo.png";


function Header() {

   return (
      <div className="header">
         <div className="container-fluid">
            <div className="row pt-3 align-items-center justify-content-around">
               <div className="col-sm-6 col-lg-3 p-3 d-flex justify-content-center justify-content-sm-start">
                  <Link to="/">
                     <img className="logo-img" src={e_logo} alt="logo" />
                  </Link>
               </div>
               <div className="order-2 order-lg-1 col-6 col-sm-2 col-lg-6">
                  <NavigationBar />
               </div>
               <div className="order-1 order-lg-2 col-6 col-sm-4 col-lg-3 p-0">
                  <IconsBar />
               </div>
            </div>
            <ToastMessage />
         </div>
      </div>
   )
}

export default Header