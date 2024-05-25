import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { get_cart_items } from '../redux/appReducer/action'
import Carousel from '../components/Carousel';
import { Box } from '@mui/system';
import ProdCarousel from '../components/ProdCarousel';
import Loading from '../components/Loading';
// import CarouselImage from '../components/Carousel'
const Home = () => {
  const dispatch = useDispatch();
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
        "count": 400,
        "_id": "665222368f5b04fd6cbca4ce"
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
        "count": 350,
        "_id": "665222828f5b04fd6cbca521"
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
        "count": 200,
        "_id": "665222948f5b04fd6cbca536"
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
        "count": 200,
        "_id": "665222cf8f5b04fd6cbca55b"
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
        "count": 400,
        "_id": "665223f88f5b04fd6cbca5be"
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
        "count": 300,
        "_id": "665224118f5b04fd6cbca5c7"
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
        "count": 250,
        "_id": "665224208f5b04fd6cbca5fd"
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
        "count": 350,
        "_id": "6652242a8f5b04fd6cbca5ff"
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
        "count": 300,
        "_id": "6652243d8f5b04fd6cbca636"
      }
    }
  ];
  const phone = [
    {
      "_id": "662549d1dfeeb9e76c3002e8",
      "title": "MagSafe Wireless Charging Pad for phones and watches",
      "price": 19.99,
      "description": "Simplify your charging routine with the TechMaster Wireless Charging Pad. Fast, efficient charging for your Qi-enabled devices.",
      "category": "electronics",
      "image": "https://www.myimaginestore.com/media/catalog/product/cache/4a48ac28cbb6e9c41470e5be5a6d3043/6/1/612u6nngtul._sl1500_.jpg",
      "rating": {
        "rate": 4.5,
        "count": 250,
        "_id": "6652298c8f5b04fd6cbca71f"
      }
    },
    {
      "_id": "66269257c35900f4e689b0b4",
      "title": "Apple iPhone 15 Pro Max (256 GB) - Natural Titanium",
      "price": 699.99,
      "description": "Experience Apple iPhone 15 Pro Max (256 GB) - Natural Titanium 5G Smartphone. Stunning display, powerful performance, and advanced camera system.",
      "category": "mobile phones",
      "image": "https://m.media-amazon.com/images/I/81dT7CUY6GL._SL1500_.jpg",
      "rating": {
        "rate": 4.9,
        "count": 5000,
        "_id": "6652298c8f5b04fd6cbca720"
      }
    },
    {
      "_id": "66269257c35900f4e689b0b5",
      "title": "Samsung Galaxy S24 Ultra 5G (12GB, 256GB)",
      "price": 399.99,
      "description": "Slim, sleek, and powerful, Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 256GB Storage is designed for the modern lifestyle. High-performance processor, immersive display, and long-lasting battery.",
      "category": "mobile phones",
      "image": "https://m.media-amazon.com/images/I/81vxWpPpgNL._SL1500_.jpg",
      "rating": {
        "rate": 4.7,
        "count": 450,
        "_id": "6652298c8f5b04fd6cbca721"
      }
    },
    {
      "_id": "66269257c35900f4e689b0b6",
      "title": "Pixel 8 Pro 5G (12GB RAM+ 128GB Storage) (Bay Blue)",
      "price": 499.99,
      "description": "Go green with the EcoTech Eco-Friendly Smartphone. Sustainable materials, energy-efficient design, and top-notch performance make it the perfect choice for eco-conscious consumers.",
      "category": "mobile phones",
      "image": "https://m.media-amazon.com/images/I/71GOJhIiXZL._SL1500_.jpg",
      "rating": {
        "rate": 4.5,
        "count": 400,
        "_id": "6652298c8f5b04fd6cbca722"
      }
    },
    {
      "_id": "66269257c35900f4e689b0b7",
      "title": "Xiaomi 14 (White, 12GB RAM, 512GB Storage)",
      "price": 999.99,
      "description": "Xiaomi 14 (White, 12GB RAM, 512GB Storage) | 50MP Leica Professional Optics | 120 Hz 1.5K LTPO AMOLED | SD 8 Gen 3 Hyper OS",
      "category": "mobile phones",
      "image": "https://m.media-amazon.com/images/I/711SMo2bL4L._SL1500_.jpg",
      "rating": {
        "rate": 4.8,
        "count": 550,
        "_id": "6652298c8f5b04fd6cbca723"
      }
    },
    {
      "_id": "66269257c35900f4e689b0b8",
      "title": "Samsung Galaxy Z Fold5 5G (12GB RAM, 512GB)",
      "price": 199.99,
      "description": "Get premium features at an affordable price with the TrendyEdge Budget Smartphone. Sleek design, reliable performance, and great value for money.",
      "category": "mobile phones",
      "image": "https://m.media-amazon.com/images/I/71RLYJvBidL._SL1500_.jpg",
      "rating": {
        "rate": 4.3,
        "count": 350,
        "_id": "6652298c8f5b04fd6cbca724"
      }
    },
    {
      "_id": "665227f454ac68ab4b510e81",
      "title": "OnePlus 11 (8GB RAM + 128GB Storage, Eternal Green)",
      "price": 699.99,
      "description": "High performance meets sleek design. Enjoy fast charging, a smooth display, and powerful performance.",
      "category": "mobile phones",
      "image": "https://d2xamzlzrdbdbn.cloudfront.net/products/51aa1812-92d8-468a-8fee-3baef262d86723081012_416x416.jpg",
      "rating": {
        "rate": 4.4,
        "count": 600,
        "_id": "6652298c8f5b04fd6cbca725"
      }
    },
    {
      "_id": "665227f454ac68ab4b510e82",
      "title": "Oppo Find X3 Pro (12GB RAM + 256GB Storage, Gloss Black)",
      "price": 899.99,
      "description": "Premium design meets exceptional performance. Enjoy a seamless user experience with a vibrant display and cutting-edge technology.",
      "category": "mobile phones",
      "image": "https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/o/p/oppo_find_x3_white1_1.jpg",
      "rating": {
        "rate": 4.6,
        "count": 450,
        "_id": "6652298c8f5b04fd6cbca726"
      }
    },
    {
      "_id": "665227f454ac68ab4b510e83",
      "title": "Realme GT 2 Pro (12GB RAM + 256GB Storage, Paper White)",
      "price": 649.99,
      "description": "A perfect blend of speed and elegance. Experience fast performance, great battery life, and an impressive display.",
      "category": "mobile phones",
      "image": "https://www.jiomart.com/images/product/original/492849959/realme-gt-2-pro-128gb-8gb-paper-white-5g-mobile-phone-digital-o492849959-p591868254-3-202206030152.jpeg?im=Resize=(420,420)",
      "rating": {
        "rate": 4.4,
        "count": 500,
        "_id": "6652298c8f5b04fd6cbca727"
      }
    },
    {
      "_id": "665227f454ac68ab4b510e84",
      "title": "Sony Xperia 1 III (12GB RAM + 256GB Storage, Frosted Black)",
      "price": 999.99,
      "description": "Capture the world with unparalleled clarity using Sony's advanced camera technology. Enjoy a stunning 4K HDR display and exceptional performance.",
      "category": "mobile phones",
      "image": "https://fdn2.gsmarena.com/vv/pics/sony/sony-xperia-1-iii-02.jpg",
      "rating": {
        "rate": 4.7,
        "count": 300,
        "_id": "6652298c8f5b04fd6cbca728"
      }
    },
    {
      "_id": "665227f454ac68ab4b510e85",
      "title": "ASUS ROG Phone 7 (12GB RAM + 512GB Storage, Phantom Black)",
      "price": 1099.99,
      "description": "Unleash the gamer in you with the ASUS ROG Phone 7. Featuring a high-refresh-rate display, powerful Snapdragon processor, and advanced cooling system.",
      "category": "mobile phones",
      "image": "https://adminapi.applegadgetsbd.com/storage/media/large/ROG-Phone-7-Ultimate-White-8539.jpg",
      "rating": {
        "rate": 4.8,
        "count": 350,
        "_id": "6652298c8f5b04fd6cbca729"
      }
    }
  ]

  useEffect(() => {
    dispatch(get_cart_items());
  }, [dispatch])
  return (
    <Box sx={{ backgroundColor: '#e5e5e5' }}>
      <Box marginBottom={"20px"} minHeight={'100vh'}>
        <Carousel />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: "1%" }}>
        <ProdCarousel deals={"Today's Deals"} carouselData={carouselData} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: "1%" ,minHeight:"250px"}}>
        <Loading/>
        {/* <ProdCarousel deals={"Smart phones"} carouselData={phone} /> */}
      </Box>
    </Box>

  )
}

export default Home