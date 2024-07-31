'use client';
import Image from 'next/image';
import Disc from '../assets/final-disc-2.png';
import grayBG from '../assets/gray-bg.png';
import Ellipse from '../assets/disc-shadow.png';
import discLine from '../assets/disc-line-1.png';
import fadeRect from '../assets/fade-rect.png';
import React, {useEffect, useState} from 'react';

export default function Loading() {

  function changeShadow () {
    const [showElement, setShowElement] = useState(true);
    useEffect(() => {
      setTimeout(function () {
        setShowElement(false);
      }, 1000*10);
    }, []);
    return (
      <div className='absolute top-2/3 flex items-center justify-center h-3'>
        {showElement ? 
        (<Image id='disc-shadow' 
        src={Ellipse}
        width={211}
        height={12}
        alt="Disc shadow"
        />) :
        (<Image id='disc-line'
          src={discLine}
          width={211}
          height={5}
          alt="Disc line"
          />)
        }
      </div> 
    );
  }

  function slideDisc () {
    /*const [showSlide, setShowSlide] = useState(false);
    useEffect(() => {
      setTimeout(function () {
        setShowSlide(true);
      }, 1000*10);
    }, []);*/
    return (
      <div className='flex flex-col gap-2.5 border-2 -translate-x-2/4 -translate-y-2/4 absolute top-2/3 left-2/4 h-2/4 w-2/4 bg-white'>
        <div className='bg-white h-2/4 w-full border-2 inline-flex'></div>
        <div className='bg-white h-2/4 w-full border-2 inline-flex'></div>
      </div>
    );
  }

  return (
    <main className='flex bg-white h-screen flex-col items-center justify-center'>
      <Image className='animate-speed-up'
      src={Disc}
      width={215}
      height={215}
      alt="Image of a CD with STAR written on it"
      />
      {changeShadow()}
      {slideDisc()}
      <div className='absolute top-2/3 pt-6'>
        <Image className='animate-speed-reflect origin-center rotate-180 opacity-20'
        src={Disc}
        width={215}
        height={215}
        alt="Reflection of disc on the ground"
        />
      </div>
      <Image className='absolute top-2/3 pt-20'
      src={fadeRect}
      width={215}
      height={245}
      alt="Faded reflection"
      loading="lazy"
      />
      <Image className='min-w-full absolute top-1/2'
      src={grayBG}
      width={1280}
      height={342}
      alt="Faded rectangle in background"
      />
     
      <Image className='min-w-full absolute top-3/4'
      src={grayBG}
      width={1280}
      height={342}
      alt="Faded rectangle in background"
      />
    </main>
  );
}