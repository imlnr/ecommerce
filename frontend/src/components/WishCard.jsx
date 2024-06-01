import { Clear } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delete_wishlist_item } from '../redux/appReducer/action'

const WishCard = ({prod}) => {
    const dispatch = useDispatch();
    const wishdata = useSelector( state => state.wishlist);
    const handleDelete = () => {
        dispatch(delete_wishlist_item(wishdata.filter((ele) => ele._id !== prod._id), prod._id));
    };

    return (
        <Box sx={{display:"flex",flexDirection:"column",padding:"3%",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",borderRadius:"5px"}}>
            <IconButton onClick={handleDelete} size='medium' sx={{alignSelf:"end"}}>
                <Clear fontSize='medium'/>
            </IconButton>
            <img width={"100%"} src={prod.productData.image} alt="" />
            <Typography>{prod.productData.title}</Typography>
        </Box>
    )
}

export default WishCard