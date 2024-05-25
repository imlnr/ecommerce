import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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

const ProdCarousel = ({ deals, carouselData }) => {
    const carouselRef = useRef(null);

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
    const navigate = useNavigate();

    return (
        <Box width={{ xs: '100%', sm: '88%' }} sx={{ backgroundColor: 'white', padding: '1%' }}>
            <Typography variant='h5' marginBottom={"10px"} fontWeight={600}>
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
                        backgroundColor: "white",
                        borderRadius: "0",
                        opacity: "0.8"
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
                        <img style={{ cursor: 'pointer' }} onClick={() => navigate(`/products/${ele._id}`)} key={ele._id} src={ele.image} alt={ele.title} />
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
                        backgroundColor: "white",
                        borderRadius: "0",
                        opacity: "0.8"
                    }}
                >
                    <ChevronRight fontSize='large' />
                </Button>
            </Box>
        </Box>
    );
};

export default ProdCarousel;
