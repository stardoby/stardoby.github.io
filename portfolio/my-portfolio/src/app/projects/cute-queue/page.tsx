"use client";
import NavBar from "../../_components/navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import WiiButton from "../../assets/wii-button.png";
import Cursor from "../../assets/Cursor.png";
import Image from "next/image";
import Button from '@mui/material/Button';
import CuteQueue from "../../assets/cuteq-logo.png";

export default function CuteQ() {
  return (
    <main>
      <NavBar color="green"></NavBar>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          paddingTop: "15vh",
          marginBottom: "5vh",
        }}
      >
        <Grid
          container
          spacing={6}
          sx={{ height: "100%", paddingRight: "5vw", paddingLeft: "5vw" }}
        >
          <Grid id="hero" size={7} className="bg-red">
            <div id="title-container" className="h-1/2 flex flex-col gap-6 pt-12 pl-12">
              <div id="pills" className="flex flex-row gap-2">
                <div id="pill-1" className="bg-sky-50 py-4 px-6 rounded-full">Software</div>
                <div id="pill-2" className="bg-sky-50 py-4 px-6 rounded-full">UX Case Study</div>
              </div>
              <div id="proj-title" className="text-7xl/[1.2]" >CuteQueue: Improved Office Hours</div>
              <div id="action-button" className="pt-6">
                <a href="https://docs.google.com/presentation/d/1LIJww6Ob0awRWCRZLkpepNyvmm4GxHZ4CUdZkhcQdW0/edit?usp=sharing">
                  <div className="w-fit h-fit relative">
                    <Image
                    id="wii-button"
                    src={WiiButton}
                    alt="wii styled button for prototype"
                    ></Image>
                    <div className="text-2xl absolute w-full text-center top-1/4">Slides</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="absolute bottom-0 pb-36 scale-75 left-1/3">
              <Image id="figma-cursor" src={Cursor} alt="Figma cursor with Star Doby on it"></Image>
            </div>
          </Grid>
          <Grid id="screen-hero" size={5} className="bg-black">
            <div id="image"></div>
          </Grid>
          <Grid id="problem-statement" size={12} className="bg-orange-50"></Grid>
          <Grid id="objectives" size={12}>
              <div id="objective-title"></div>
              <div id="bullet-container"></div>
          </Grid>
          <Grid id="process" size={12}>
            <div id="process-title"></div>
            <div id="bubble-container"></div>
          </Grid>
          <Grid id="challenge" size={12}>
            <div id="challenge-title"></div>
            <div id="who-statement"></div>
            <div id="challenge-pts"></div>
          </Grid>
          <Grid id="research" size={12}>
            <div id="research-title"></div>
            <div id="observations"></div>
          </Grid>
          <Grid id="competitors" size={12}>
            <div id="competitor-1"></div>
            <div id="competitor-2"></div>
          </Grid>
          <Grid id="user-needs" size={12}>
            <div id="needs-title"></div>
            <div id="needs-pts"></div>
          </Grid>
          <Grid id="features" size={12}></Grid>
          <Grid id="indicators" size={12}></Grid>
          <Grid id="task-flows" size={12}>
            <div id="task-flow-1"></div>
            <div id="task-flow-2"></div>
          </Grid>
          <Grid id="iterations" size={12}>
            <div id="iteration-title"></div>
            <div id="iteration-image"></div>
          </Grid>
          <Grid id="major-screens" size={12}>
            <div id="home-screen"></div>
            <div id="request-form"></div>
            <div id="modals"></div>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
