import React from "react";
import Image from "next/image";
import NavBar from "./_components/navbar";
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
      <PageTwo />
    </main>
  );
}
