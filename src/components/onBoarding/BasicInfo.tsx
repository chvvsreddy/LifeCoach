import React from 'react'
import {Box, Typography, Container, Grid,TextField, Select, MenuItem,InputLabel,FormControl,FormGroup,FormControlLabel,Checkbox, Button, Divider,FormLabel} from "@mui/material";


function BasicInfo() {
  return (
    <Box sx={{pb:3}}>   
    <Box component="div" className="home-banner innerbanner">
    <Container maxWidth="xl" className='breadcrumb'>
    <div role="presentation">

            <Typography variant="h5" className='page-title'>Add Skill</Typography>
        </div>        
        </Container>
    </Box>
    <Container maxWidth="lg" sx={{py:4}}>
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
            <Box className="createskill-intro" component="div">
                <Typography component="h2">Personal Info</Typography>
                <Typography component="p" sx={{pb:4}}>Tell us a bit about yourself. This information will appear on your public profile, so that potential buyers can get to know you better.</Typography>
                <Box className="intro-step">
                <Typography component="h3">Fill your brief</Typography>
                <Typography component="p">List what you need for your project or business.</Typography>
                </Box>  
                <Box className="intro-step">
                <Typography component="h3">Create Course</Typography>
                <Typography component="p">Add content, videos, Images, Content Whatever is needed.</Typography>
                </Box> 
                <Box className="intro-step">
                <Typography component="h3">Publish and Get Revenue</Typography>
                <Typography component="p">Student will enroll and will pay you the Fee</Typography>
                </Box>             
            </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>

            <Grid container spacing={2} sx={{pt:5}}>
                <Grid item xs={12} sm={6} md={6}>
                <FormControl fullWidth size="small">
            <TextField id="" label="First Name" variant="outlined" size="small"/>
        </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                <FormControl fullWidth size="small">
            <TextField id="" label="Last Name" variant="outlined" size="small"/>
        </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <FormControl fullWidth size="small">
                        <TextField id="" label="EMail" variant="outlined" size="small"/>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <FormControl fullWidth size="small">
                        <TextField id="" label="Phone Number" variant="outlined" size="small"/>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                <FormControl fullWidth size="small">
                <FormLabel>Description</FormLabel>
            <textarea id="" rows={5} className="text-area"
             placeholder='Share a bit about your work experience, cool projects you’ve completed, and your area of expertise.'/>
        </FormControl>
        min. 150 characters 0 / 600
                </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                  <Grid container spacing={3}>
                  <Grid item xs={12} sm={5} md={5}>
                  <FormControl fullWidth size="small">
                 
                        <InputLabel id="">Language</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"   id="demo-simple-select" label="Seller" >
                        <MenuItem value={10}>Telugu</MenuItem>
                        <MenuItem value={20}>Hindi</MenuItem>
                        <MenuItem value={30}>English</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={5} md={5}>
                    <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">Level</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"   id="demo-simple-select" label="Seller" >
                        <MenuItem value={10}>Basic</MenuItem>
                        <MenuItem value={20}>Conversational</MenuItem>
                        <MenuItem value={30}>fluent</MenuItem>
                        <MenuItem value={30}>native_or_bilingual</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={2} md={2}>
                    <Button variant="outlined" >Add</Button>
                    </Grid>
                    </Grid>
                
                </Grid>

                <Grid item xs={12} sm={12} md={12} className="button-container">

                <Button variant="contained" href='/create-skill'>Continue</Button>
                </Grid>
            </Grid>

        </Grid>       
    </Grid>
    
        </Container> 
    </Box>
  )
}

export default BasicInfo