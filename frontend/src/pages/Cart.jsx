import React, { useEffect, useState } from 'react';
import { clear_cart, get_cart_items } from '../redux/appReducer/action';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box, Typography, Button, Accordion, AccordionDetails, AccordionSummary, FormGroup, FormControlLabel, Checkbox, useMediaQuery } from '@mui/material';
import CartLargeCard from '../components/CartLargeCard';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import Delete from '@mui/icons-material/Delete';
import empty_cart from '../assets/empty.jpg'


const Cart = () => {
  const cart = useSelector(state => state.cart);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.isLoading);

  useEffect(() => {
    dispatch(get_cart_items());
  }, [dispatch]);

  useEffect(() => {
    const calculateTotal = () => {
      let totalPrice = 0;
      if (cart && cart.length > 0) {
        cart.forEach(item => {
          totalPrice += item.productData.price;
        });
      }
      setTotal(totalPrice);
    };
    calculateTotal();
  }, [cart]);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      {loading && <Box sx={{ position: 'absolute', top: 'calc(50% - 70px)', left: "calc(50% - 50px)", zIndex: "1" }}><Loading /></Box>}
      <Box minHeight={"100vh"} position={'relative'} paddingTop={"20px"} sx={{ backgroundColor: "#f8f9fa", filter: loading ? "blur(5px)" : 'none' }}>
        <Grid container paddingX={isSmallScreen ? "1%" : "3%"} spacing={isSmallScreen ? 1 : 2}>
          <Grid item xs={12} sm={8}>
            <Box sx={{ backgroundColor: 'white', borderRadius: '8px', padding: '25px' }}>
              <Typography variant='h4'>Shopping Cart</Typography>
              {
                cart.length != 0 ?
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>
                      Deselect All Items
                    </Typography>
                    <Typography display={isSmallScreen ? "none" : 'block'}>Price</Typography>
                  </Box> : null
              }
              {cart.length === 0 ? (
                <Box width={"100%"} sx={{ display: 'flex', gap: "5px", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
                  <img style={{ margin: "0 auto" }} width={"50%"} src={empty_cart} alt="Empty Cart" />
                  <Typography fontSize={'medium'}>Your cart is empty!</Typography>
                  <Typography fontSize={'small'}>Add items to it now</Typography>
                  <Button onClick={() => navigate('/products/page/1')} variant='contained'>Shop now</Button>
                </Box>
              ) : (
                cart && cart.map((ele) => (
                  <CartLargeCard key={ele._id} cart={ele} />
                ))
              )}
              {
                cart.length != 0 ?
                  <Box sx={{ display: "flex", alignItems: 'center', justifyContent: "space-between", marginY: "10px" }}>
                    <Button onClick={() => dispatch(clear_cart())} variant='contained' color='error' startIcon={<Delete />} disabled={cart.length == 0}>Clear Cart</Button>
                    <Typography variant='h6'>Subtotal ({cart.length} items): <b>${total.toFixed(2)}</b></Typography>
                  </Box> : null
              }
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ backgroundColor: 'white', borderRadius: '8px', padding: '20px' }}>
              <Typography variant='h6'>Subtotal ({cart.length} items): <b>${total.toFixed(2)}</b></Typography>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="This order contains a gift" />
              </FormGroup>
              <Button sx={{ marginBottom: "10px" }} onClick={() => navigate('/checkout', { state: { count: total } })} fullWidth variant='contained'>Proceed to Buy</Button>
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
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Cart;
