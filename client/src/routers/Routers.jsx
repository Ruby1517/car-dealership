import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import LoginForm from '../pages/LoginForm'
import CarListing from '../pages/CarListing'
import  CarDetails from '../pages/CarDetails'
import Blog from '../pages/Blog'
import BlogDetails from '../pages/BlogDetails'
import NotFound from '../pages/NotFound'
import Contact from '../pages/Contact'
import BlogList from '../components/UI/BlogList'
import BookingForm from '../components/UI/BookingForm'
import Application from '../pages/Application'
import AdminHome from "../adminDashboard/pages/home/Home";
import ProductList from "../adminDashboard/pages/productList/ProductList";
import NewProduct from '../adminDashboard/pages/newProduct/NewProduct'
import UpdateProduct from '../adminDashboard/pages/product/UpdateProduct'


const Routers = () => {
  
  return (
           
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home /> } />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<CarListing />} />
        <Route path='/products/:id' element={<CarDetails />} />
        <Route path='/products/:id/application' element={<Application />} />
        <Route path='/products/application' element={<Application />} />
        <Route path='/search-cars' element={<CarListing />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/blogs/:slug' element={<BlogDetails />} />
        <Route path='/contact' element={<Contact />} />        
        <Route path='/*' element={<NotFound />} />
        <Route path='/admin' element={<LoginForm />} />
        <Route path='/admin/home' element={<AdminHome />} />
        <Route path='/admin/products' element={<ProductList />} />
        <Route path='/admin/newProduct' element={<NewProduct />} />
        <Route path='/admin/product/:productId' element={<UpdateProduct />} />
      </Routes> 
    
    
    )
}

export default Routers
