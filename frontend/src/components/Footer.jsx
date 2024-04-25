import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const Footer = () => {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling animation
        });
    }

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box width={"100%"} sx={{ backgroundColor: "#232f3e", color: "white" }}>
            <Button onClick={() => scrollToTop()} sx={{ backgroundColor: "#37475a", color: 'white' }} fullWidth size='large'>Back to top</Button>
            <Grid paddingY={"50px"} container columns={12} justifyContent={'center'} gap={'3%'} color={'white'}>
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

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2%", borderTop: "1px solid grey", borderBottom: "1px solid grey", paddingY: "1%" }}>
                <Typography>AMIJAAN</Typography>
                <FormControl sx={{ m: 1, minWidth: 130 }}>
                    <InputLabel sx={{ color: 'white' }} id="demo-simple-select-autowidth-label">Language</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={age}
                        onChange={handleChange}
                        autoWidth
                        label="Age"
                        sx={{ color: 'white' }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Spanish</MenuItem>
                        <MenuItem value={21}>Hindi</MenuItem>
                        <MenuItem value={22}>Telugu</MenuItem>
                        <MenuItem value={"tamil"}>Tamil</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ color: "white", m: 1, minWidth: 110 }}>
                    <InputLabel sx={{ color: 'white' }} id="demo-simple-select-autowidth-label">Country</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={age}
                        onChange={handleChange}
                        autoWidth
                        label="Age"
                        sx={{ color: 'white' }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>India</MenuItem>
                        <MenuItem value={21}>Pakistan</MenuItem>
                        <MenuItem value={22}>China</MenuItem>
                        <MenuItem value={"tamil"}>USA</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ backgroundColor: "primary.main", paddingY: "1%" }}>
                <Typography textAlign={'center'}>2024-{new Date().getFullYear()} Developed by Laxminarayan with {"<3"}</Typography>
            </Box>
        </Box>
    )
}

export default Footer



