import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../pages/Login';

const PrivateRoutes = ({ children }) => {
    const isLogin = useSelector((state) => state.isLoggedIn);
    return (
        <>
            {isLogin ? children : <Login />}
        </>
    )
}

export default PrivateRoutes