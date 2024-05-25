import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React, { useRef } from 'react';

const StyledBox = styled(Box)({
    '&::-webkit-scrollbar': {
        height: '10px',
    },
    '&::-webkit-scrollbar-track': {
        borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: 'grey',
        borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb:hover': {},
});

const ProdCarousel = ({ deals }) => {
    const carouselRef = useRef(null);
    const carouselData = [
        { url: 'https://www.reliancedigital.in/medias/JBL-GO-Essential-Bluetooth-Speaker-493711858-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MDYzN3xpbWFnZS9qcGVnfGltYWdlcy9oOTUvaDJlLzk5OTMwNjI4NzUxNjYuanBnfGZjYWNkYjBjMDAyNmFmMTNiYzY1YWYyMGU5ZjQ5YjA2ZTViMmU2OTYwZWY4ZTQ5YmM1OGRjNWY0ODc4NDYxNTA', text: 'jbl speaker' },
        { url: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT5J3ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-alpine-ultra2_VW_34FR_GEO_IN?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507270905', text: 'apple Watch' },
        { url: 'https://www.jiomart.com/images/product/original/rvh3q3dfsc/gaming-mouse-with-6-buttons-wired-optical-mouse-with-rgb-lights-for-laptops-desktop-computer-product-images-orvh3q3dfsc-p595275392-0-202211121918.jpg?im=Resize=(420,420)', text: 'rgb mouse' },
        { url: 'https://m.media-amazon.com/images/I/612GBY6bxRL.jpg', text: 'earbuds' },
        { url: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0c69a390-2deb-4d3b-8371-2a690d4e812d/universa-support-high-waisted-7-8-leggings-with-pockets-77X1ds.png', text: 'Yoga pants' },
        { url: 'https://media.wired.com/photos/64d53749c859c4a1cdecc556/1:1/w_1442,h_1442,c_limit/Samsung-Galaxy-Tab-S9-Series-SOURCE-Samsung-Featured-Gear.jpg', text: 'Tablets' },
        { url: 'https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1687365007/475374_X3Q25_1289_001_100_0000_Light.jpg', text: 'hoodies' },
        { url: 'https://www.jewelove.in/cdn/shop/files/jewelove-japanese-platinum-necklace-chain-for-women-jl-pt-ch-194-37444771905777.jpg?v=1682593571', text: 'Necklace' },
    ];

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -carouselRef.current.clientWidth,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: carouselRef.current.clientWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box width={{ xs: '100%', sm: '88%' }} sx={{ backgroundColor: 'white', padding: '1%' }}>
                <Typography variant='h5' fontWeight={600}>
                    {deals}
                </Typography>
                <Box sx={{ position: 'relative' }}>
                    <Button
                        onClick={scrollLeft}
                        sx={{
                            position: 'absolute',
                            top: '25%',
                            left: '0',
                            zIndex: '1',
                            height: '50%',
                            ':hover': { backgroundColor: 'white', borderRadius: '0' },
                        }}
                    >
                        <ChevronLeft fontSize='large' />
                    </Button>
                    <StyledBox
                        sx={{
                            display: 'flex',
                            overflow: 'auto',
                            gap: '1%',
                            position: 'relative',
                            scrollSnapType: 'x mandatory',
                            '& > img': {
                                scrollSnapAlign: 'start',
                                flexShrink: 0,
                                width: { xs: '50%', sm: '30%', md: '20%', lg: '15%' },
                            },
                        }}
                        ref={carouselRef}
                    >
                        {carouselData.map((ele) => (
                            <img key={ele.text} src={ele.url} alt={ele.text} />
                        ))}
                    </StyledBox>
                    <Button
                        onClick={scrollRight}
                        sx={{
                            position: 'absolute',
                            top: '25%',
                            right: '0',
                            height: '50%',
                            zIndex: '1',
                            ':hover': { backgroundColor: 'white', borderRadius: '0' },
                        }}
                    >
                        <ChevronRight fontSize='large' />
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ProdCarousel;
