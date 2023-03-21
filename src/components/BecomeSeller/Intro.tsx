import React from 'react'
import {Box, Typography, Container, Grid,Button, Card, CardContent} from "@mui/material";
import GraphicDesign from "../../assets/images/life-skills.webp"

function Intro() {
  return (
    <Container maxWidth="xl" >
        <Grid container>
          <Grid item xs={12} md={6}>
          <Typography component="h2">Ready to start selling on LifeSkills? Here’s the breakdown:</Typography>
          <Box component="div">
          <Typography component="p"><b>Learn what makes a successful profile</b><br/>
          Discover the do’s and don’ts to ensure you’re always on the right track.
          </Typography>
          </Box>
          <Box component="div">
          <Typography component="p"><b>Create your seller profile</b><br/>
         

Add your profile picture, description, and professional information.</Typography>
          </Box>
          <Box component="div">
          <Typography component="p"><b>Publish your Product</b><br/>
          
Create a Gig of the service you’re offering and start selling instantly.
          </Typography>
          </Box>
            <Button variant="contained">Continue</Button>
          </Grid>
          <Grid item xs={12} md={6}>
          <img src={GraphicDesign} alt=""/>
          </Grid>
        </Grid>
       

    </Container>
  )
}

export default Intro