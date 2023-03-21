import React from 'react'
import {Box, Typography, Container, Grid, Breadcrumbs, Link} from "@mui/material";

import ProductCategories from './ProductCategories';
import Product from './Product';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

function Products() {
  return (
    <Box sx={{py:3}}>         
        <Container maxWidth="xl">
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                Learn Skills
                </Link>
                <Link underline="hover" color="inherit" href="">
                Digital Marketing
                </Link>
               
            </Breadcrumbs>
        </div>      
        <Typography variant="h5" className='page-title'>Facebook Campaigns</Typography>
        <Grid container spacing={3} >            
            <Grid item xs={9} >
           
                <Grid container spacing={3} sx={{py:3}}>
                    <Grid item xs={3} >                    
                        <Product/>
                    </Grid>
                    <Grid item xs={3} >                    
                        <Product/>
                    </Grid>
                    <Grid item xs={3} >                    
                        <Product/>
                    </Grid>
                    <Grid item xs={3} >                    
                        <Product/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3} >
                <ProductCategories />
            </Grid>
        </Grid>

        </Container>
    </Box>
  )
}

export default Products