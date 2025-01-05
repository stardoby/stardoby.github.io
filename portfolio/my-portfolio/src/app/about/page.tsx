'use client';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import NavBar from "../_components/navbar";
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import InstagramIcon from "../assets/Instagram.png";
import LinkedinIcon from "../assets/Linkedin.png";
import FullPortrait from "../assets/full-portrait.jpg";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <main>
      <NavBar></NavBar>
      <Box sx={{ width: "100vw", height: "100vh", paddingTop: "15vh", marginBottom: "5vh"  }}>
        <Grid container spacing={6} sx={{ height: "100%", paddingRight: "5vw", paddingLeft: "5vw" }}>
          <Grid size={6}>
            <div id="photo-portrait" className="flex flex-col align-center justify-around">
                <Image id='portrait-full' 
                    src={FullPortrait}
                    width={500}
                    alt="Portrait of Star Doby"
                    className="p-6 bg-sherbert rounded-lg"></Image>
            </div>
          </Grid>
          <Grid size={6}>
            <div id="about-bio" className="flex flex-col gap-6">
              <div className="text-5xl text-gray-1">Hello, I'm Star!</div>
              <div className="text-lg text-gray-1">
                Currently, Star is finishing their masters degree at Stanford
                University in Computer Science & Human-Computer Interaction,
                where she is learning deeply about accessible design, education
                technology, and designing data. She loves building systems that
                have direct and immediate impact to students and teachers. Her
                ultimate mission is to work in the EdTech industry because she believes
                improvements in learning technology could make a world of a
                difference for closing education disparities.
                She is proud to have worked as a course assistant for the Stanford Computer Science
                Department for 4 courses: Introduction to Human-Computer Interaction (2 quarters),
                Social Computing, Applied Machine Learning, and Mathematical Methods for ML.
              </div>
            </div>
          </Grid>
          <Grid size={6}>
            <div id="education-bio" className="flex flex-col text-gray-1 text-md">
              <div>B.S., Computer Science, 2023</div>
              <div>M.S., Human-Computer Interaction, 2025</div>
            </div>
          </Grid>
          <Grid size={6}>
            <div id="socials" className="">
                <Stack direction="row" spacing={1}>
                    <IconButton href="mailto:stardoby@stanford.edu">
                        <MailOutlineRoundedIcon sx={{ fontSize: 30, color:'#8C8FE9' }}/>
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/star-doby/" target="_blank">
                        <Image id='linked-in-icon' 
                            src={LinkedinIcon} 
                            width={25} 
                            
                            alt="Linked In Icon"></Image>
                    </IconButton>
                    
                    <Button href="/files/2024_Dec_Resume.pdf" target="_blank" variant="outlined" endIcon={<FileDownloadRoundedIcon sx={{ fontSize: 44 }}/>} sx={{ color:'#666666', borderColor: '#8C8FE9', fontFamily:'Nintendo', textTransform: 'lowercase' }}>
                        Resumé
                    </Button>
                    
                </Stack>
            </div>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
