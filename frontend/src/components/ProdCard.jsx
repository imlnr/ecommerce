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
    // const [isHovered, setIsHovered] = useState(false);
    const [isclick, setisclick] = useState(false);

    return (
        <Card
            sx={{
                display: "flex",
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: "center",
                // height: "340px",
                paddingY: "5px",
                transition: 'transform 0.3s ease',
            }}
        >
            <CardMedia sx={{ display: "flex", justifyContent: 'center', alignItems: "center", alignSelf: 'center' }}>
                <img src={prod.image} alt={prod.title} width={"85%"} height={"200px"} />
            </CardMedia>
            <CardContent sx={{ paddingBottom: "0%" }}>
                <Typography gutterBottom variant="paragraph" component="div">
                    {prod.title}
                </Typography>
                <Typography variant='h6'>$ {prod.price}</Typography>
                <Typography variant='paragraph' sx={{ display: "flex", alignItems: 'center', gap: "2%" }}>
                    {prod.rating.rate}
                    <Rating
                        size='small'
                        name="read-only"
                        value={prod.rating.rate}
                        readOnly
                    />
                </Typography>
            </CardContent>
            <CardActions sx={{ alignSelf: "start" }}>
                <IconButton onClick={() => setisclick(!isclick)} size='medium'>
                    <FavoriteIcon sx={isclick ? { fill: "red" } : {}} />
                </IconButton>
                {/* <Button variant='outlined' size="small">Wishlist</Button> */}
                <Button variant='contained' size="small">Add to cart</Button>
            </CardActions>
        </Card>
    );
}
