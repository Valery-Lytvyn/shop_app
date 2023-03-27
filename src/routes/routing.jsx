import React from "react";
import { createHashRouter } from "react-router-dom";
import { ProductsData } from '../apis/Api';
import Layout from "../components/layout/Layout";
import HomePage from "../components/home/HomePage";
import Product from '../components/product/Product';
import Cart from '../components/cart/Cart';
import LoginPage from '../components/loginPage/LoginPage';
import BlogPage from "../components/blogPage/BlogPage";
import AboutPage from "../components/aboutPage/AboutPage";
import CategoriesPage from '../components/categoriesPage/CategoriesPage';
import SupportPage from '../components/supportPage/SupportPage';


export const router = createHashRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <HomePage />,
            loader: ProductsData
         },
         {
            path: '/product/:id',
            element: <Product />,
         },
         {
            path: '/cart',
            element: <Cart />
         },
         {
            path: '/login',
            element: <LoginPage />
         },
         {
            path: '/categories',
            element: <CategoriesPage />
         },
         {
            path: '/about',
            element: <AboutPage />
         },
         {
            path: '/blog',
            element: <BlogPage />
         },
         {
            path: '/support',
            element: <SupportPage />
         },
      ]
   }
])