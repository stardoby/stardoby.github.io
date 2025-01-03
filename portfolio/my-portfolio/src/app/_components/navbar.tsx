'use client';
import soundOn from '../assets/sound-on.png';
import soundOff from '../assets/sound-off.png';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Face2RoundedIcon from '@mui/icons-material/Face2Rounded';
import NoteAltRoundedIcon from '@mui/icons-material/NoteAltRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';

export default function NavBar() {

    const [soundToggle, setSoundToggle] = useState(true);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openNested, setOpenNested] = useState(true);

    const PAGES = ['CuteQueue', 'VCB', 'Visual Resumé', 'Friends in Orbit', 
        'How Fire Became Good', 'Burst', 'Graphics', 'AI & Parkinsons'
    ]

    function toggleSound() {
        if (soundToggle) {
            setSoundToggle(false);
        } else {
            setSoundToggle(true);
        }
    }

    function toggleDrawer() {
        if (!openDrawer) {
            setOpenDrawer(true);
        } else {
            setOpenDrawer(false);
        }
    }

    const handleClick = () => {
        setOpenNested(!openNested);
    };

    return (
        <div className="fixed z-30 top-0 w-screen h-fit bg-white-gradient flex flex-row justify-between pt-4 pb-8 px-14">
            <IconButton aria-label="hamburger" size="large" onClick={toggleDrawer}>
                <MenuRoundedIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton id="sound-button" onClick={toggleSound}>{soundToggle ? 
                <Image id='sound-on-icon' 
                src={soundOn} 
                width={77} 
                height={41} 
                alt="sound on speaker"></Image> :
                <Image id='sound-off-icon' 
                src={soundOff} 
                width={77} 
                height={41} 
                alt="sound off speaker"></Image>}</IconButton>
                <Drawer open={openDrawer} onClose={toggleDrawer} className="absolute" >
                <List
                    sx={{ width: '100%', bgcolor: 'background.paper', paddingRight: '50px', paddingLeft: '20px' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                          <b>Star's Portfolio</b>
                        </ListSubheader>
                      }>
                <ListItemButton href="/" sx={{paddingLeft: '20px', paddingRight: '150px'}}>
                    <ListItemIcon>
                    <HomeRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" slotProps={{primary: {fontSize: '24px'}}} />
                </ListItemButton>
                <ListItemButton href="/about" sx={{paddingLeft: '20px', paddingRight: '150px'}}>
                    <ListItemIcon>
                    <Face2RoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" slotProps={{primary: {fontSize: '24px'}}} />
                </ListItemButton>
                <ListItemButton onClick={handleClick} sx={{paddingLeft: '20px'}}>
                    <ListItemIcon>
                    <NoteAltRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Projects" slotProps={{primary: {fontSize: '24px'}}} />
                    {openNested ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openNested} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    {PAGES.map((text, index) => (
                    <ListItemButton key={text} sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <MenuRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary={text} slotProps={{primary: {color:'#666666'}}} />
                    </ListItemButton>
                    ))}
                    
                    </List>
                </Collapse>
                </List>
                </Drawer>
        </div>
    );
}

