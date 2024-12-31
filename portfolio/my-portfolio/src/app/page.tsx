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
import NewHome from "./_components/new-home";

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <div>{NewHome()}</div>
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
