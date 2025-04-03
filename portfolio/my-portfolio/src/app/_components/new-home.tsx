
import Image from 'next/image';
import PurpleQtr from "../assets/purple-qtr.png";
import PurpleHalf from "../assets/purple-half.png";
import BlueHalf from "../assets/blue-half.png";
import Portrait from "../assets/portrait.png";
import StartButton from "../assets/start-button.png";
import LightPurple from "../assets/purple-ellipse-lt.png";
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
            <div className="absolute top-16 left-0">
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
            <div className="absolute w-fit flex flex-col -left-1 top-1/2 mt-16 z-10 tracking-wide whitespace-nowrap">
                <h4>developer designer creative musician gamer teacher developer designer singer musician gamer educator developer</h4>
                <h4 className='opacity-55'>developer designer creative musician gamer teacher developer designer singer musician gamer educator developer</h4>
                <h4 className='opacity-25'>developer designer creative musician gamer teacher developer designer singer musician gamer educator developer</h4>
                <h4 className='opacity-15'>developer designer creative musician gamer teacher developer designer singer musician gamer educator developer</h4>
            </div>
            <div className='flex flex-col items-center z-40'>
                <Image 
                    id="portrait-star"
                    src={Portrait}
                    alt="Portrait of Star"
                />
                <Button href="#home-page-2">
                    <Image 
                        id="start-button"
                        src={StartButton}
                        alt="Wii Start Button"
                        className="-mt-8 hover:scale-110"
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
            <div id="star-title-name" className='absolute flex flex-row space-x-80 ml-8'>
                <h1 className="text-gray-1">Star</h1>
                <h1 className="text-gray-1">Doby</h1>
            </div>
            
        </div>
    );




}