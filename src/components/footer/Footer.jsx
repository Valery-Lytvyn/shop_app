import React from "react";
import Cards from "./cards/Cards";
import IconsList from "./iconsList/IconsList";
import Contacts from "./contacts/Contacts";
import Profile from "./profile/Profile";
import SubscribeForm from "./subscribeForm/SubscribeForm";
import "./footer.scss";
import e_logo from "../../assets/images/e-logo_footer.png";

function Footer() {

   return (
      <div className="footer pb-4">
         <div className="container-fluid">
            <div className="row">
               <div className="order-3 order-xl-0 col-md-6  col-xl-4 d-flex flex-column align-items-center align-items-md-start  mt-3">
                  <div className="logo p-2">
                     <img className="logo-img" src={e_logo} alt="logo" />
                  </div>
                  <div className="copyright p-2">© Copyright 2023 </div>
                  <Cards />
                  <IconsList />
               </div>
               <div className="order-0 order-xl-1 col-sm-8 col-xl-3 mt-3">
                  <Contacts />
               </div>
               <div className="order-1 order-xl-2 col-sm-4 col-xl-2 mt-3">
                  <Profile />
               </div>
               <div className="order-4 col-md-6 col-xl-3  mt-3">
                  <SubscribeForm />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer