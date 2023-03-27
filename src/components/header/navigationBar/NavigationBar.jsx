import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { navigationItems } from "../../../constants/headerArraysData";
import "./navigationBar.scss";

function NavigationBar() {

   return (
      <div className="navbar d-flex justify-content-end justify-content-lg-center">
         <Navbar
            collapseOnSelect expand="lg" bg="none" variant="light" className="justify-content-end"
         >
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
            />
            <Navbar.Collapse id="navbarScroll">
               <Nav className="justify-content-center text-end py-2">
                  {
                     navigationItems.map((item, index) => (
                        <NavLink className="navItem px-2 px-lg-3 px-xl-4"
                           key={index}
                           to={item.navLink}
                        >{item.navItem}</NavLink>
                     ))
                  }
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </div>
   )
}

export default NavigationBar