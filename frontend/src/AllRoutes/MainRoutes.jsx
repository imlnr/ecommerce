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
import Footer from '../components/Footer'
import Wishlist from '../pages/Wishlist'
const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<><Home /><Footer /></>} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/products' element={<><Products /><Footer /></>} />
            <Route path='/blogs' element={<><Blogs /><Footer /></>} />
            <Route path='/shops' element={<><Shops /><Footer /></>} />
            <Route path='/cart' element={
                <PrivateRoutes>
                    <Cart />
                    <Footer />
                </PrivateRoutes>
            } />
            <Route path='/wishlist' element={<><PrivateRoutes><Wishlist /> <Footer /></PrivateRoutes> </>} />
            <Route path='/products/:id' element={<><SingleProd /><Footer /></>} />
            <Route path='/profile' element={<PrivateRoutes><Profile /></PrivateRoutes>} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/products/page/:id' element={<><Products /><Footer /></>} />
        </Routes>
    )
}

export default MainRoutes