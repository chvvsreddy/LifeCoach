import React from 'react'
import {Box, Typography, Container, Grid} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import SkillSet from "../assets/images/life-skills.webp"

const SkillsetInfo = () => {
  return (
    <Box>
        <Container maxWidth="xl"  className="skillset-info">
        <Grid container spacing={3} sx={{py:3}}>
                <Grid item  xs={12} md={6}>
                <h2>A whole world of Life Skills at your fingertips</h2>
                <ul>
                    <li><CheckCircleOutlineIcon/><h5>The best for every budget</h5>
                    <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                    </li>
                    <li><CheckCircleOutlineIcon/><h5>Quality work done quickly</h5>
                    <p>Find the right freelancer to begin working on your project within minutes.</p>
                    </li>
                    <li><CheckCircleOutlineIcon/><h5>Protected payments, every time</h5>
                    <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
                    </li>
                    <li><CheckCircleOutlineIcon/><h5>24/7 support</h5>
                    <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
                    </li>
                </ul>
                </Grid>
                <Grid item  xs={12} md={6} sx={{display:"flex", justifyContent:"center", alignItems:"center"}} >
                    <img src={SkillSet} className='w-100'/>
                </Grid>
        </Grid>
        </Container>       
    </Box>
  )
}

export default SkillsetInfo