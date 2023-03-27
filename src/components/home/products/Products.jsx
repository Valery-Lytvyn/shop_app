import React from 'react';
import ProductCard from "./productCard/ProductCard";
import './products.scss';

function Products({ products }) {
   return (
      <div className='products py-3'>
         <div className='motto'>
            <h1 className='motto-title px-5 py-2 '>Shopping everyday</h1>
            <span className='border-line my-3 w-50'></span>
            <p className='motto-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio libero nesciunt recusandae necessitatibus adipisci assumenda, voluptate ea placeat fugiat odio soluta perferendis tempora officia accusamus perspiciatis consectetur? Voluptate recusandae rerum iure. Adipisci, optio illum explicabo deleniti nihil inventore omnis, blanditiis incidunt iure, veritatis dicta aut voluptate doloremque maiores mollitia atque!</p>
         </div>
         <div className='row p-0 m-0'>
            {products.map((item) => (
               <div className="col-12 col-sm-6 col-lg-3 p-3" key={item._id}>
                  <ProductCard product={item} />
               </div>
            ))}
         </div>
      </div>
   )
}

export default Products