import React, { useEffect } from 'react'
import { get_cart_items } from '../redux/appReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Box } from '@mui/material';
import CartLargeCard from '../components/CartLargeCard';
const Cart = () => {
  const user = useSelector(state => state.user);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  console.log(user);
  useEffect(() => {
    dispatch(get_cart_items());
  }, [dispatch])
  return (
    // <div>Cart</div> 
    <Box width={"90%"} margin={"auto"} marginTop={"20px"}>
      <Grid height={"300px"} justifyContent={'space-between'} gap={3} mt={0} container spacing={2} columns={16} flexGrow={1}>
        <Grid xs={11}>
          {/* <Box>xs=8</Box> */}
          {cart && cart.map((ele) => (
            <CartLargeCard cart={ele} />
            // console.log()
          ))}
        </Grid>
        <Grid border={"1px solid"} xs={4}>
          <Box>xs=8</Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Cart