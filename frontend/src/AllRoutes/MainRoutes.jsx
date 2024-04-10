import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Products from '../pages/Products'
import Blogs from '../pages/Blogs'
import Shops from '../pages/Shops'
const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/products' element={<Products/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/shops' element={<Shops/>}/>
        </Routes>
    )
}

export default MainRoutes