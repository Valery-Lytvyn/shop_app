import React from "react";
import { contacts } from "../../../constants/footerArraysData";
import "./contacts.scss";

function Contacts() {
   return (
      <div className="contacts align-items-center align-items-sm-start">
         <div className="contacts-title py-2">
            Locate us
         </div>
         {contacts.map((item, index) => (
            <div className="contacts-text py-2" key={index}>{item}</div>
         ))}
      </div>
   )
}

export default Contacts