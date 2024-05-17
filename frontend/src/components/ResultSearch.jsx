import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ResultSearch = ({prod}) => {
    const navigate = useNavigate();
  return (
    <Box sx={{display:"flex",alignItems:"center",cursor:"pointer"}} onClick={()=>navigate(`/products/${prod._id}`)}>
        <img width={"10%"} src={prod.image} alt="" />
        <Box>
            <Typography>{prod.title}</Typography>
            <Typography>{prod.category}</Typography>
        </Box>
    </Box>
  )
}

export default ResultSearch