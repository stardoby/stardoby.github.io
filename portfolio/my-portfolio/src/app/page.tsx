import React from "react";
import Image from "next/image";
import NavBar from "./_components/navbar";
import Portrait from "./assets/portrait.png";
import Stroke from "./assets/stroke-svg.svg";
import AltoIcon from "./assets/alto-icon.png";
import CodeIcon from "./assets/code-icon.png";
import NoteIcon from "./assets/note-icon.png";
import Eighths from "./assets/eighth-notes.png";
import PenIcon from "./assets/pen-icon.png";
import Seperator from "./assets/page-separator.png";
import PageTwo from "./_components/skills";

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <div id="home-page-1" className="flex flex-row w-screen h-screen">
        <div id="hero-container" className="min-h-full w-3/6 relative">
          <div className="absolute inset-0 m-auto z-20 w-fit h-fit">
            <Image
              id="star-portrait"
              src={Portrait}
              width={423}
              height={431}
              alt="portrait of star"
            />
          </div>
          <div className="absolute inset-0 m-auto pt-24 w-fit h-fit z-10">
            <Image
              id="color-stroke"
              src={Stroke}
              width={390}
              height={500}
              alt="colorful pen stroke"
            />
          </div>
          <div className="absolute bottom-1/2 left-1/2 mb-48">
            <Image
              id="eighths"
              src={Eighths}
              alt="two eighth notes icon"
            ></Image>
          </div>
          <div className="absolute top-1/2 right-1/2 mt-40 mr-40">
            <Image id="alto-icon" src={AltoIcon} alt="alto clef icon"></Image>
          </div>
          <div className="absolute bottom-1/2 left-1/2 ml-36 mb-12">
            <Image id="code-icon" src={CodeIcon} alt="code icon"></Image>
          </div>
          <div className="absolute bottom-1/2 right-1/2 mr-32">
            <Image id="note-icon" src={NoteIcon} alt="eighth note icon"></Image>
          </div>
          <div className="absolute top-1/2 left-1/2 mt-16 ml-52">
            <Image id="pen-icon" src={PenIcon} alt="design pen icon"></Image>
          </div>
          <div className="absolute bottom-1/2 right-1/2 mb-40 mr-8 ">
            <h4>designer</h4>
          </div>
          <div className="absolute bottom-1/2 left-1/2 mb-44 ml-28">
            <h4>developer</h4>
          </div>
          <div className="absolute bottom-1/2 left-1/2 -mb-4 ml-40">
            <h4>front-end</h4>
          </div>
          <div className="absolute top-1/2 left-1/2 mt-44 ml-44">
            <h4>education</h4>
          </div>
          <div className="absolute top-1/2 right-1/2 mt-12 mr-48">
            <h4>UI/UX</h4>
          </div>
          <div className="absolute top-1/2 right-1/2 mt-64 mr-24">
            <h4>teacher</h4>
          </div>
          <div className="absolute top-1/2 right-1/2 -mr-10 mt-56 ">
            <h4>musician</h4>
          </div>
        </div>
        <div
          id="right-container"
          className=" h-full w-3/6 flex flex-col justify-start pt-4"
        >
          <div
            id="right-background"
            className="w-full h-full flex flex-col relative"
          >
            <div
              id="name-title"
              className="absolute flex flex-col gap-8 bg-white inset-0 m-auto h-fit py-8 px-8 w-full shadow-lg"
            >
              <div>
                <h1 className="text-gray-1 text-center">Star Doby</h1>
              </div>
              <div id="creative-title" className="flex flex-col gap-2 w-full">
                <div>
                  <h2 className="w-full text-gray-1 text-center text-3xl">
                    Creative in more ways than one
                  </h2>
                </div>
                <div
                  id="reflection-title"
                  className="flex flex-col w-full relative"
                >
                  <div className="w-full">
                    <h2 className="bottom-0 text-gray-1 text-center text-3xl rotate-180">
                      Creative in more ways than one
                    </h2>
                  </div>
                  <div className="absolute bottom-0 pb-2 z-10 w-full bg-reflect-gradient text-3xl text-transparent">
                    C
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full top-3/4 mt-20">
        <Image
          id="page-separator-1"
          src={Seperator}
          alt="gradient that seperates page"
        ></Image>
      </div>
      <div>{PageTwo()}</div>
    </main>
  );
}
