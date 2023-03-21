import React from 'react'
import {Box, Typography, Container, Grid, Breadcrumbs, Link, ToggleButton, ToggleButtonGroup} from "@mui/material";

import ProductCategories from '../content/productList/ProductCategories';
import Talent from './Talent';
import Filter from '../components/Filter';

import SuperMenu from '../components/Supermenu/Index';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

function AllTalents() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string,
    ) => {
      setAlignment(newAlignment);
    };

  return (
    <Box sx={{pb:3}}>   
    <Box component="div" className="findtalent-banner innerbanner">
    <Container maxWidth="xl" className='breadcrumb'>
      <Grid container spacing={3} sx={{pt:3}}>
        <Grid item xs={12}  md={9} > 
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                Find Talent
                </Link>
                <Link underline="hover" color="inherit" href="">
                All Talents
                </Link>
               
            </Breadcrumbs>
            <Typography variant="h5">Wordpress</Typography>
           
        </div> 
        </Grid>
        <Grid item xs={12}  md={3} > 
        <SuperMenu/>  
        </Grid>
      </Grid>               
        </Container>
    </Box>      
        <Container maxWidth="xl"> 
        <Grid container spacing={3} sx={{pt:3}}>
          <Grid item xs={12}  md={8} > 
         
          <Filter/>
          </Grid>
          <Grid item xs={12}  md={4} > 
          <Box className="filter-button">
        <ToggleButtonGroup color="primary" value={alignment} exclusive  onChange={handleChange} aria-label="Platform" >
            <ToggleButton value="web">Freelancer</ToggleButton>
            <ToggleButton value="android">Companies</ToggleButton>
        </ToggleButtonGroup>
        </Box>
          </Grid>
        </Grid>           
        <Grid container spacing={3} sx={{pb:3}} >            
            <Grid item xs={12}>            
                <Grid container spacing={3} sx={{py:3}}>
                    <Grid item xs={12}  md={6} >                    
                      <Talent/>
                    </Grid>
                    <Grid item xs={12}  md={6} >                    
                    <Talent/>
                    </Grid>
                    <Grid item xs={12}  md={6}>                    
                    <Talent/>
                    </Grid>
                    <Grid item xs={12}  md={6}>                    
                    <Talent/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        </Container>
    </Box>
  )
}

export default AllTalents