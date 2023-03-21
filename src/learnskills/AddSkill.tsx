import React from 'react'
import {Box, Typography, Container, Grid,TextField, Select, MenuItem,InputLabel,FormControl,FormGroup,FormControlLabel,Checkbox, Button, Divider} from "@mui/material";

function AddSkill() {
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
                <Typography component="h2">Let the matching begin...</Typography>
                <Typography component="p" sx={{pb:4}}>This is where you fill us in on the big picture.</Typography>
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
            <TextField id="outlined-basic" label="Skill Title" variant="outlined" size="small"/>
        </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
            labelId="demo-simple-select-label"   id="demo-simple-select" label="Seller" >
            <MenuItem value={10}>Category 1</MenuItem>
            <MenuItem value={20}>Category 1</MenuItem>
            <MenuItem value={30}>Category 3</MenuItem>
            </Select>
        </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Sub category</InputLabel>
            <Select
            labelId="demo-simple-select-label"   id="demo-simple-select" label="Seller" >
            <MenuItem value={10}>Sub category 1</MenuItem>
            <MenuItem value={20}>Sub category 2</MenuItem>
            <MenuItem value={30}>Sub category 3</MenuItem>
            </Select>
        </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Level</InputLabel>
            <Select
            labelId="demo-simple-select-label"   id="demo-simple-select" label="Seller" >
            <MenuItem value={10}>Beginner</MenuItem>
            <MenuItem value={20}>Professional</MenuItem>
            <MenuItem value={30}>Advanced</MenuItem>
            </Select>
        </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                <FormControl fullWidth size="small">
            <TextField id="outlined-basic" label="Short Description" variant="outlined" size="small"/>
        </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>         
              
  <FormControlLabel control={<Checkbox defaultChecked />} label="Online Course" />
  <FormControlLabel control={<Checkbox />} label="Tutor" />
  
                </Grid>
                <Grid item xs={12} sm={6} md={6}> 
                    <Button variant="outlined" component="label" size='small'>
                    Upload Thumbnail Image
                    <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={6}> 
                    <Button variant="outlined" component="label" size='small'>
                        Upload sample video
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12} className="button-container">

                <Button variant="contained" href='/create-skill'>Create Skill</Button>
                </Grid>
            </Grid>

        </Grid>       
    </Grid>
    
        </Container> 
    </Box>
  )
}

export default AddSkill