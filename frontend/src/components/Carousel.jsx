import React, { useState, useEffect } from 'react';
import { Button, Box, Typography, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import img1 from '../assets/D126119617_WLD-BAU-iQOO125G-DesignSIM_NEW_LAUNCH_tallhero_3000x1200_2._CB560849646_.jpg'
import img2 from '../assets/Gaming-fest_HERO_3000x1200._CB560855689_.jpg'
import img3 from '../assets/Hot_Summer_Sale_Hero_3000X1200_Ref_Fallback_2x._CB560893869_.jpg'

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
        <Box position="relative" width="100%">
            {/* Image */}
            <img
                src={currentImage.src}
                alt={currentImage.alt}
                style={{ width: '100%', height: 'auto' }}
            />

            {/* Caption text centered over the image */}
            <Typography
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
            </Typography>

            {/* Navigation buttons */}
            <IconButton
                sx={{ color: 'white' }}
                variant="contained"
                size='large'
                // color="primary"
                onClick={prevSlide}
                style={{
                    position: 'absolute',
                    left: '10px',
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
                    right: '10px',
                    top: '20%',
                    transform: 'translateY(-20%)',
                    zIndex: 1,
                }}
            >
                <ChevronRight fontSize='large' />
            </IconButton>
        </Box>
    );
};

export default Carousel;
