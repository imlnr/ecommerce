import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
    return (
        <Box width={"100%"} sx={{ backgroundColor: "#232f3e" }}>
            <Button sx={{ backgroundColor: "#37475a", color: 'white' }} fullWidth size='large'>Back to top</Button>
            <Grid marginTop={"10px"} container columns={12} justifyContent={'center'} gap={'3%'} color={'white'}>
                <Grid sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }} xs={1.5}>
                    <Typography variant='h6' fontSize={'large'}>Get to Know Us</Typography>
                    <Typography fontSize={'small'}>About Us</Typography>
                    <Typography fontSize={'small'}>Careets</Typography>
                    <Typography fontSize={'small'}>Press Releases</Typography>
                    <Typography fontSize={'small'}>Amijaan Science</Typography>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }} xs={1.5}>
                    <Typography variant='h6' fontSize={'large'}>Connect with Us</Typography>
                    <Typography fontSize={'small'}>Facebook</Typography>
                    <Typography fontSize={'small'}>Twitter</Typography>
                    <Typography fontSize={'small'}>Instagram</Typography>
                    <Typography fontSize={'small'}>Thread</Typography>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }} xs={1.5}>
                    <Typography variant='h6' fontSize={'large'}>Make Money with Us</Typography>
                    <Typography fontSize={'small'}>Sell on Amijaan</Typography>
                    <Typography fontSize={'small'}>Sell under Amijaan Accelerator</Typography>
                    <Typography fontSize={'small'}>Protect and Build Your Brand</Typography>
                    <Typography fontSize={'small'}>Amijaan Global Selling</Typography>
                    <Typography fontSize={'small'}>Become an Affiliate</Typography>
                    <Typography fontSize={'small'}>Fulfilment by Amijaan</Typography>
                    <Typography fontSize={'small'}>Advertise Your Products</Typography>
                    <Typography fontSize={'small'}>Amijaan Pay on Merchants</Typography>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }} xs={1.5}>
                    <Typography variant='h6' fontSize={'medium'}>Let Us Help You</Typography>
                    <Typography fontSize={'small'}>Your Account</Typography>
                    <Typography fontSize={'small'}>Return Center</Typography>
                    <Typography fontSize={'small'}>100% Purchase Protection</Typography>
                    <Typography fontSize={'small'}>Amijaan App Download</Typography>
                    <Typography fontSize={'small'}>Help</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer