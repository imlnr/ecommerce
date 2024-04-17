import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { get_cart_items } from '../redux/appReducer/action'
// import CarouselImage from '../components/Carousel'
const Home = () => {
  const dispatch  = useDispatch();
  useEffect(() => {
    dispatch(get_cart_items());
  }, [dispatch])
  return (
    <div>Home</div>
    // <CarouselImage/>
  )
}

export default Home