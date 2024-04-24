import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { get_cart_items } from '../redux/appReducer/action'
import Carousel from '../components/Carousel';
import { Box } from '@mui/system';
// import CarouselImage from '../components/Carousel'
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_cart_items());
  }, [dispatch])
  return (
    <Box sx={{ backgroundColor: '#e5e5e5' }} minHeight={'100vh'}>
      <Carousel />
    </Box>

  )
}

export default Home