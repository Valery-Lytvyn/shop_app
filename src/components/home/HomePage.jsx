import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Products from "./products/Products";
import Slider from "./slider/Slider";
import "./home.scss";


function HomePage() {
   const [products, setProducts] = useState([]);
   const productsData = useLoaderData();

   useEffect(() => (
      setProducts(productsData.data)
   ), [productsData])

   return (
      <div className="home">
         <Slider />
         <Products products={products} />
      </div>
   )
}

export default HomePage