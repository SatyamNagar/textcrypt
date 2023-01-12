import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useState } from 'react';
import { useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Contact(props) {
    const [openCont, setOpenCont] = useState(false)

    // const handleContactClickOpen = () => {
    //     setOpenCont(true);
    // };

    const handleContactClose = () => {
        setOpenCont(false);
        props.setOpenContact(false);
    };

    useEffect(() => {
        if (props.openContact) {
            setOpenCont(true);
        } else if (!props.openContact) {
            setOpenCont(false);
        }
    }, [props.openContact])


    return (
        <div>
            <Dialog
                open={openCont}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleContactClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Get in Touch!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Checkout my GitHub profile to find more amazing free projects like this 😄.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <IconButton href='https://github.com/SatyamNagar/'><GitHubIcon/></IconButton>
                    <IconButton href='https://www.linkedin.com/in/satyamnagar/'><LinkedInIcon/></IconButton>
                    <IconButton href='https://www.instagram.com/urstrulysatyam_/'><InstagramIcon/></IconButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}