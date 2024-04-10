import * as React from 'react';
import { useState } from 'react'; // Import useState hook
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

export default function ProdCard({ prod }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isclick, setisclick] = useState(false);

    return (
        <Card
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
                transform: isHovered ? 'translateY(-10px)' : 'none',
                display: "flex",
                justifyContent: 'center',
                flexDirection: 'column',
                height: "420px",
                // paddingY:"5px",
                transition: 'transform 0.3s ease',
            }}
        >
            <CardMedia sx={{ display: "flex", justifyContent: 'center', alignItems: "center", alignSelf: 'center' }}>
                <img src={prod.image} alt={prod.title} width={"90%"} height={"200px"} />
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="paragraph" component="div">
                    {prod.title}
                </Typography>
                <Typography variant='h6'>$ {prod.price}</Typography>
                {/* <Typography variant="body2" color="text.secondary"> */}
                {/* ranging across all continents except Antarctica */}
                {/* {prod.description} */}
                {/* </Typography> */}
                <br />
                <Rating
                    name="read-only"
                    value={prod.rating.rate}
                    readOnly
                />
            </CardContent>
            <CardActions>
                <IconButton onClick={() => setisclick(!isclick)} size='medium'>
                    <FavoriteIcon sx={isclick ? { fill: "red" } : {}} />
                </IconButton>
                {/* <Button variant='outlined' size="small">Wishlist</Button> */}
                <Button variant='contained' size="small">Add to cart</Button>
            </CardActions>
        </Card>
    );
}
