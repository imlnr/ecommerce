import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Delete } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { clear_cart } from '../redux/appReducer/action';

export default function ResponsiveDialog() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const dispatch = useDispatch();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        dispatch(clear_cart());
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button color='error' startIcon={<Delete />} variant="contained" onClick={handleClickOpen}>
                Clear Cart
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Remove all Items?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are ytou sure you want to remove all the items on cart?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' autoFocus onClick={() => setOpen(false)}>
                        Disagree
                    </Button>
                    <Button color='error' variant='contained' onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
