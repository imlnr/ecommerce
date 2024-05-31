import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { get_wishlist_items } from '../redux/appReducer/action';
import Loading from '../components/Loading';
import WishCard from '../components/WishCard';

const Wishlist = () => {
    const dispatch = useDispatch();
    const wish = useSelector(state => state.wishlist);

    useEffect(() => {
        dispatch(get_wishlist_items());
    }, [dispatch]);

    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: { lg: "repeat(5, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", xs: "repeat(2, 1fr)" }, columnGap: "2%", rowGap: "0.5%", paddingX: "3%", paddingY: "2%", minHeight: "calc(100vh - 70px)" }}>
            {Array.isArray(wish) && wish.length === 0 ? <Loading /> : (Array.isArray(wish) && wish.map((e) => (
                <WishCard key={e._id} prod={e.productData} />
            )))}
        </Box>
    );
};

export default Wishlist;