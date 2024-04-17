import React, { useEffect, useState } from 'react'
import { get_cart_items } from '../redux/appReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Box, Typography, Button, Accordion, AccordionDetails, AccordionSummary, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import CartLargeCard from '../components/CartLargeCard';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
const Cart = () => {
  // const user = useSelector(state => state.user);
  const cart = useSelector(state => state.cart);
  const [total, settotal] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_cart_items());
    // totalPrice()
  }, [dispatch])

  useEffect(() => {
    const calculateTotal = () => {
      let totalPrice = 0;
      if (cart && cart.length > 0) {
        cart.forEach(item => {
          totalPrice += item.productData.price;
        });
      }
      settotal(totalPrice);
    };

    calculateTotal();
  }, [cart]);
  return (
    // <div>Cart</div> 
    <Box minHeight={"100vh"} paddingTop={"20px"} sx={{ backgroundColor: "#f8f9fa" }} >
      <Grid width={"90%"} margin={"auto"} justifyContent={'space-between'} gap={3} container spacing={2} columns={16} flexGrow={1}>
        <Grid xs={11.5} sx={{ backgroundColor: 'white',borderRadius:'8px' }}>
          {/* <Box>xs=8</Box> */}
          <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: "left" }}>
            <Typography paddingTop={"0.4%"} paddingX={"1%"} variant='h4'>Shopping Cart</Typography>
            <Typography paddingX={"1%"}>
              Deselect All Items
            </Typography>
            <Typography alignSelf={"end"} paddingX={"2%"} paddingY={"0.2%"}>Price
            </Typography>
          </Box>
          {cart && cart.map((ele) => (
            <CartLargeCard key={ele._id} cart={ele} />
            // console.log()
          ))}
          <Typography paddingY={"1%"} paddingX={"2%"} variant='h6' textAlign={"right"}>Subtotal ({cart.length} items): <b>${total}</b></Typography>
        </Grid>
        <Grid height={'fit-content'} paddingX={"1%"} paddingY={"1%"} sx={{borderRadius:'8px', display: 'flex', flexDirection: "column", gap: "8px", backgroundColor:'white'}} xs={3.5}>
          <Typography variant='h6'>Subtotal ({cart.length} items): <b>${total}</b></Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="This order contains a gift" />
          </FormGroup>
          <Button fullWidth variant='contained'>Proceed to Buy</Button>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>EMI Available</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={'small'}>
                Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up). <Link to='#'>Learn more</Link>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Cart