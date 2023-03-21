import React from 'react'
import {Box,Card, Avatar, CardActions, CardContent, CardMedia, Button, Typography, Grid }from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PreviewIcon from '@mui/icons-material/Preview';

import ProductImg from "../../src/assets/images/products/product_1.jpg"

function Products() {
  return (
    <Card className="product-block">
    <CardMedia
      sx={{ height: 200 }}
      image={ProductImg}
      title="green iguana"
    />
    <CardContent sx={{pb:0}}>
      <Typography gutterBottom component="h5">
      Canvas Shoes
      </Typography>
      <Grid container>
        <Grid item xs={6}>
        <Typography gutterBottom component="h5">
      Rs 499
      </Typography>
        </Grid>
        <Grid item xs={6} >
        <Box component="div" className='skill-rating' sx={{float:"right"}}>
      <StarIcon /> <p>4.9</p>
      </Box>
        </Grid>
      </Grid>
      
      
    </CardContent>
    <CardActions>
      <Button size="small"><ShareIcon/></Button>
      <Button size="small"><FavoriteIcon/></Button>
      <Button size="small"><PreviewIcon/></Button>
    </CardActions>
  </Card>
  )
}

export default Products