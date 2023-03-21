import React from 'react'
import {Box,Card, Avatar, CardActions, CardContent, CardMedia, Button, Typography, Grid }from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PreviewIcon from '@mui/icons-material/Preview';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';

import ProductImg from "../../src/assets/images/avatars/4.jpg"

function Talent() {
  return (
    <Card>       
        <CardContent sx={{pb:0}} className="talent">
        <CardMedia sx={{ height: 120, width:120 }} image={ProductImg} title=" Remy Sharp"/>
            <Box className="talent-details">
                <Typography component="h4" >Remy Sharp <span className='rating'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>(77 Reviews)</span></Typography> 
                <Typography component="p">Expertise : <span className='primary-color'>Wordpress, Web Development</span></Typography>
                <Typography component="p">Hello, I am a 27-year-old freelancer from Germany. Since 6 years I create websites for customers and since 3 years I am a full-time freelancer. I create websites for small to medium-sized companies.</Typography>
                <Typography component="p" className='location'><span><LocationOnIcon/> Germany</span><span><LanguageIcon/> Speaks English, German</span></Typography>
                {/* <CardActions>
                <Button size="small"><ShareIcon/></Button>
                <Button size="small"><FavoriteIcon/></Button>
                <Button size="small"><PreviewIcon/></Button>
                </CardActions> */}
            
            </Box>
            <Box className="actions">
                <Button size="small"><ShareIcon/></Button>
                <Button size="small"><FavoriteIcon/></Button>
                <Button size="small"><PreviewIcon/></Button>
                <Button variant="contained" size="small" href="/userinfo">View</Button>
            </Box>
        </CardContent>
                    
  </Card>
  )
}

export default Talent