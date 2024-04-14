import { Box, Card, CardContent, CardMedia, Checkbox, IconButton, Input, Rating, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const CartLargeCard = ({ cart }) => {
    // const cart = useSelector(state => state.cart)[0];
    console.log(cart);
    return (
        <Card sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: "1px",
            paddingY: "10px",
            height: "250px"
        }}>
            <Checkbox sx={{ mr: "2%" }} />
            <img width={"16%"} height={"90%"} src={cart.productData.image} alt="" />
            <CardContent sx={{ alignSelf: 'flex-start', width: "100%" }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }} >
                    <Typography variant='h6'>{cart.productData.title}</Typography>
                    <Typography variant='h6'>$ {cart.productData.price}</Typography>
                </Box>
                <Box variant='paragraph' sx={{ display: "flex", alignItems: 'center', gap: "1%" }}>
                    {cart.productData.rating.rate}
                    <Rating
                        size='medium'
                        value={cart.productData.rating.rate}
                        precision={0.5}
                        readOnly
                    >

                    </Rating>
                    ({cart.productData.rating.count})
                </Box>
                <Typography><b>product Category:</b>{cart.productData.category}</Typography>
                <Typography><b>color:</b>silver</Typography>
            </CardContent>
        </Card>
    )
}

export default CartLargeCard