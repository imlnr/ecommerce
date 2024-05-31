import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux'
import { add_toCart, add_toWishlist, get_single_prod } from '../redux/appReducer/action';
import { useNavigate } from 'react-router-dom';

export default function ProdCard({ prod }) {
    // const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const [isclick, setisclick] = useState(false);
    const rat = prod.rating.rate;
    // console.log(prod._id);
    const dispatch = useDispatch();
    const handle_cartadd = () => {
        dispatch(add_toCart(prod));
    }

    const handleSinglePageClick = () => {
        dispatch(get_single_prod(prod._id));
        navigate(`/products/${prod._id}`)
    }
    const handleWishlist = ()=>{
        dispatch(add_toWishlist(prod))
        setisclick(!isclick);
    }
    return (
        <Card
            sx={{
                display: "flex",
                justifyContent: 'center',
                flexDirection: 'column',
                // alignItems: "center",
                // height: "340px",
                paddingY: "5px",
                transition: 'transform 0.3s ease',
            }}
        >
            <CardMedia onClick={handleSinglePageClick} sx={{ cursor: 'pointer', display: "flex", justifyContent: 'center', alignItems: "center", alignSelf: 'center' }}>
                <img src={prod.image} alt={prod.title} width={"90%"} height={"200px"} />
            </CardMedia>
            <CardContent sx={{ paddingBottom: "0%" }}>
                <Typography onClick={handleSinglePageClick} sx={{ cursor: "pointer" }} gutterBottom variant="paragraph" component="div">
                    {prod.title}
                </Typography>
                <Typography variant='h6'>$ {prod.price}</Typography>
                <Typography variant='paragraph' sx={{ display: "flex", alignItems: 'center', gap: "2%" }}>
                    {prod.rating.rate}
                    <Rating
                        size='small'
                        name="read-only"
                        value={rat}
                        precision={0.5}
                        readOnly
                    />
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                <IconButton onClick={handleWishlist} size='medium'>
                    <FavoriteIcon sx={isclick ? { fill: "red" } : {}} />
                </IconButton>
                {/* <Button variant='outlined' size="small">Wishlist</Button> */}
                <Button fullWidth onClick={handle_cartadd} variant='contained' size="small">Add to cart</Button>
            </CardActions>
        </Card>
    );
}
