import React from 'react'
import {Avatar,Box, Typography, Container, Grid, Button } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import TalentBlock from '../TalentBlock';
import Userimg from '../../assets/images/avatar_1.jpg';

function UserInfo() {
  return (
    <>
    <div className='user-banner'></div>
    <Container maxWidth="xl">
    <Grid container>
        <Grid item xs={8}>
        <Box className="user-details">
    <Avatar alt="Remy Sharp"
        src={Userimg}
        sx={{ width:150, height: 150,bgcolor: "deepPurple" }}
      />
      <Box>
      <Typography component="h4" > Remy Sharp <span><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>(77 Reviews)</span></Typography>
      <Typography component="p">Student</Typography>
      <Typography component="p"><span><LocationOnIcon/> Germany</span><span><LanguageIcon/> Speaks English, German</span></Typography>
      </Box>
      
    </Box>
    <Box component='div' className='user-desc'>
        <Typography  component="h5" sx={{mt:3}}>About me</Typography>
        <Typography component="p">Hello, I am a 27-year-old freelancer from Germany. Since 6 years I create websites for customers and since 3 years I am a full-time freelancer. I create websites for small to medium-sized companies. German: Hey, mein Name ist Arber, ich komme aus dem Norden Deutschlands und bin 27 Jahre alt. Seit 6 Jahren in der Webentwicklung tätig & seit 3 Jahren als Freelancer unterwegs, erstelle ich Wordpress Webseiten für klein bis mittelständische Unternehmen.</Typography>
        <Typography  component="h5"  sx={{mt:3}} >I'm an expert in</Typography>
        <Typography component="p">WordPress - Elementor - Website development - Bug Fixes - Help/Consultation - Website design</Typography>
    </Box>
    
        </Grid>
        
        <Grid item xs={4}>
            <Box className="user-contact">
        <Button variant="outlined"><FavoriteBorderIcon/> Save for Later</Button>
        <Button variant="outlined" sx={{ml:2}}><CalendarMonthIcon/> Book Tutor</Button>
        <Box component="div">
            <p>Request a quote or ask me anything</p>
            <Button variant="contained"><RecentActorsIcon/> Contact Me</Button>
            <p>Average response time 1h</p>
        </Box>
        </Box>
        </Grid>
    </Grid>
        <Box component="div" className='my-projects'>
            <Typography component="h2">My Projects</Typography>
            <Grid container spacing={2}>
            <Grid item xs={4}><TalentBlock/></Grid>
            <Grid item xs={4}><TalentBlock/></Grid>
            <Grid item xs={4}><TalentBlock/></Grid>
            </Grid>
        </Box>
        <Box component="div" className='my-projects'>
            <Typography component="h2">Reviews</Typography>
           
        </Box>
    </Container>
    </>
  )
}

export default UserInfo