import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import ProdCarousel from './ProdCarousel'
import { url } from '../redux/appReducer/action-types'
import axios from 'axios'

const ProductLayout = ({ prod ,dealname}) => {
    const carouselData = [
        {
            "_id": "662549d1dfeeb9e76c3002e7",
            "title": "Nike ActiveLife Women's Yoga Pants",
            "price": 24.99,
            "description": "Find your zen in the ActiveLife Women's Yoga Pants. Moisture-wicking fabric, flattering fit, and perfect for yoga, Pilates, or lounging.",
            "category": "women's clothing",
            "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0c69a390-2deb-4d3b-8371-2a690d4e812d/universa-support-high-waisted-7-8-leggings-with-pockets-77X1ds.png",
            "rating": {
                "rate": 4.8,
                "count": 400
            }
        },
        {
            "_id": "662549d1dfeeb9e76c3002df",
            "title": "Samsung tab s9+ Pro (256Gb 12Gb RAM) 12000mah",
            "price": 299.99,
            "description": "Unleash your creativity with the iGadget Pro 11-Inch Tablet. Stunning display, lightning-fast performance, and versatile functionality for work or play.",
            "category": "electronics",
            "image": "https://media.wired.com/photos/64d53749c859c4a1cdecc556/1:1/w_1442,h_1442,c_limit/Samsung-Galaxy-Tab-S9-Series-SOURCE-Samsung-Featured-Gear.jpg",
            "rating": {
                "rate": 4.6,
                "count": 350
            }
        },
        {
            "_id": "662549d1dfeeb9e76c3002e5",
            "title": "GUCCI Men's Hoodie Black (S,M,L) Available",
            "price": 39.99,
            "description": "Stay cozy and stylish with the CasualComfort Men's Hoodie. Soft fabric, classic design, and perfect for layering in any season.",
            "category": "men's clothing",
            "image": "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1687365007/475374_X3Q25_1289_001_100_0000_Light.jpg",
            "rating": {
                "rate": 4,
                "count": 200
            }
        },
        {
            "_id": "662549d1dfeeb9e76c3002ea",
            "title": "FashionFusion Women's Statement Necklace",
            "price": 19.99,
            "description": "Make a statement with the FashionFusion Women's Statement Necklace. Eye-catching design, versatile style, and perfect for any occasion.",
            "category": "women's accessories",
            "image": "https://www.jewelove.in/cdn/shop/files/jewelove-japanese-platinum-necklace-chain-for-women-jl-pt-ch-194-37444771905777.jpg?v=1682593571",
            "rating": {
                "rate": 4.3,
                "count": 200
            }
        },
        {
            "_id": "662549d1dfeeb9e76c3002dd",
            "title": "Zebronics Gaming Mouse 1AA RGB",
            "price": 19.99,
            "description": "Dominate the competition with the TrendyTech Gaming Mouse RGB. Precision tracking, customizable RGB lighting, and ergonomic design for hours of comfortable gaming.",
            "category": "electronics",
            "image": "https://www.jiomart.com/images/product/original/rvh3q3dfsc/gaming-mouse-with-6-buttons-wired-optical-mouse-with-rgb-lights-for-laptops-desktop-computer-product-images-orvh3q3dfsc-p595275392-0-202211121918.jpg?im=Resize=(420,420)",
            "rating": {
                "rate": 4.8,
                "count": 400
            }
        },
        {
            "_id": "662549d1dfeeb9e76c3002e4",
            "title": "AquaSplash Waterproof Bluetooth Speaker",
            "price": 29.99,
            "description": "Take your music anywhere with the AquaSplash Waterproof Bluetooth Speaker. Waterproof, shockproof, and perfect for outdoor adventures.",
            "category": "electronics",
            "image": "https://www.reliancedigital.in/medias/JBL-GO-Essential-Bluetooth-Speaker-493711858-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MDYzN3xpbWFnZS9qcGVnfGltYWdlcy9oOTUvaDJlLzk5OTMwNjI4NzUxNjYuanBnfGZjYWNkYjBjMDAyNmFmMTNiYzY1YWYyMGU5ZjQ5YjA2ZTViMmU2OTYwZWY4ZTQ5YmM1OGRjNWY0ODc4NDYxNTA",
            "rating": {
                "rate": 4.3,
                "count": 300
            }
        },
        {
            "_id": "662549d1dfeeb9e76c3002e8",
            "title": "MagSafe Wireless Charging Pad for phones and watches",
            "price": 19.99,
            "description": "Simplify your charging routine with the TechMaster Wireless Charging Pad. Fast, efficient charging for your Qi-enabled devices.",
            "category": "electronics",
            "image": "https://www.myimaginestore.com/media/catalog/product/cache/4a48ac28cbb6e9c41470e5be5a6d3043/6/1/612u6nngtul._sl1500_.jpg",
            "rating": {
                "rate": 4.5,
                "count": 250
            }
        },
        {
            "_id": "662549d1dfeeb9e76c3002ec",
            "title": "TrendyTech Wireless Charging Earbuds",
            "price": 79.99,
            "description": "Cut the cord and elevate your listening experience with TrendyTech Wireless Charging Earbuds. Seamless connectivity, immersive sound, and convenient wireless charging case.",
            "category": "electronics",
            "image": "https://m.media-amazon.com/images/I/612GBY6bxRL.jpg",
            "rating": {
                "rate": 4.6,
                "count": 350
            }
        },
        {
            "_id": "662549d1dfeeb9e76c3002dc",
            "title": "Apple watch ultra Smartwatch Pro (GPS)",
            "price": 99.99,
            "description": "Stay connected and stay active with the GadgetMaster Smartwatch Pro. Track your fitness, receive notifications, and more, all from your wrist.",
            "category": "electronics",
            "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT5J3ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-alpine-ultra2_VW_34FR_GEO_IN?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507270905",
            "rating": {
                "rate": 4.7,
                "count": 300
            }
        }
    ];
    const [phoneData, setPhoneData] = useState(null);
    const get_Carousel_products = async (query) => {
        try {
            const res = await axios.get(`${url}/products`, { params: { title: query, category: query } });
            setPhoneData(res.data.products);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        if (prod !== 'default') {
            get_Carousel_products(prod)
            // return;
        }
        setPhoneData(carouselData);
    }, [])
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '1%', minHeight: '250px' }}>
            {phoneData === null ? <Loading /> : <ProdCarousel deals={dealname} carouselData={phoneData} />}
        </Box>
    )
}

export default ProductLayout