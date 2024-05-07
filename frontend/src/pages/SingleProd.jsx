import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { get_single_prod } from '../redux/appReducer/action';
import { Box } from '@mui/system';
import { Rating, Typography } from '@mui/material';
import Loading from '../components/Loading';

const SingleProd = () => {
  const single = useSelector(state => state.singleProduct);
  const isLoading = useSelector(state => state.isLoading)
  // console.log(single);
  const dispatch = useDispatch();
  // const rat = single.rating.rate;
  const { id } = useParams();
  // var { rate, count } = single.rating;
  // console.log(rate, count);
  useEffect(() => {
    dispatch(get_single_prod(id));
  }, [dispatch, id])
  return (
    <Box sx={{ minHeight: "calc(100vh - 60px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {
        isLoading ? <Loading /> :
          <Box sx={{ width: "95%", display: "flex", justifyContent: 'left' }}>
            <Box>
              <img src={single.image} alt="" height={'600px'} />
            </Box>
            <Box sx={{ mt: "30px", display: "flex", flexDirection: 'column', gap: "5px" }}>
              <Typography variant='h5'>
                {single.title}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "1%" }}>
                {
                  single.rating && single.rating.rate && single.rating.count && (
                    <>
                      <Rating value={single.rating.rate} size='medium' name='read-only' readOnly precision={0.5} />
                      <Typography>{single.rating.count} Ratings</Typography>
                    </>
                  )
                }
              </Box>

              <Box sx={{ borderTop: "1px solid" }}></Box>
              <Box sx={{ display: 'flex', alignItems: "center" }}>
                <Typography variant='h4'>
                  {`$ ${(single.price / 12).toFixed(2)} /`}
                </Typography>
                <Typography variant='h6'>{`month(12 months)`}</Typography>
              </Box>
              <Typography> with <b>EMI</b> on your Amazon Pay Later <span>All EMI Plans</span></Typography>
              <Typography variant='h6'><span style={{ color: 'red', marginRight: "5px" }}>25%</span> ${single.price}</Typography>
              <Typography>M.R.P.: <span>{((single.price) + (single.price / 4)).toFixed(2)}</span></Typography>
            </Box>
          </Box>
      }
    </Box>
  )
}

export default SingleProd