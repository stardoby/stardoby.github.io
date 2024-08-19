import Image from 'next/image';
import BigStroke from '../assets/big-stroke.svg';
import UsersIcon from '../assets/research-dark.png';
import CodeIcon from '../assets/code-dark.png';
import PenIcon from '../assets/pen-dark.png';


export default function SkillsPage() {
    return(
        <div id="home-page-2" className='w-screen h-screen relative pt-10'>
            <div className='absolute flex w-screen h-screen justify-center align-center'><Image id='big-stroke' width={1400} height={557} src={BigStroke} alt="long colorful stroke"></Image></div>
        </div>
    );
}