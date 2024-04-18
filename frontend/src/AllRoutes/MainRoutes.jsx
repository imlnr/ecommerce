import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Products from '../pages/Products'
import Blogs from '../pages/Blogs'
import Shops from '../pages/Shops'
import Cart from '../pages/Cart'
import PrivateRoutes from './PrivateRoutes'
import Profile from '../pages/Profile'
import SingleProd from '../pages/SingleProd'
import Checkout from '../pages/Checkout'
const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/products' element={<Products />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/shops' element={<Shops />} />
            <Route path='/cart' element={
                <PrivateRoutes>
                    <Cart />
                </PrivateRoutes>
            } />
            <Route path='/products/:id' element={<SingleProd />} />
            <Route path='/profile' element={<PrivateRoutes><Profile /></PrivateRoutes>} />
            <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
    )
}

export default MainRoutes