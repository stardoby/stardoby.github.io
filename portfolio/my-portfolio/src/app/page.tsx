
import React from 'react';
import NavBar from './_components/navbar';

export default function Home() {
  
  return (
   <main><NavBar></NavBar>
   <div id="main-container" className="flex flex-row w-screen h-screen">
      <div id="hero-container" className='h-full w-3/6 bg-violet-300'></div>
      <div id="name-title" className=' h-full w-3/6 bg-blue-300'></div>
   </div>
   </main>
  );
}
