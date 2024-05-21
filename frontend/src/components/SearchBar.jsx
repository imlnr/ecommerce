import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../redux/appReducer/action';
import ResultSearch from './ResultSearch';

const SearchContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '30ch',
            '&:focus': {
                width: '70ch',
            },
        },
    },
}));

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export default function SearchBar() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.search);
    const [searchQuery, setSearchQuery] = React.useState("");
    const [isSectionVisible, setSectionVisible] = React.useState(false);
    const [debouncedQuery, setDebouncedQuery] = React.useState("");
    console.log(products)

    const debouncedSetSearchQuery = React.useCallback(
        debounce((query) => {
            setDebouncedQuery(query);
        }, 500),
        []
    );

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest("#search-bar") === null) {
                setSectionVisible(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    React.useEffect(() => {
        if (debouncedQuery) {
            console.log('Fetching results for:', debouncedQuery);
            //api call
            dispatch(searchProducts(searchQuery))
        }
    }, [debouncedQuery]);

    const handleSearchClick = () => {
        setSectionVisible(true);
    };

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
        debouncedSetSearchQuery(event.target.value);
    };

    return (
        <Box id="search-bar" width={"90%"} sx={{ position: "relative", display: { md: "flex", sm: "none", xs: 'none' }, alignItems: "center", justifyContent: "center" }}>
            <SearchContainer onClick={handleSearchClick}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchQuery}
                    onChange={handleChange}
                />
            </SearchContainer>
            {isSectionVisible && (
                products.length != 0 ?
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", position: "absolute", top: "40px", color: "white", width: "600px", backgroundColor: "primary.main", padding: "1%", borderRadius: "5px", opacity: "0.9" }}>
                        {products.map((ele) => (
                            <ResultSearch prod={ele} />
                        ))}
                    </Box> : null
            )}
        </Box>
    );
}
