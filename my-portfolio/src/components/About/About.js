import './About.css';
import React from 'react';
import Timeline from '../Timeline/Timeline';
import headshot from '../../assets/images/headshot.png';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setOpen: false
        }
    }

    handleOpen = () => {
        this.setState({setOpen: true});
    }

    handleClose = () => {
        this.setState({setOpen: false});
    }

    render() {
        return (
            <div>
            <header className="About-header"> </header>
            <div className='About-text0'>
                <h2>Hello! I'm Star.</h2>
                <span>Human-Centered Innovator. </span>
                <span>Education Advocate. </span>
                <span>Music Enthusiast. </span>
                <span>These are really the core descriptors of who I am.</span>
                <br /><br />
                <span> I'm currently an undergraduate &#40;'23&#41; at Stanford
                    University majoring in Computer Science &#40;HCI&#41; and minoring
                    in Music. However, I will forever call Santa Monica, California my home.
                </span>
                <br /><br />
                <span> Instead of squeezing the highlights into one long paragraph,
                       please enjoy this interactive timeline I created below! 
                </span>
                <br /><br />
                <Stack direction="row" spacing={2}>
                    <div className="insta-button">
                        <IconButton href="https://www.instagram.com/miracle.star" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon sx={{ color: 'black', fontSize: '30px'}} />
                        </IconButton>
                        <span className="insta-user">@miracle.star</span>
                    </div>
                    <IconButton href="https://www.facebook.com/star.doby.9" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon sx={{ color: 'black', fontSize: '30px'}} />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/miraclestar-doby-0282781b1/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon sx={{ color: 'black', fontSize: '30px'}} />
                    </IconButton>
                    <Button variant="outlined" onClick={this.handleOpen} startIcon={<FileDownloadIcon />} sx={{ fontFamily: 'Josefin Sans' }}>
                        Download CV
                    </Button>
                </Stack>
            </div>
            <Dialog
                open={this.state.setOpen}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Proceed with Download?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    You are about to download a file.
                    Are you sure you want to continue?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={this.handleClose}>Back</Button>
                <Button href="CV.pdf" target="_blank" download autoFocus>
                    Download
                </Button>
                </DialogActions>
            </Dialog>
            <div className='headshot'><img key={"headshot"} src={headshot} width="80%" height="80%"/></div>
            <Timeline data={this.props.data} />
            </div>
        );
    }
}

export default About;