import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Get_Products } from '../redux/appReducer/action';
import ProdCard from '../components/ProdCard';
import Loading from '../components/Loading';
import { Pagination, autocompleteClasses } from '@mui/material';
import { display } from '@mui/system';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(Get_Products());
  }, [dispatch]);

  // console.log(products);
  const loading = useSelector(state => state.isLoading);

  return (
    <>
      {
        loading ?
          <Box width={'100%'} height={'calc(100vh - 50px)'} display={'flex'} justifyContent={'center'} alignItems={"center"}>
            <Loading />
          </Box> :
          <>
          <Box width={"100%"} display={'flex'} alignItems={'center'} justifyContent={'center'} >
            <Grid padding={"2%"} container spacing={2}>
              {products.map((prod, key) => (
                <Grid item key={key} xs={6} sm={4} md={4} lg={2}>
                  <ProdCard prod={prod} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",paddingY:"1%"}}>
          <Pagination size='large' count={10}></Pagination>
          </Box>
          </>
      }

    </>
  );
};

export default Products;
