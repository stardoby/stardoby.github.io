'use client';
import NavBar from "../../_components/navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

export default function AboutMe() {
  return (
    <main>
      <NavBar></NavBar>
      <Box sx={{ width: "100vw", height: "100vh", paddingTop: "15vh", marginBottom: "5vh"  }}>
        <Grid container spacing={6} sx={{ height: "100%", paddingRight: "5vw", paddingLeft: "5vw" }}>
          <Grid id="title-section" size={6}>
          </Grid> 
          <Grid id="first-image" size={6}>
          </Grid>
          <Grid id="first-divider" size={12}>
          </Grid>
          <Grid id="second-image" size={6}>
          </Grid>
          <Grid id="the-need" size={6}>
          </Grid>
          <Grid id="quote-banner" size={12}>
          </Grid>
          <Grid id="the-challenge" size={12}>
          </Grid>
          <Grid id="the-solution" size={12}>
          </Grid>
          <Grid id="tools-section" size={6}>
          </Grid> 
          <Grid id="roles-section" size={6}>
          </Grid>
          <Grid id="links-more" size={12}>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
