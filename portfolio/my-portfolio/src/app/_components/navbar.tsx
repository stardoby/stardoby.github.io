'use client';
import soundOn from '../assets/sound-on.png';
import soundOff from '../assets/sound-off.png';
import Hamburger from '../assets/hamburger.png';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';

export default function NavBar() {

    const [soundToggle, setSoundToggle] = useState(true);

    function toggleSound() {
        if (soundToggle) {
            setSoundToggle(false);
        } else {
            setSoundToggle(true);
        }
    }

    return (
        <div className="fixed z-20 top-0 w-screen h-fit bg-white-gradient flex flex-row justify-between pt-7 pb-12 px-14">
            <div>{<Image id='hamburger' 
            src={Hamburger} 
            width={41} 
            height={41} 
            alt="hamburger icon"></Image>}</div>
            <button id="sound-button" onClick={toggleSound}>{soundToggle ? 
                <Image id='sound-on-icon' 
                src={soundOn} 
                width={77} 
                height={41} 
                alt="sound on speaker"></Image> :
                <Image id='sound-off-icon' 
                src={soundOff} 
                width={77} 
                height={41} 
                alt="sound off speaker"></Image>}</button>
        </div>
    );
}

