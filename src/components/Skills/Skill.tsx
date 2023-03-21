import * as React from 'react';
import {Card, CardContent, CardActions, CardMedia, Button, Typography} from '@mui/material';

import SkillImg from "../../assets/images/skill-5.jpg"

export default function Skill() {
  return (
    <Card className='skill' sx={{borderRadius:4 }}>  
      <CardMedia
        sx={{ height:350 }}
        image={SkillImg}
        title="green iguana"      />
        <CardContent className='skill-content'>
        <Typography variant="body2" component="p">
          Build Your Brand
        </Typography>
        <Typography gutterBottom variant="h5" component="h5">
          Logo Design
        </Typography>
        
      </CardContent>

    </Card>
  );
}