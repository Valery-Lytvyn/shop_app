import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { bannersArr } from "../../../constants/bannersArr";

function Slider() {

   return (
      <Carousel indicators={false} variant={"dark"}>
         {bannersArr.map((item, index) => (
            <Carousel.Item key={index} indicators="false">
               <img
                  className="d-block w-100"
                  src={item}
                  alt="slide"
               />
            </Carousel.Item>
         )
         )}
      </Carousel>
   )
}

export default Slider;