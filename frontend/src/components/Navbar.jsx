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
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchBar from './SearchBar';
import { Badge } from '@mui/material';
import { GET_LOGOUT } from '../redux/appReducer/action-types';

const pages = [{ link: "/products/page/1", type: 'Products' }, { link: "/shops", type: 'Shops' }, { link: "/blogs", type: 'Blog' }];
const settings = ['Profile', 'wishlist', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const logged = useSelector((state) => state.isLoggedIn);
    const user = useSelector((state) => state.user);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [userDrawerOpen, setUserDrawerOpen] = React.useState(false);
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
        if (item === 'Logout') {
            dispatch({ type: GET_LOGOUT });
            localStorage.clear();
        }
        if (item === 'Profile') {
            navigate('/profile');
        }
        if (item === 'wishlist') {
            navigate('/wishlist')
        }
        handleCloseUserMenu();
        setUserDrawerOpen(false);
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const toggleUserDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setUserDrawerOpen(open);
    };

    const drawerList = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {pages.map((page) => (
                    <ListItem key={page.type} disablePadding>
                        <ListItemButton component={Link} to={page.link}>
                            <ListItemText primary={page.type} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/signup">
                        <ListItemText primary="Signup" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/login">
                        <ListItemText primary="Login" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const userDrawerList = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleUserDrawer(false)}
            onKeyDown={toggleUserDrawer(false)}
        >
            <List>
                {settings.map((setting) => (
                    <ListItem key={setting} disablePadding>
                        <ListItemButton onClick={() => handleProfileClicks(setting)}>
                            <ListItemText primary={setting} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton
                        size="large"
                        aria-label="menu"
                        edge="start"
                        color="inherit"
                        onClick={toggleDrawer(true)}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="left"
                        open={drawerOpen}
                        onClose={toggleDrawer(false)}
                    >
                        {drawerList()}
                    </Drawer>
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
                    <Box display={{ xs: 'none', md: 'flex' }}>
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
                        <Badge badgeContent={cart.length === 0 ? "0" : cart.length} color='secondary' sx={{ cursor: "pointer", mr: 2 }} onClick={() => navigate('/cart')}>
                            <ShoppingCartIcon />
                        </Badge>
                        {logged ?
                            <Tooltip title="Open settings">
                                <IconButton onClick={toggleUserDrawer(true)}>
                                    <Avatar alt="User Avatar" src={user.avatar} />
                                </IconButton>
                            </Tooltip> :
                            <Box>
                                <Button component={Link} to="/login" sx={{ mr: 1, color: "white" }}>Login</Button>
                                <Button component={Link} to="/signup" sx={{ color: "white" }}>Signup</Button>
                            </Box>
                        }
                        <Drawer
                            anchor="right"
                            open={userDrawerOpen}
                            onClose={toggleUserDrawer(false)}
                        >
                            {userDrawerList()}
                        </Drawer>
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
