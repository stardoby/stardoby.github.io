import Image from 'next/image';
import Disc from '../assets/final-disc-2.png';
import grayBG from '../assets/gray-bg.png';
import Ellipse from '../assets/disc-shadow.png';
import Reflect from '../assets/upside-down.png';
import fadeRect from '../assets/fade-rect.png';

export default function Loading() {
  return (
    <main className="flex bg-white h-screen flex-col items-center justify-center">
      <Image className='animate-speed-up'
      src={Disc}
      width={215}
      height={215}
      alt="Image of a CD with STAR written on it"
      />
      <Image className='absolute top-2/3'
      src={Ellipse}
      width={211}
      height={12}
      alt="Disc shadow"
      loading="lazy"
      />
      <div className='absolute top-2/3 pt-6'>
        <Image className='animate-speed-reflect origin-center rotate-180 opacity-20'
        src={Disc}
        width={215}
        height={215}
        alt="Reflection of disc on the ground"
        loading="lazy"
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