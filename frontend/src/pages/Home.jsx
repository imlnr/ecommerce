import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get_cart_items } from '../redux/appReducer/action';
import Carousel from '../components/Carousel';
import { Box } from '@mui/system';
import ProductLayout from '../components/ProductLayout';


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_cart_items());
    // get_Carousel_products('phone');
  }, [dispatch]);
  const allDeals = [{ dealname: "Today's Deal", prod: "default" }, { dealname: "Tablets", prod: "tablet" }, { dealname: "Shoes", prod: "shoes" },{ dealname: "Smart phones", prod: "phone" }]

  return (
    <Box sx={{ backgroundColor: '#e5e5e5' }}>
      <Box marginBottom="20px" minHeight="100vh">
        <Carousel />
      </Box>
      {
        allDeals.map((e) => (
          <ProductLayout dealname={e.dealname} prod={e.prod} />
        ))
      }
    </Box>
  );
};

export default Home;
