import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
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

export default function SearchBar() {
    const [isSectionVisible, setSectionVisible] = React.useState(false);

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

    const handleSearchClick = () => {
        // Toggle the visibility of the section
        setSectionVisible(true);
    };

    return (
        <Box id="search-bar" width={"90%"} sx={{ position: "relative", display: { md: "flex", sm: "none", xs: 'none' }, alignItems: "center", justifyContent: "center" }}>
            <Search onClick={handleSearchClick}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            {isSectionVisible && (
                // Render your section here
                <Box sx={{ position: "absolute", top: "40px", color: "black", backgroundColor: "white", paddingX: "2%", paddingY: "1%", minHeight: "300px", minWidth: "500px", borderRadius: "5px", opacity: "0.8" }}>
                    Your section content goes here
                </Box>
            )}
        </Box>
    );
}





// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(1),
//         width: 'auto',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     width: '100%',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         [theme.breakpoints.up('sm')]: {
//             width: '30ch',
//             '&:focus': {
//                 width: '70ch',
//             },
//         },
//     },
// }));

// export default function SearchBar() {
//     const [isSectionVisible, setSectionVisible] = React.useState(false);

//     const handleSearchClick = () => {
//         // Toggle the visibility of the section
//         setSectionVisible(!isSectionVisible);
//     };

//     return (
//         <Box width={"90%"}  sx={{position:"relative", display: { md: "flex", sm: "none", xs: 'none' }, alignItems: "center", justifyContent: "center" }}>
//             <Search onClick={handleSearchClick}>
//                 <SearchIconWrapper>
//                     <SearchIcon />
//                 </SearchIconWrapper>
//                 <StyledInputBase
//                     placeholder="Search…"
//                     inputProps={{ 'aria-label': 'search' }}
//                 />
//             </Search>
//             {isSectionVisible && (
//                 // Render your section here
//                 <Box sx={{position:"absolute",top:"55px",color:"black",backgroundColor:"white",paddingX:"2%",paddingY:"1%"}}>
//                     kjlkjlkj
//                 </Box>
//             )}
//         </Box>
//     );
// }
