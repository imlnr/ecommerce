// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { useDispatch, useSelector } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import SearchBar from './SearchBar';
// import { Badge } from '@mui/material';
// import { GET_LOGOUT } from '../redux/appReducer/action-types';
// const pages = [{ link: "/products", type: 'Products' }, { link: "/shops", type: 'Shops' }, { link: "/blogs", type: 'Blog' }];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function Navbar() {
//     const logged = useSelector((state) => state.isLoggedIn);
//     const user = useSelector((state)=> state.user);
//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);
//     const cart = useSelector((state) => state.cart);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };
//     const handleprofileClicks = (item)=>{
//         if(item === 'Logout'){
//             dispatch({type:GET_LOGOUT})
//             localStorage.clear();
//         }
//         if(item === 'Profile'){
//             navigate('/profile')
//         }
//         handleCloseUserMenu();
//     }

//     return (
//         <AppBar position="sticky">
//             <Container maxWidth="xxl">
//                 <Toolbar disableGutters>
//                     <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//                     <Typography
//                     onClick={()=> navigate('/')}
//                         variant="h6"
//                         noWrap
//                         component="a"
//                         // href="#app-bar-with-responsive-menu"
//                         sx={{
//                             mr: 2,
//                             cursor:'pointer',
//                             display: { xs: 'none', md: 'flex' },
//                             fontFamily: 'monospace',
//                             fontWeight: 700,
//                             letterSpacing: '.3rem',
//                             color: 'inherit',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         AMIJAAN
//                     </Typography>

//                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             color="inherit"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'left',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{
//                                 display: { xs: 'block', md: 'none' },
//                             }}
//                         >
//                             {pages.map((page) => (
//                                 <MenuItem key={page.type} onClick={handleCloseNavMenu}>
//                                     <Link to={page.link} style={{ textDecoration: "none" }}>
//                                         <Typography textAlign="center">{page.type}</Typography>
//                                     </Link>
//                                 </MenuItem>
//                             ))}
//                             <MenuItem onClick={handleCloseNavMenu}>
//                                 <Link to="/signup" style={{ textDecoration: "none" }}>
//                                     <Typography textAlign="center">Signup</Typography>
//                                 </Link>
//                             </MenuItem>
//                             <MenuItem onClick={handleCloseNavMenu}>
//                                 <Link to="/login" style={{ textDecoration: "none" }}>
//                                     <Typography textAlign="center">Login</Typography>
//                                 </Link>
//                             </MenuItem>
//                         </Menu>
//                     </Box>
//                     <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: "2" }} />
//                     <Typography
//                         variant="body1"
//                         // noWrap
//                         component="span"
//                         href="/"
//                         sx={{
//                             // width:""
//                             mr: 2,
//                             display: { xs: 'flex', md: 'none' },
//                             flexGrow: 1,
//                             fontFamily: 'monospace',
//                             fontWeight: 700,
//                             letterSpacing: '.3rem',
//                             color: 'inherit',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         AMIJAAN
//                     </Typography>
//                     <Box paddingX={"2%"} sx={{
//                         flexGrow: 1,
//                         display: { md: "flex", sm: "none", xs: 'none' },
//                         justifyContent: 'space-between'
//                     }}>
//                         <Box display={'flex'}>
//                             {pages.map((page) => (
//                                 <Link to={page.link} style={{ textDecoration: "none", color: 'white' }}>
//                                     <Button
//                                         key={page.type}
//                                         onClick={handleCloseNavMenu}
//                                         sx={{ my: 2, color: 'white', display: 'block' }}
//                                     >
//                                         {page.type}
//                                     </Button>
//                                 </Link>
//                             ))}
//                         </Box>
//                         <SearchBar />
//                     </Box>
//                     <Box sx={logged ? { flexGrow: 0, width: "10%", display: 'flex', alignItems: "center", justifyContent: 'space-around' } : { flexGrow: "0", width: "15%", display: 'flex', alignItems: "center", justifyContent: 'space-around' }}>
//                         <Badge badgeContent={cart.length === 0 ? "0" : cart.length} color='secondary' sx={{ cursor: "pointer" }} onClick={() => navigate('/cart')}>
//                             <ShoppingCartIcon />
//                         </Badge>
//                         {logged ?
//                             <Tooltip title="Open settings">
//                                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                                     <Avatar alt="Remy Sharp" src={user.avatar} />
//                                 </IconButton>
//                             </Tooltip> :
//                             // <IconButton>
//                             <Button sx={{ display: { xs: 'none', md: 'block' } }}>
//                                 <Link to='/login' style={{ textDecoration: "none", color: 'white' }}>
//                                     Login
//                                 </Link>
//                                 <Link to='/signup' style={{ textDecoration: "none", color: "white" }}>
//                                     / Signup
//                                 </Link>
//                             </Button>
//                             // </IconButton>
//                         }
//                         <Menu
//                             sx={{ mt: '45px' }}
//                             id="menu-appbar"
//                             anchorEl={anchorElUser}
//                             anchorOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             open={Boolean(anchorElUser)}
//                             onClose={handleCloseUserMenu}
//                         >
//                             {settings.map((setting) => (
//                                 <MenuItem key={setting} onClick={()=>handleprofileClicks(setting)}>
//                                     <Typography textAlign="center">{setting}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// }
// export default Navbar;





import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchBar from './SearchBar';
import { Badge } from '@mui/material';
import { GET_LOGOUT } from '../redux/appReducer/action-types';

const pages = [{ link: "/products/page/1", type: 'Products' }, { link: "/shops", type: 'Shops' }, { link: "/blogs", type: 'Blog' }];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const logged = useSelector((state) => state.isLoggedIn);
    const user = useSelector((state)=> state.user);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleProfileClicks = (item) => {
        if(item === 'Logout') {
            dispatch({type:GET_LOGOUT});
            localStorage.clear();
        }
        if(item === 'Profile') {
            navigate('/profile');
        }
        handleCloseUserMenu();
    };

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton
                        size="large"
                        aria-label="menu"
                        edge="start"
                        color="inherit"
                        onClick={handleOpenNavMenu}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            cursor: 'pointer',
                            flexGrow: 0,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        AMAZON
                    </Typography>
                    <Box display={{xs:'none',md:'flex'}}>
                             {pages.map((page) => (
                                <Link to={page.link} style={{ textDecoration: "none", color: 'white' }}>
                                    <Button
                                        key={page.type}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page.type}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <SearchBar />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Badge badgeContent={cart.length === 0 ? "0" : cart.length} color='secondary' sx={{ cursor: "pointer",mr: 2 }} onClick={() => navigate('/cart')}>
                             <ShoppingCartIcon />
                         </Badge>
                        {/* <Badge badgeContent={cart.length} color='secondary' sx={{ mr: 2 }}>
                            <IconButton color="inherit" onClick={() => navigate('/cart')}>
                                <ShoppingCartIcon />
                            </IconButton>
                        </Badge> */}
                        {logged ?
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu}>
                                    <Avatar alt="User Avatar" src={user.avatar} />
                                </IconButton>
                            </Tooltip> :
                            <Box>
                                <Button component={Link} to="/login" sx={{ mr: 1,color:"white" }}>Login</Button>
                                <Button component={Link} to="/signup" sx={{color:"white"}}>Signup</Button>
                            </Box>
                        }
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={() => handleProfileClicks(setting)}>
                                    <Typography>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
                {pages.map((page) => (
                    <MenuItem key={page.type} onClick={handleCloseNavMenu}>
                        <Link to={page.link} style={{ textDecoration: "none" }}>
                            <Typography>{page.type}</Typography>
                        </Link>
                    </MenuItem>
                ))}
                <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/signup" style={{ textDecoration: "none" }}>
                        <Typography>Signup</Typography>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <Typography>Login</Typography>
                    </Link>
                </MenuItem>
            </Menu>
        </AppBar>
    );
}

export default Navbar;
