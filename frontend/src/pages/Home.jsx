import React, { useEffect } from 'react'
import Carousel from '../components/Carousel'
import { useDispatch } from 'react-redux'
import { get_cart_items } from '../redux/appReducer/action'
const Home = () => {
  const dispatch  = useDispatch();
  useEffect(() => {
    dispatch(get_cart_items());
  }, [dispatch])
  return (
    <div>Home</div>
    // <Carousel/>
  )
}

export default Home