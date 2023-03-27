import React from "react";
import { cardsArr } from "../../../constants/footerArraysData";
import "./cards.scss";

function Cards() {
   return (
      <div className="cards">
         {cardsArr.map((card, index) => (
            <div className="card m-2" key={index}>
               <img className="card-img" src={card.cardPic} alt={card.note} key={index} />
            </div>
         ))}
      </div>
   )
}

export default Cards