import React from 'react'
import {Box, Typography, Container, Grid} from "@mui/material";

import GraphicDesign from "../assets/images/skills-icons/graphics-design.svg"

function Marketplace() {
  return (

    <Box sx = {{py:8}}>
    <Container maxWidth="xl">
    <Typography variant="h5" component="h5" gutterBottom>
        Popular professional Skills
    </Typography>
    <Grid container spacing={3} sx={{py:3}}>
        <Grid item className="skill-item" >
        <div><img src={GraphicDesign}/>
            <p>Graphics & Design</p>
            </div>
        </Grid>
        <Grid item  className="skill-item" >
            <div><img src={GraphicDesign} />
            <p>Graphics & Design</p>
            </div>
        </Grid>
        <Grid item className="skill-item" >
        <div><img src={GraphicDesign} />
            <p>Graphics & Design</p>
            </div>
        </Grid>
        <Grid item className="skill-item" >
        <div><img src={GraphicDesign} />
            <p>Graphics & Design</p>
            </div>
        </Grid>
        <Grid item className="skill-item" >
        <div><img src={GraphicDesign} />
            <p>Graphics & Design</p>
            </div>
        </Grid>
        <Grid item className="skill-item" >
        <div><img src={GraphicDesign} />
            <p>Graphics & Design</p>
            </div>
        </Grid>
        <Grid item  className="skill-item" >
        <div><img src={GraphicDesign} />
            <p>Graphics & Design</p>
            </div>
        </Grid>
        <Grid item className="skill-item" >
        <div><img src={GraphicDesign} />
            <p>Graphics & Design</p>
            </div>
        </Grid>
        <Grid item className="skill-item" >
        <div><img src={GraphicDesign} />
            <p>Graphics & Design</p>
            </div>
        </Grid>
        <Grid item className="skill-item" >
        <div><img src={GraphicDesign} />
            <p>Graphics & Design</p>
            </div>
        </Grid>
    </Grid>
    
    </Container>
</Box>
  )
}

export default Marketplace