import * as React from 'react';
import {Box,Card, Avatar, CardActions, CardContent, CardMedia, Button, Typography }from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PreviewIcon from '@mui/icons-material/Preview';

import ProductImg from "../../assets/images/Skills/skill-1.jpg"

export default function Product() {
  return (
    <Card className="product-block">
      <CardMedia
        sx={{ height: 140 }}
        image={ProductImg}
        title="green iguana"
      />
      <CardContent sx={{pb:0}}>
        <Box component="div" className='user-info'>
      <Avatar alt="Remy Sharp" src="/assets/images/avatar_1.jpg" sx={{ width:40, height: 40,bgcolor: "deepPurple" }}/>
      <Typography gutterBottom component="p">Tom Harry</Typography>
        </Box>
        <Typography gutterBottom component="h5">
        React - The Complete Guide (incl Hooks, React Router)
        </Typography>
        <Box component="div" className='skill-rating'>
        <StarIcon /> <p>4.9</p>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small"><ShareIcon/></Button>
        <Button size="small"><FavoriteIcon/></Button>
        <Button size="small" href='/skill-details'><PreviewIcon/></Button>
      </CardActions>
    </Card>
  );
}