import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Get_Products } from '../redux/appReducer/action';
import ProdCard from '../components/ProdCard';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(Get_Products());
  }, [dispatch]);

  console.log(products);

  return (
    <Box width={"100%"} display={'flex'} alignItems={'center'} justifyContent={'center'} >
      <Grid padding={"2%"} container justifyContent={'center'} alignItems={'center'} spacing={2}>
        {products.map((prod, key) => (
          <Grid item key={key} xs={6} sm={4} md={4} lg={2}>
            <ProdCard prod={prod} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
