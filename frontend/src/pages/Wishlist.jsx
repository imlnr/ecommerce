import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { get_wishlist_items } from '../redux/appReducer/action';
import Loading from '../components/Loading';
import WishCard from '../components/WishCard';

const Wishlist = () => {
    const dispatch = useDispatch();
    const wish = useSelector(state => state.wishlist);

    const isLoading = useSelector(state => state.isAddToCartLoading)
    const loading = useSelector(state => state.isLoading)
    console.log("isaddtocart", isLoading, "isloading:", loading, "isArray", Array.isArray(wish))

    useEffect(() => {
        dispatch(get_wishlist_items());
    }, [dispatch]);

    return (
        <>
            {loading && <Box sx={{ position: 'absolute', top: 'calc(50% - 70px)', left: "calc(50% - 50px)", zIndex: "1" }}><Loading /></Box>}

            <Box sx={{ position: "relative", display: 'grid', border: "1px solid", gridTemplateColumns: { lg: "repeat(5, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", xs: "repeat(2, 1fr)" }, columnGap: "1%", rowGap: "1%", paddingX: "3%", paddingY: "2%", minHeight: "calc(100vh - 70px)", backgroundColor: "#f8f9fa", filter: loading ? "blur(5px)" : 'none' }}>
                {(Array.isArray(wish) && wish.map((e) => (
                    <WishCard key={e._id} prod={e} />
                )))}
            </Box>
        </>
    );
};

export default Wishlist;