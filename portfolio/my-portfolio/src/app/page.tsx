
import React from 'react';
import Image from 'next/image';
import NavBar from './_components/navbar';
import Portrait from './assets/portrait.png';
import Stroke from './assets/stroke-svg.svg';
import AltoIcon from './assets/alto-icon.png';
import CodeIcon from './assets/code-icon.png';
import NoteIcon from './assets/note-icon.png';
import Eighths from './assets/eighth-notes.png';
import PenIcon from './assets/pen-icon.png';
import ThinStar from './assets/thin-star.png';
import Seperator from './assets/page-separator.png';
import PageTwo from './_components/skills';

export default function Home() {
  
  return (
   <main><NavBar></NavBar>
   <div id="home-page-1" className="flex flex-row w-screen h-screen">
      <div id="hero-container" className='h-screen w-3/6 relative'>
        <div className='absolute bottom-1/4 left-1/4 mb-2 z-20'><Image id="star-portrait" src={Portrait} width={423} height={431} alt="portrait of star" /></div>
        <div className='absolute bottom-0 mb-20 ml-4 left-1/4 z-10'><Image id="color-stroke" src={Stroke} width={390} height={555} alt="colorful pen stroke" /></div>
        <div className='absolute top-0 left-1/2 mt-24'><Image id="eighths" src={Eighths} alt="two eighth notes icon"></Image></div>
        <div className='absolute bottom-1/4 ml-32'><Image id="alto-icon" src={AltoIcon} alt="alto clef icon"></Image></div>
        <div className='absolute top-1/4 right-0 mt-12 mr-16'><Image id="code-icon" src={CodeIcon} alt="code icon"></Image></div>
        <div className='absolute top-1/4 ml-28 mt-12'><Image id="note-icon" src={NoteIcon} alt="eighth note icon"></Image></div>
        <div className='absolute top-1/2 mt-12  mr-8 right-0'><Image id="pen-icon" src={PenIcon} alt="design pen icon"></Image></div>
        <div className='absolute top-0 left-1/4 ml-16 mt-44'><h4>designer</h4></div>
        <div className='absolute top-0 left-1/2 ml-36 mt-40'><h4>developer</h4></div>
        <div className='absolute top-1/4 right-0 mt-40 mr-16'><h4>front-end</h4></div>
        <div className='absolute right-0 mr-16 top-1/2 mt-44'><h4>education</h4></div>
        <div className='absolute left-0 ml-28 top-1/2'><h4>UI/UX</h4></div>
        <div className='absolute left-0 ml-32 top-3/4 mt-20'><h4>teacher</h4></div>
        <div className='absolute left-1/4 ml-32 mb-32 bottom-0'><h4>musician</h4></div>
      </div>
      <div id="name-title" className=' h-full w-3/6 flex flex-col items-center justify-center gap-14'>
      <div id="name-container" className='w-full flex flex-col'>
        <div className='flex justify-center'><Image id="thin-star" src={ThinStar} alt='Star written in thin font'></Image></div>
        <div><h1 className='text-gray-1 text-center'>Star Doby</h1></div>
      </div>
      <div id="creative-title" className='flex flex-col gap-5 w-full'>
        <div><h2 className='w-full text-gray-1 text-center text-4xl'>Creative in more ways than one</h2></div>
        <div id='reflection-title' className='flex flex-col w-full relative'>
          <div className='w-full'><h2 className='bottom-0 text-gray-1 text-center text-4xl rotate-180'>Creative in more ways than one</h2></div>
          <div className='absolute bottom-0 pb-2 z-10 w-full bg-reflect-gradient text-4xl text-transparent'>C</div>
        </div>
        </div>
      </div>
   </div>
   <div className='absolute top-3/4 mt-20'><Image id="page-separator-1" src={Seperator} alt="gradient that seperates page"></Image></div>
   <div>{PageTwo()}</div>
   </main>
  );
}
