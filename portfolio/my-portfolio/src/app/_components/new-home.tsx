

import Image from 'next/image';
import PurpleQtr from "../assets/purple-qtr.png";
import PurpleHalf from "../assets/purple-half.png";
import BlueHalf from "../assets/blue-half.png";
import Portrait from "../assets/portrait.png";
import StartButton from "../assets/start-button.png";
import LightPurple from "../assets/purple-ellipse-lt.png";
import StarLogo from "../assets/star-logo.png";
import SmallBlue from "../assets/small-blue-circle.png";
import CodeIcon from "../assets/code-icon.png";
import PenIcon from "../assets/pen-icon.png";
import EducIcon from "../assets/educ-icon.png";
import AltoIcon from "../assets/alto-icon.png";
import NoteIcon from "../assets/note-icon.png";
import Button from '@mui/material/Button';

export default function NewHome() {
    return (
        <div id="home-page-1" className="relative flex flex-col w-screen h-screen items-center justify-center">
            <div className="absolute top-16 left-0 z-40">
                <Image
                id="purple-quarter-circle"
                src={PurpleQtr}
                alt="Quarter of circle with purple outline"
                ></Image>
            </div>
            <div className="absolute bottom-1/4 right-0 z-40 flex flex-row items-center ">
                <Image
                    id="purple-half-circle"
                    src={PurpleHalf}
                    alt="Half of circle with purple outline"
                    className="-mr-24"
                />
                <Image
                    id="blue-half-circle"
                    src={BlueHalf}
                    alt="Half of circle with blue outline"
                />
            </div>
            <div className="absolute w-fit flex flex-col -left-1 top-8 mt-16 z-10 tracking-wide whitespace-nowrap gap-4">
                {[...Array(11)].map((x, i) => <h4 key={i}><span className="animate-fade-out">designer</span> <span>singer</span> <span>teacher</span> <span>developer</span> <span>musician</span> <span>UI/UX</span> <span>education</span> <span>edtech</span> <span>designer</span> <span>singer</span> <span>designer</span> <span>singer</span> <span>teacher</span> <span>developer</span> <span>musician</span> <span>UI/UX</span> <span>education</span> <span>edtech</span> <span>designer</span> <span>singer</span> </h4>)}
            </div>
            <div className='flex flex-col justify-center items-center z-40 h-fit gap-0'>
                <Image 
                    id="portrait-star"
                    src={Portrait}
                    alt="Portrait of Star"
                    className=''
                    width={400}
                    height={450}
                />
                <Button href="#home-page-2">
                    <Image 
                        id="start-button"
                        src={StartButton}
                        alt="Wii Start Button"
                        className="hover:scale-110 -mt-8"
                    />
                </Button>
            </div>
            <div className='absolute z-10 mb-32'>
                <Image 
                    id="purple-ellipse"
                    src={LightPurple}
                    alt="Light Purple Ellipse"
                    className='opacity-30'
                />
            </div>
            <div id="star-title-name" className='absolute flex flex-row space-x-80 ml-8 z-50'>
                <h1>Star</h1>
                <h1>Doby</h1>
            </div>
            <div id="trans-rect" className='absolute bg-white w-1/3 h-1/2 z-30 mb-24 opacity-[.67]'>
                 
            </div>
            <div className="absolute top-1/4 right-1/3 z-50" id="starlogo-contain">
                <Image
                    id="star-logo"
                    src={StarLogo}
                    alt="Logo shaped as scribbled star"
                />
            </div>
        </div>
    );




}