import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './layout.scss'

function Layout() {
   return (
      <div>
         <div className="container-fluid p-0 m-0">
            <div className='layout'>
               <Header />
               <Outlet />
               <Footer />
            </div>
         </div>
      </div>
   )
}

export default Layout