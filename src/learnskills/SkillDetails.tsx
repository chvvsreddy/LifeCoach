import React from 'react'
import {Box, Typography, Container, Grid, Button} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FAQ from './FAQ';

function SkillDetails() {
  return (
    <Box>
        <Box component="div" className="home-banner innerbanner">
    <Container maxWidth="xl" className='course-info'>    
        <Grid container spacing={4}>
            <Grid item xs={12} sm={8} md={9}>
                <Typography variant="h4" >Python for Everybody Specialization</Typography>
                <Typography component="p">Learn to Program and Analyze Data with Python. Develop programs to gather, clean, analyze, and visualize data.</Typography>
                <Box component="div" className='course-overview'>
                    <Typography component="p"><span className='yellow-color'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></span>4.9 (841 Reviews) </Typography>
                    <Typography component="p"><span className='green-color'><PlayCircleOutlineIcon/> </span>10 videos  </Typography>
                    <Typography component="p"><span className='green-color'><AccessTimeIcon/></span>1.3 Hours</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>            
            <Typography component="p">Your offering this course for</Typography>
            <Typography variant="h6" >FREE/$350</Typography>
           
            </Grid>
        </Grid>  
        </Container>  
    </Box>
    <Container maxWidth="xl">   
        <Grid container sx={{py:3}} spacing={4}>
            <Grid item xs={12} sm={8} md={9} className="course-details">
                <Box component="div" className='course-video'>
                <video  muted poster="https://assets.codepen.io/6093409/river.jpg" controls>
                    <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4" />
                </video>
               
                </Box>
                <Box className="skillsection">
                    <Typography component="h4">After Completing This Course You Will Be Able To</Typography>
                    <Typography component="p" className='include-item'><CheckCircleIcon/>Position a product or service strategically to create market demand</Typography>
                    <Typography component="p" className='include-item'><CheckCircleIcon/>Create viral content that generates interest and leaves a lasting impression</Typography>
                    <Typography component="p" className='include-item'><CheckCircleIcon/>Earn genuine trust and connect authentically with your target audience</Typography>
                    <Typography component="p" className='include-item'><CheckCircleIcon/>Grow a huge customer base while letting your competition do all the hard work for you</Typography>
                    <Typography component="p" className='include-item'><CheckCircleIcon/>Consistently share content to build a powerful habit loop with your followers</Typography>
                   
                </Box>
                <Box className="skillsection">
                    <Typography component="h4">About This Course</Typography>
                    <Typography component="p">Ensuring that a product or service sells well online is not pure luck. It’s about employing proven tactics, tools and templates to make sure that your ad campaign stands the best chance of success. Put an end to the guessing games and learn what it takes to go viral and build a strong customer base in this best-selling course.</Typography>
                    <Typography component="p">You’ll learn everything from positioning, demand and content creation strategies to audience and competitor research and how to use these skills to make money as a professional freelancer.</Typography>
                </Box>
                <Box className="skillsection">
                <Typography component="h4">Requirement</Typography>
                    <Typography component="p">Basic knowledge of HTML CSS</Typography>
                    <Typography component="p">Basic knowledge javascript</Typography>
                </Box>
                
                <Box className="skillsection">
                    <Typography component="h4">FAQs</Typography>
                    <FAQ />
                              
                </Box>
                <Box className="skillsection">
                    <Typography component="h4" sx={{pb:1}}>What Is Included?</Typography>
                    <Typography component="p" className='include-item'><CheckCircleIcon/>Immediate unlimited access to course materials</Typography>
                    <Typography component="p" className='include-item'><CheckCircleIcon/>Immediate unlimited access to course materials</Typography>
                    <Typography component="p" className='include-item'><CheckCircleIcon/>Immediate unlimited access to course materials</Typography>
                    <Typography component="p" className='include-item'><CheckCircleIcon/>Immediate unlimited access to course materials</Typography>
                    <Typography component="p" className='include-item'><CheckCircleIcon/>Immediate unlimited access to course materials</Typography>
                                
                </Box>
                <Box className="skillsection">
                    <Typography component="h4" sx={{pb:1}}>What Is Included?</Typography>
                </Box>
            </Grid> 
            <Grid item xs={12} sm={4} md={3}> 
            <Box sx={{mb:2}}  className="course-cost-info">    
                <Box>
                <Button variant="contained">Buy Course</Button>
                <Button variant="outlined">Preview Course</Button>
                <Button variant="outlined">Sve for Later</Button>

                <Typography component="p"><StarIcon/> 30-day money-back guarantee</Typography>
                <Typography component="p"><StarIcon/> Unlimited access, anywhere, anytime</Typography>
                <Typography component="p"><StarIcon/> Learn from hand-vetted instructors, experts in their field</Typography>
                </Box>
                </Box>
            <Box sx={{mb:2}}  className="course-basic-info">
            <Typography component="h3">Course Syllabus</Typography>
                <Box sx={{mt:2}}>                   
                <Typography variant="h6" >1. Secret 1: Sell The Problem, Not The Solution (14:37)<span className="free">FREE</span></Typography>
                <Typography component="p">Quiz - Secret 1: Sell The Problem, Not The Solution</Typography>
                </Box>
                <Box sx={{mt:2}}>                   
                <Typography variant="h6" >2. Secret 2: Think Like a Magazine, Not a Salesman (4:30)</Typography>
                <Typography component="p">Quiz - Secret 2: Think Like a Magazine, Not a Salesman</Typography>
                </Box>
                <Box sx={{mt:2}}>                   
                <Typography variant="h6" >3. Secret 3: Content Is King, but Consistency Is Queen (3:56)</Typography>
                <Typography component="p">Quiz - Secret 3: Content Is King, but Consistency Is Queen</Typography>
                </Box>
                <Box sx={{mt:2}}>                   
                <Typography variant="h6" >4. Secret 4: Punch Above Your Weight Class (11:00)</Typography>
                </Box>
                <Box sx={{mt:2}}>                   
                <Typography variant="h6" >5. Secret 5: Ethically Steal Your Competitors' Customers (8:12)</Typography>
                </Box>
                <Box sx={{mt:2}}>                   
                <Typography variant="h6" >6. Secret 6: Bulid an Audience By Borrowing (10:25)</Typography>
                </Box>
                <Box sx={{mt:2}}>                   
                <Typography variant="h6" >7. Secret 7: Be a Shadow, Not a Ghost (5:19)</Typography>
                </Box>
                <Box sx={{mt:2}}>                   
                <Typography variant="h6" >8. Bonus: Tips to Be a 5 Stars Freelancer (16:07)</Typography>
                </Box>
                </Box>
            </Grid>
        </Grid> 
    </Container>
    </Box>
  )
}

export default SkillDetails