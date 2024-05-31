import { Clear } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const WishCard = ({prod}) => {
    return (
        <Box sx={{display:"flex",flexDirection:"column",padding:"3%",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",borderRadius:"5px"}}>
            <IconButton size='medium' sx={{alignSelf:"end"}}>
                <Clear fontSize='medium'/>
            </IconButton>
            <img width={"100%"} src={prod.image} alt="" />
            <Typography>{prod.title}</Typography>
        </Box>
    )
}

export default WishCard