import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import img1 from '../assets/D126119617_WLD-BAU-iQOO125G-DesignSIM_NEW_LAUNCH_tallhero_3000x1200_2._CB560849646_.jpg'
import img2 from '../assets/Gaming-fest_HERO_3000x1200._CB560855689_.jpg'
import img3 from '../assets/Hot_Summer_Sale_Hero_3000X1200_Ref_Fallback_2x._CB560893869_.jpg'
import img4 from '../assets/realme-narzo.jpg'


const gridData = [{ url: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", text: 'Bracelet' }, { url: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg", text: "Hard Drive" }, { url: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", text: "Jacket" }, { url: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg", text: "Monitor" }];
const gridData2 = [{url:"https://www.reliancedigital.in/medias/JBL-GO-Essential-Bluetooth-Speaker-493711858-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MDYzN3xpbWFnZS9qcGVnfGltYWdlcy9oOTUvaDJlLzk5OTMwNjI4NzUxNjYuanBnfGZjYWNkYjBjMDAyNmFmMTNiYzY1YWYyMGU5ZjQ5YjA2ZTViMmU2OTYwZWY4ZTQ5YmM1OGRjNWY0ODc4NDYxNTA",text:"jbl speaker"},{url:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT5J3ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-alpine-ultra2_VW_34FR_GEO_IN?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507270905",text:"apple Watch"},{url:"https://www.jiomart.com/images/product/original/rvh3q3dfsc/gaming-mouse-with-6-buttons-wired-optical-mouse-with-rgb-lights-for-laptops-desktop-computer-product-images-orvh3q3dfsc-p595275392-0-202211121918.jpg?im=Resize=(420,420)",text:"rgb mouse"},{url:"https://m.media-amazon.com/images/I/612GBY6bxRL.jpg",text:"earbuds"}]
const gridData3 = [{url:"",text:""},{url:"",text:""},{url:"",text:""},{url:"",text:""}]

const imageData = [
    {
        src: img1,
        alt: 'Image 1',
        caption: 'Caption 1'
    },
    {
        src: img2,
        alt: 'Image 2',
        caption: 'Caption 2'
    },
    {
        src: img3,
        alt: 'Image 3',
        caption: 'Caption 3'
    },
    {
        src: img4,
        alt: 'Image 4',
        caption: 'Caption 4'
    }
    // Add more images as needed
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically change slides every 4 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
        }, 4000);

        // Cleanup interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
    };

    const currentImage = imageData[currentIndex];

    return (
        <Box paddingX={"3%"} position="relative" >
            {/* Image */}
            <img
                src={currentImage.src}
                alt={currentImage.alt}
                style={{ width: '100%', height: 'auto' }}
            />

            {/* Caption text centered over the image */}
            {/* <Typography
                variant="h6"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    textAlign: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '5px',
                    borderRadius: '5px'
                }}
            >
                {currentImage.caption}
            </Typography> */}

            {/* Navigation buttons */}
            <IconButton
                sx={{ color: 'white' }}
                variant="contained"
                size='large'
                // color="primary"
                onClick={prevSlide}
                style={{
                    position: 'absolute',
                    left: '3%',
                    top: '20%',
                    transform: 'translateY(-20%)',
                    zIndex: 1,
                }}
            >
                <ChevronLeft fontSize='large' />
            </IconButton>

            <IconButton
                sx={{ color: 'white' }}
                size='large'
                variant="contained"
                // color="primary"
                onClick={nextSlide}
                style={{
                    position: 'absolute',
                    right: '3%',
                    top: '20%',
                    transform: 'translateY(-20%)',
                    zIndex: 1,
                }}
            >
                <ChevronRight fontSize='large' />
            </IconButton>
            {/* <Box> */}
            <Grid sx={{ position: 'absolute', top: "55%", left: '0', zIndex: '1' }} container justifyContent={'space-around'} columns={12}>
                <Grid sx={{ backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} container paddingY={'10px'} borderRadius={'8px'} columns={12} xs={3} gap={'4%'} justifyContent={'center'}>
                    {/* <Grid border={'1px solid'} xs={4}>item</Grid>
                    <Grid border={'1px solid'} xs={4}>item</Grid>
                    <Grid border={'1px solid'} xs={4}>item</Grid>
                    <Grid border={'1px solid'} xs={4}>item</Grid> */}
                    {gridData.map((ele) => (
                        <Grid paddingY={"2%"} marginY={'5px'} borderRadius={'5px'} key={ele.url} sx={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px', display: 'flex', justifyContent: "space-around", alignItems: "center", flexDirection: "column" }} item xs={4}>
                            <img width={"100px"} height={'120px'} src={ele.url} alt={ele.text} />
                            <Typography variant='paragraph' justifySelf={'end'}>{ele.text}</Typography>
                        </Grid>
                    ))}
                </Grid>
                <Grid sx={{ backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} container paddingY={'10px'} borderRadius={'8px'} columns={12} xs={3} gap={'4%'} justifyContent={'center'}>
                    {/* <Grid border={'1px solid'} xs={4}>item</Grid>
                    <Grid border={'1px solid'} xs={4}>item</Grid>
                    <Grid border={'1px solid'} xs={4}>item</Grid>
                    <Grid border={'1px solid'} xs={4}>item</Grid> */}
                    {gridData2.map((ele) => (
                        <Grid paddingY={"2%"} marginY={'5px'} borderRadius={'5px'} key={ele.url} sx={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px', display: 'flex', justifyContent: "space-around", alignItems: "center", flexDirection: "column" }} item xs={4}>
                            <img width={"100px"} height={'120px'} src={ele.url} alt={ele.text} />
                            <Typography variant='paragraph' justifySelf={'end'}>{ele.text}</Typography>
                        </Grid>
                    ))}
                </Grid>
                <Grid sx={{ backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} container paddingY={'10px'} borderRadius={'8px'} columns={12} xs={3} gap={'4%'} justifyContent={'center'}>
                    {/* <Grid border={'1px solid'} xs={4}>item</Grid>
                    <Grid border={'1px solid'} xs={4}>item</Grid>
                    <Grid border={'1px solid'} xs={4}>item</Grid>
                    <Grid border={'1px solid'} xs={4}>item</Grid> */}
                    {gridData.map((ele) => (
                        <Grid paddingY={"2%"} marginY={'5px'} borderRadius={'5px'} key={ele.url} sx={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px', display: 'flex', justifyContent: "space-around", alignItems: "center", flexDirection: "column" }} item xs={4}>
                            <img width={"100px"} height={'120px'} src={ele.url} alt={ele.text} />
                            <Typography variant='paragraph' justifySelf={'end'}>{ele.text}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            {/* </Box> */}
        </Box>
    );
};

export default Carousel;
