
import Image from 'next/image';
import PurpleQtr from "../assets/purple-qtr.png";
import PurpleHalf from "../assets/purple-half.png";
import BlueHalf from "../assets/blue-half.png";
import Portrait from "../assets/portrait.png";
import StartButton from "../assets/start-button.png";
import LightPurple from "../assets/purple-ellipse-lt.png";
import SmallBlue from "../assets/small-blue-circle.png";

export default function NewHome() {
    return (
        <div id="home-page-1" className="relative flex flex-col w-screen h-screen items-center justify-center">
            <div className="absolute top-0 left-0 z-40">
                <Image
                id="purple-quarter-circle"
                src={PurpleQtr}
                alt="Quarter of circle with purple outline"
                ></Image>
            </div>
            <div className="absolute bottom-0 right-0 z-40 flex flex-row items-center">
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
            <div className="absolute w-fit flex flex-row -left-1 top-1/2 mt-16 z-10 tracking-wide whitespace-nowrap">
                <h4>developer designer creative musician gamer teacher developer designer singer musician gamer educator developer</h4>
            </div>
            <div className='flex flex-col items-center z-40'>
                <Image 
                    id="portrait-star"
                    src={Portrait}
                    alt="Portrait of Star"
                />
                <Image 
                    id="start-button"
                    src={StartButton}
                    alt="Wii Start Button"
                    className="-mt-8"
                />
            </div>
            <div className='absolute z-10 mb-32'>
                <Image 
                    id="purple-ellipse"
                    src={LightPurple}
                    alt="Light Purple Ellipse"
                    className='opacity-30'
                />
            </div>
            <div className='absolute flex flex-row space-x-80 ml-8'>
                <h1 className="text-gray-1">Star</h1>
                <h1 className="text-gray-1">Doby</h1>
            </div>
            <div className='absolute top-2 z-40'>
                <Image
                    id="small-blue-1"
                    src={SmallBlue}
                    alt="Music note bubble"
                />
            </div>
            <div className='absolute flex flex-row top-16 z-40 space-x-48'>
                <Image
                    id="small-blue-2"
                    src={SmallBlue}
                    alt="Music note bubble"
                />
                <Image
                    id="small-blue-3"
                    src={SmallBlue}
                    alt="Music note bubble"
                />
            </div>
            <div className='absolute flex flex-row top-44 z-40 space-x-96'>
                <Image
                    id="small-blue-2"
                    src={SmallBlue}
                    alt="Music note bubble"
                />
                <Image
                    id="small-blue-3"
                    src={SmallBlue}
                    alt="Music note bubble"
                />
            </div>
        </div>
    );




}