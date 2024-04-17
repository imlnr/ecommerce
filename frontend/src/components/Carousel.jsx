import React, { useState, useEffect } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const imageData = [
    {
        src: 'https://t3.ftcdn.net/jpg/03/16/91/28/360_F_316912806_RCeHVmUx5LuBMi7MKYTY5arkE4I0DcpU.jpg',
        alt: 'Image 1',
        caption: 'Caption 1'
    },
    {
        src: 'https://t3.ftcdn.net/jpg/03/16/91/28/360_F_316912806_RCeHVmUx5LuBMi7MKYTY5arkE4I0DcpU.jpg',
        alt: 'Image 2',
        caption: 'Caption 2'
    },
    {
        src: 'https://t3.ftcdn.net/jpg/03/16/91/28/360_F_316912806_RCeHVmUx5LuBMi7MKYTY5arkE4I0DcpU.jpg',
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
        <Box>
            <Box>
                {/* Display current image */}
                <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    style={{ width: '100%', height: 'auto' }}
                />
                <Typography variant="h6" style={{ textAlign: 'center', marginTop: 10 }}>
                    {currentImage.caption}
                </Typography>
            </Box>

            {/* Navigation buttons */}
            <Box display="flex" justifyContent="center" mt={2}>
                <Button variant="contained" color="primary" onClick={prevSlide}>
                    <ChevronLeft />
                </Button>
                <Button variant="contained" color="primary" onClick={nextSlide} style={{ marginLeft: 10 }}>
                    <ChevronRight />
                </Button>
            </Box>
        </Box>
    );
};

export default Carousel;
