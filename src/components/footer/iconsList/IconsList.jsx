import React from "react";
import { socialMediaIcons } from "../../../constants/footerArraysData";
import "./iconsList.scss";

function IconsList() {
   return (
      <div className="social-media-icons py-3">
         {socialMediaIcons.map((icon, index) => (
            <span key={index} className="social-icon p-2">
               {icon}
            </span>
         ))}
      </div>
   )
}

export default IconsList