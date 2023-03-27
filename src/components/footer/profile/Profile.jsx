import React from "react"
import { profile } from "../../../constants/footerArraysData";
import "./profile.scss";

function Profile() {
   return (
      <div className="profile align-items-center align-items-sm-start">
         <div className="profile-title py-2">
            Profile
         </div>
         {profile.map((item, index) => (
            <div className="profile-text py-2" key={index}>{item.icon}{item.label}</div>
         ))}
      </div>
   )
}

export default Profile