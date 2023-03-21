import React from 'react'
import {Box, Container, Grid, Typography, Button} from "@mui/material";
import Bannerimg from '../assets/images/home-banner-2.png';

export const BusinessBanner = () => {
  return (
    <Box className="business-banner">
       <Container maxWidth="xl">
       <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}  className='banner-content'>
            <Box component="div">
          <Typography component="h2">Find the perfect <span>Course</span> for your Growth</Typography>
          <Typography component="p">Connect with vetted experts, execute every project, and expand your team capabilities</Typography>
          <Button variant="contained" href='/allproducts' sx={{px:5,backgroundColor:"#e20177"}}>Explore</Button>
          </Box>
          </Grid>
          <Grid xs={12} sm={6} md={6}  sx={{display:"flex", alignItems:"baseline", justifyContent:"flex-end"}}>
          <img src={Bannerimg}  alt='' className='w-100'/>
          </Grid>
        </Grid> 
      </Container>
    </Box>
  )
}
