import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import img1 from '../assets/D126119617_WLD-BAU-iQOO125G-DesignSIM_NEW_LAUNCH_tallhero_3000x1200_2._CB560849646_.jpg'
import img2 from '../assets/Gaming-fest_HERO_3000x1200._CB560855689_.jpg'
import img3 from '../assets/Hot_Summer_Sale_Hero_3000X1200_Ref_Fallback_2x._CB560893869_.jpg'
import img4 from '../assets/realme-narzo.jpg'
import img5 from '../assets/carousel4.jpg'
import { Link } from 'react-router-dom';


const gridData = [{ url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0c69a390-2deb-4d3b-8371-2a690d4e812d/universa-support-high-waisted-7-8-leggings-with-pockets-77X1ds.png", text: 'Yoga pants' }, { url: "https://media.wired.com/photos/64d53749c859c4a1cdecc556/1:1/w_1442,h_1442,c_limit/Samsung-Galaxy-Tab-S9-Series-SOURCE-Samsung-Featured-Gear.jpg", text: "Tablets" }, { url: "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1687365007/475374_X3Q25_1289_001_100_0000_Light.jpg", text: "hoodies" }, { url: "https://www.jewelove.in/cdn/shop/files/jewelove-japanese-platinum-necklace-chain-for-women-jl-pt-ch-194-37444771905777.jpg?v=1682593571", text: "Neclace" }];
const gridData2 = [{ url: "https://www.reliancedigital.in/medias/JBL-GO-Essential-Bluetooth-Speaker-493711858-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MDYzN3xpbWFnZS9qcGVnfGltYWdlcy9oOTUvaDJlLzk5OTMwNjI4NzUxNjYuanBnfGZjYWNkYjBjMDAyNmFmMTNiYzY1YWYyMGU5ZjQ5YjA2ZTViMmU2OTYwZWY4ZTQ5YmM1OGRjNWY0ODc4NDYxNTA", text: "jbl speaker" }, { url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT5J3ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-alpine-ultra2_VW_34FR_GEO_IN?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507270905", text: "apple Watch" }, { url: "https://www.jiomart.com/images/product/original/rvh3q3dfsc/gaming-mouse-with-6-buttons-wired-optical-mouse-with-rgb-lights-for-laptops-desktop-computer-product-images-orvh3q3dfsc-p595275392-0-202211121918.jpg?im=Resize=(420,420)", text: "rgb mouse" }, { url: "https://m.media-amazon.com/images/I/612GBY6bxRL.jpg", text: "earbuds" }]

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
    },
    {
        src: img5,
        alt: 'Image 5',
        caption: 'Caption 5'
    }
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
        }, 4000);
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
        <Box paddingX={"5%"} position="relative" >
            <img
                src={currentImage.src}
                alt={currentImage.alt}
                style={{ width: '100%', minHeight: "200px" }}
            />
            <IconButton
                sx={{ color: 'white' }}
                variant="contained"
                size='large'
                onClick={prevSlide}
                style={{
                    position: 'absolute',
                    left: '5%',
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
                onClick={nextSlide}
                style={{
                    position: 'absolute',
                    right: '5%',
                    top: '20%',
                    transform: 'translateY(-20%)',
                    zIndex: 1,
                }}
            >
                <ChevronRight fontSize='large' />
            </IconButton>
            <Box sx={{ width: "88%", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1%", position: { xs: "", md: 'absolute' }, top: { xs: "", md: '45%' }, left: { xs: "", md: '6%' } }}>
                {/* , zIndex: { xs: "", md: '1' } */}
                <Box sx={{ backgroundColor: "white", paddingX: "4%", paddingY: "4%" }}>
                    <Typography fontWeight={600} variant='h5' marginBottom={"3%"}>
                        Keep shopping for
                    </Typography>
                    <Box sx={{ backgroundColor: "white", display: "grid", gridTemplateColumns: "repeat(2,1fr)", rowGap: "2%", columnGap: "3%", marginBottom: "3%" }}>
                        {gridData.map((ele) => (
                            <Box key={ele.url} sx={{ display: 'flex', justifyContent: "center", flexDirection: "column", cursor: "pointer" }}>
                                <img style={{ margin: "0 auto" }} width={"100%"} src={ele.url} alt={ele.text} />
                                <Typography justifySelf={'end'}>{ele.text}</Typography>
                                <Typography variant='paragraph'>1 view</Typography>
                            </Box>
                        ))}
                    </Box>
                    <Link to={"/products/page/1"}>View your browsing history</Link>
                    {/* <Typography marginTop={"3%"}>View your browsing history</Typography> */}
                </Box>
                <Box sx={{ backgroundColor: "white", paddingX: "4%", paddingY: "4%" }}>
                    <Typography fontWeight={600} variant='h5' marginBottom={"3%"}>
                        Pick up where you left off
                    </Typography>
                    <Box sx={{ backgroundColor: "white", display: "grid", gridTemplateColumns: "repeat(2,1fr)", rowGap: "2%", columnGap: "3%", marginBottom: "3%" }}>
                        {gridData.map((ele) => (
                            <Box key={ele.url} sx={{ display: 'flex', justifyContent: "center", flexDirection: "column", cursor: "pointer" }}>
                                <img style={{ margin: "0 auto" }} width={"100%"} src={ele.url} alt={ele.text} />
                                <Typography justifySelf={'end'}>{ele.text}</Typography>
                                <Typography variant='paragraph'>1 view</Typography>
                            </Box>
                        ))}
                    </Box>
                    <Link to={"/products/page/1"}>View your browsing history</Link>
                    {/* <Typography marginTop={"3%"}>View your browsing history</Typography> */}
                </Box>
                <Box sx={{ backgroundColor: "white", paddingX: "4%", paddingY: "4%" }}>
                    <Typography fontWeight={600} variant='h5' marginBottom={"3%"}>
                        Continue shopping deals
                    </Typography>
                    <Box sx={{ backgroundColor: "white", display: "grid", gridTemplateColumns: "repeat(2,1fr)", rowGap: "2%", columnGap: "3%", marginBottom: "3%" }}>
                        {gridData.map((ele) => (
                            <Box key={ele.url} sx={{ display: 'flex', justifyContent: "center", flexDirection: "column", cursor: "pointer" }}>
                                <img style={{ margin: "0 auto" }} width={"100%"} src={ele.url} alt={ele.text} />
                                <Typography justifySelf={'end'}>{ele.text}</Typography>
                                <Typography variant='paragraph'>1 view</Typography>
                            </Box>
                        ))}
                    </Box>
                    <Link to={"/products/page/1"}>View your browsing history</Link>
                    {/* <Typography marginTop={"3%"}>View your browsing history</Typography> */}
                </Box>
                <Box sx={{ backgroundColor: "white", paddingX: "4%", paddingY: "4%", height: "30%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box>
                        <Typography fontSize={22} fontWeight={600} variant='h5' marginBottom={"3%"}>
                            Launch your brand on Amazon.in
                        </Typography>
                        <Link to={"#"}>Start Registration</Link>
                    </Box>
                    <img src={'https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/landing/ATF_imagery_card0.5x_15th_APR._CB560942440_.jpg'} alt='brand' />
                    {/* <Typography marginTop={"3%"}>View your browsing history</Typography> */}
                </Box>
            </Box>
            {/* <Grid sx={{ position: { xs: "", md: 'absolute' }, top: { xs: "", md: '45%' }, left: { xs: "", md: '0' }, zIndex: { xs: "", md: '1' } }} container justifyContent={'space-around'} columns={12}>
                <Grid sx={{ backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} container paddingY={'10px'}  columns={12} xs={12} md={3} gap={'4%'} justifyContent={'center'}>
                    {gridData.map((ele) => (
                        <Grid paddingY={"2%"} marginY={'5px'} borderRadius={'5px'} key={ele.url} sx={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', display: 'flex', justifyContent: "space-around", alignItems: "center", flexDirection: "column" }} item xs={4}>
                            <img width={"100px"} height={'120px'} src={ele.url} alt={ele.text} />
                            <Typography variant='paragraph' justifySelf={'end'}>{ele.text}</Typography>
                        </Grid>
                    ))}
                </Grid>
                <Grid sx={{ backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} container paddingY={'10px'}  columns={12} xs={12} md={3} gap={'4%'} justifyContent={'center'}>
                    {gridData2.map((ele) => (
                        <Grid paddingY={"2%"} marginY={'5px'} borderRadius={'5px'} key={ele.url} sx={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', display: 'flex', justifyContent: "space-around", alignItems: "center", flexDirection: "column" }} item xs={4}>
                            <img width={"100px"} height={'120px'} src={ele.url} alt={ele.text} />
                            <Typography variant='paragraph' justifySelf={'end'}>{ele.text}</Typography>
                        </Grid>
                    ))}
                </Grid>
                <Grid sx={{ backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} container paddingY={'10px'}   columns={12} xs={12} md={3} gap={'4%'} justifyContent={'center'}>
                    {gridData.map((ele) => (
                        <Grid paddingY={"2%"} marginY={'5px'} borderRadius={'5px'} key={ele.url} sx={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', display: 'flex', justifyContent: "space-around", alignItems: "center", flexDirection: "column" }} item xs={4}>
                            <img width={"100px"} height={'120px'} src={ele.url} alt={ele.text} />
                            <Typography variant='paragraph' justifySelf={'end'}>{ele.text}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid> */}
        </Box>
    );
};

export default Carousel;
