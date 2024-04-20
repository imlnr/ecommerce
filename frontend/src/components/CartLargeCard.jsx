import { Box, Card, CardActions, CardContent, Checkbox, IconButton, Rating, Typography } from '@mui/material'
// import { flexbox } from '@mui/system';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ShareIcon from '@mui/icons-material/Share';
import Share from '@mui/icons-material/Share';
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { delete_cart_item } from '../redux/appReducer/action';


const CartLargeCard = ({ cart }) => {
    const cartdata = useSelector(state => state.cart);
    console.log(cart.quantity);
    const dispatch = useDispatch();
    const [count, setcount] = useState(1);
    // console.log(count);
    const handlecount = () => {
        if (count >= 2) {
            setcount(count - 1);
        }
    }
    const handlecountsum = () => {
        setcount(count + 1)
    }
    const handledelete = () => {
        dispatch(delete_cart_item(cartdata.filter((ele) => ele._id !== cart._id), cart._id))
    }
    return (
        <Card sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: "1px",
            paddingY: "10px",
            height: "235px",
            // paddingLeft:"1.5%"
        }}>
            <Checkbox sx={{ mr: "2%" }} />
            <img width={"16%"} height={"90%"} src={cart.productData.image} alt="" />
            <CardContent sx={{ display: 'flex', flexDirection: "column", justifyContent: "space-between", gap: "5px", alignSelf: 'flex-start', width: "100%" }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }} >
                    <Typography variant='h6'>{cart.productData.title}</Typography>
                    <Typography variant='h6'>$ {(count * cart.productData.price).toFixed(2)}</Typography>
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
                <Typography><b>product Category :</b> {cart.productData.category}</Typography>
                <Typography><b>color :</b> silver</Typography>
                <CardActions sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: "center", gap: "10px" }}>
                    <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', gap: "5%" }}>
                        <IconButton onClick={handlecount}><RemoveIcon /></IconButton>
                        {count}
                        <IconButton onClick={handlecountsum}><AddIcon /></IconButton>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: 'center', justifyContent: "center", gap: "4px" }}>
                        <IconButton onClick={handledelete}>
                            <DeleteIcon />
                        </IconButton>
                        |
                        <IconButton>
                            <FavoriteBorderIcon />
                        </IconButton>
                        |
                        <IconButton>
                            <Share />
                        </IconButton>
                    </Box>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default CartLargeCard