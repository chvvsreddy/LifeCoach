import React from 'react'
import {Box, Typography, Container, Stepper,Step, StepLabel, Button} from "@mui/material";
import Intro from './Intro';

function BecomeSeller() {
    
  return (
    <Box sx={{pb:3}}>   
  <Box component="div" className="home-banner innerbanner">
    <Container maxWidth="xl" className='breadcrumb'>
    <div role="presentation">

            <Typography variant="h5" className='page-title'>Become a seller</Typography>
        </div>        
        </Container>
    </Box> 
    <Container maxWidth="xl">
<Intro />
    </Container>

    </Box>
  )
}

export default BecomeSeller