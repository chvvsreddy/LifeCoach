import React from 'react'
import {Card, CardContent, Box, CardActions, CardMedia, Button, Typography} from '@mui/material';
import Thumbnail from '../assets/images/talent.png';
import StarIcon from '@mui/icons-material/Star';

function TalentBlock() {
  return (
    <Card className='talent-block' sx={{borderRadius:4 }} >        
        <CardContent className='talent-content'>
        <img src={Thumbnail} alt=''/>
        <Box>
        <Typography gutterBottom variant="h5" component="h5">
          Wordpress
        </Typography>
        <Typography variant="body2" component="p">
        I will create winning websites with elementor pro and wordpress
        </Typography>
        <Box className="rating" component="div"><StarIcon/><StarIcon/><StarIcon/><StarIcon/> (4)</Box>
        </Box>
      </CardContent>
    <CardActions>
        From
        ₹32,515 / project 
        <Button variant="outlined"  size="small">View Details</Button>
    </CardActions>
    </Card>
  )
}

export default TalentBlock