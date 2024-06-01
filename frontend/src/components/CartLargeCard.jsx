import { Box, Card, CardActions, CardContent, Checkbox, IconButton, Rating, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { delete_cart_item } from '../redux/appReducer/action';

const CartLargeCard = ({ cart }) => {
    const cartdata = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);

    const handleCount = () => {
        if (count >= 2) {
            setCount(count - 1);
        }
    };

    const handleCountSum = () => {
        setCount(count + 1);
    };

    const handleDelete = () => {
        dispatch(delete_cart_item(cartdata.filter((ele) => ele._id !== cart._id), cart._id));
    };

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: isSmallScreen ? 'column' : 'row',
                alignItems: 'center',
                marginBottom: "1px",
                paddingY: "10px",
                height: "auto",
            }}
        >
            <Checkbox sx={{ mr: isSmallScreen ? 0 : "2%" }} />
            <img height={"200px"} src={cart.productData.image} alt="" />
            <CardContent sx={{ display: 'flex', flexDirection: "column", justifyContent: "space-between", gap: "5px", alignSelf: 'flex-start', width: "100%" }}>
                <Box sx={{ display: 'flex', alignItems: isSmallScreen ? "flex-start" : 'center', justifyContent: "space-between", flexDirection: isSmallScreen ? "column" : 'row' }} >
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
                <CardActions sx={{ display: 'flex', flexDirection: isSmallScreen ? 'row' : 'column', alignItems: 'center', justifyContent: "center", gap: "10px" }}>
                    <Box sx={{ alignSelf: isSmallScreen ? "" : "start", display: "flex", alignItems: 'center', justifyContent: 'center', gap: "5%" }}>
                        <IconButton onClick={handleCount}><RemoveIcon /></IconButton>
                        {count}
                        <IconButton onClick={handleCountSum}><AddIcon /></IconButton>
                    </Box>
                    <Box sx={{ alignSelf: isSmallScreen ? "" : "start", display: "flex", alignItems: 'center', justifyContent: "start", gap: "4px" }}>
                        <IconButton onClick={handleDelete}>
                            <DeleteIcon />
                        </IconButton>
                        |
                        <IconButton>
                            <FavoriteBorderIcon />
                        </IconButton>
                        |
                        <IconButton>
                            <ShareIcon />
                        </IconButton>
                    </Box>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default CartLargeCard;
