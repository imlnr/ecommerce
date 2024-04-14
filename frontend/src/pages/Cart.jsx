import React, { useEffect } from 'react'
import { get_cart_items } from '../redux/appReducer/action'
import { useDispatch, useSelector } from 'react-redux'
const Cart = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log(user);
  useEffect(()=>{
    dispatch(get_cart_items());
    // get_cart_items();
  },[])
  return (
    <div>Cart</div>
  )
}

export default Cart