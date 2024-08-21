import Image from 'next/image';
import BigStroke from '../assets/big-stroke.svg';
import UsersIcon from '../assets/research-dark.png';
import CodeIcon from '../assets/code-dark.png';
import PenIcon from '../assets/pen-dark.png';


export default function SkillsPage() {
    return(
        <div id="home-page-2" className='w-screen h-screen relative pt-10'>
            <div id='big-stroke' className='absolute flex w-screen h-screen justify-center align-center'><Image id='big-stroke' width={1400} height={557} src={BigStroke} alt="long colorful stroke"></Image></div>
            <div id='skills-container' className='absolute flex w-screen h-screen justify-center items-center align-center'> 
                <div id='skills' className='flex flex-row w-fit h-fit gap-12 items-start justify-center '>
                    <div id='skill-1' className='flex flex-col  gap-5 w-3/12 py-5 px-8 bg-super-light rounded-lg shadow-md'>
                        <div className="w-full h-1/3 py-2 px-8 flex justify-center align-center"><Image id='dark-pen-icon' src={PenIcon} height={120} width={120} alt='dark design pen icon'></Image></div>
                        <div className='flex flex-col gap-2.5 w-full'>
                            <div><h3>UI/UX Design</h3></div>
                            <div><h5>Figma is my forté! I love thinking about and implementing accessible design practices.<span className='text-transparent'>Extra texttt</span></h5></div>
                        </div>
                    </div>
                    <div id='skill-2' className='flex flex-col gap-5 w-3/12  py-5 px-8 bg-super-light rounded-lg shadow-md'>
                        <div className="w-full h-1/3 py-2 px-8 flex justify-center align-center"><Image id='dark-code-icon' src={CodeIcon} height={120} width={120} alt='dark code icon'></Image></div>
                        <div className='flex flex-col gap-2.5 w-full'>
                            <div><h3>Web Dev</h3></div>
                            <div><h5>Tailwind CSS is a life saver. I`m constantly looking for ways to make front-end development easier. </h5></div>
                        </div>
                    </div>
                    <div id='skill-3' className='flex flex-col gap-5 w-3/12  py-5 px-8 bg-super-light rounded-lg shadow-md'>
                        <div className="w-full h-1/3 py-2 px-8 flex justify-center align-center"><Image id='users-icon' src={UsersIcon} height={120} width={120} alt='users icon'></Image></div>
                        <div className='flex flex-col gap-2.5 w-full'>
                            <div><h3>User Research</h3></div>
                            <div><h5>How do we make people feel valued in the design process? From interviewing to testing, I try my best.</h5></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}