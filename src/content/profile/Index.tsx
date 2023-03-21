import React from 'react'
import {Box, Typography, Container, Grid,Card, CardContent} from "@mui/material";
import ProfileNav from './ProfileNav';


function Profile() {
  return (
    <Box sx={{pb:3}}>   
    <Box component="div" className="home-banner innerbanner">
    <Container maxWidth="xl" className='breadcrumb'>
    <div role="presentation">

            <Typography variant="h5" className='page-title'>Profile</Typography>
        </div>        
        </Container>
    </Box> 
    <Container maxWidth="xl">
         <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
       <Grid container>
          <Grid item xs={3}>
           <ProfileNav/>
          </Grid>
          <Grid item xs={9}>
          <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <div className="wid">
            <Typography component="h5">Sales</Typography>
          </div>      
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <div className="wid">
            <Typography component="h5">Users</Typography>
          </div>  
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <div className="wid">
            <Typography component="h5">Courses</Typography>
          </div>  
          <div className="wid">
            <Typography component="h5">Products</Typography>
          </div> 
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
          <div className="wid">
            <Typography component="h5">Weekly Sales</Typography>
          </div>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
          <div className="wid">
            <Typography component="h5">Weekly Sales</Typography>
          </div>
            
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
          <div className="wid">
            <Typography component="h5">Weekly Sales</Typography>
          </div>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
          <div className="wid">
            <Typography component="h5">Weekly Sales</Typography>
          </div>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
          <div className="wid">
            <Typography component="h5">Weekly Sales</Typography>
          </div>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
          <div className="wid">
            <Typography component="h5">Weekly Sales</Typography>
          </div>            
          </Grid>
        </Grid>
      </Container>
          </Grid>
       </Grid>
       </CardContent>
       </Card>
    </Container>
    </Box>
  )
}

export default Profile