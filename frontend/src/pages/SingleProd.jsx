import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { get_single_prod } from '../redux/appReducer/action';
import { Box } from '@mui/system';
import { GET_SINGLE_SUCCESS } from '../redux/appReducer/action-types';

const SingleProd = () => {
  const single = useSelector(state => state.singleProduct);
  console.log(single);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch({ type: GET_SINGLE_SUCCESS, payload: {} })
    dispatch(get_single_prod(id));
  }, [])
  return (
    <Box sx={{ minHeight: "calc(100vh - 60px)" }}>
      {/* {JSON.stringify(single)} */}
      <img src={single.image} alt="" height={'600px'} />
    </Box>
  )
}

export default SingleProd