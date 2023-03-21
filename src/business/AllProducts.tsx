import React from 'react'
import {Box, Typography, Container, Grid, Breadcrumbs, Link, ToggleButton, ToggleButtonGroup} from "@mui/material";

import ProductCategories from '../content/productList/ProductCategories';
import Products from './Products';
import Filter from '../components/Filter';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

function AllProducts() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string,
    ) => {
      setAlignment(newAlignment);
    };
  return (
    <Box sx={{pb:3}}>   
    <Box component="div" className="business-banner innerbanner">
    <Container maxWidth="xl" className='breadcrumb'>
    <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                Business
                </Link>
                <Link underline="hover" color="inherit" href="">
                All Products
                </Link>
               
            </Breadcrumbs>
            <Typography variant="h5" className='page-title'>Resin arts</Typography>
        </div>        
        </Container>
    </Box>        
        <Container maxWidth="xl">  
        
        <Grid container spacing={3} sx={{pt:3}} >  
              
            <Grid item xs={12} sm={9} md={9} >
            <Box className="filter-button">
        <ToggleButtonGroup color="primary" value={alignment} exclusive  onChange={handleChange} aria-label="Platform" >
            <ToggleButton value="web">Pro sellars</ToggleButton>
            <ToggleButton value="android">Local sellers</ToggleButton>
            <ToggleButton value="android">Online Sellars</ToggleButton>
        </ToggleButtonGroup>
        </Box>  
            <Filter/>
                <Grid container spacing={3} sx={{py:3}}>
                    <Grid item xs={12}  md={3} >                    
                        <Products/>
                    </Grid>
                    <Grid item xs={12}  md={3} >                    
                        <Products/>
                    </Grid>
                    <Grid item xs={12}  md={3}>                    
                        <Products/>
                    </Grid>
                    <Grid item xs={12}  md={3}>                    
                        <Products/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}  md={3}>
                <ProductCategories />
            </Grid>
        </Grid>

        </Container>
    </Box>
  )
}

export default AllProducts