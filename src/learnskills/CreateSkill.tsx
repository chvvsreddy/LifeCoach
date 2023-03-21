import React from 'react'
import {Box, Typography, Container, Grid,TextField, Select, MenuItem,InputLabel,FormControl,FormGroup,FormControlLabel,Checkbox, Button, Divider} from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';

import FAQ from './FAQ';

function CreateSkill() {
  return (
    <Box>
        <Box component="div" className="home-banner innerbanner">
    <Container maxWidth="xl" className='course-info'>    
        <Grid container spacing={4}>
            <Grid item xs={12} sm={8} md={9}>
            <Typography variant="h4" >Python for Everybody Specialization</Typography>
            <Typography component="p">Learn to Program and Analyze Data with Python. Develop programs to gather, clean, analyze, and visualize data.</Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>            
            <Typography component="p">Your offering this course for</Typography>
            <Typography variant="h6" >FREE/$350</Typography>
           
            </Grid>
        </Grid>  
        </Container>  
    </Box>
    <Container maxWidth="xl">   
        <Grid container sx={{py:3}} spacing={4}>
            <Grid item xs={12} sm={8} md={9} className="create-course">
                <Typography component="p" className="success">This page is auto saved as draft.</Typography>
                <Typography component="h3">Add content to </Typography>
                <Box className="skillsection">
                    <Typography component="h4">After Completing This Course You Will Be Able To</Typography>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <TextField  multiline rows={4} size="small" placeholder='please enter your description Here...'/>       
                    </FormControl>
                </Box>
                <Box className="skillsection">
                    <Typography component="h4">About This Course</Typography>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <TextField  multiline rows={4} size="small" placeholder='please enter your description Here...'/>       
                    </FormControl>
                </Box>
                <Box className="skillsection">
                    <Typography component="h4">Course Content</Typography>
                    <Box className="add-block">
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6}>
                            <Typography component="p">1. Basic setup </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                        <PlayCircleOutlineIcon/> <EditIcon/>
                        </Grid>
                        <Divider className='w-100'/>
                        <Grid item xs={12} sm={6} md={6}>
                        <TextField id="" label="Section title" variant="outlined"  fullWidth  size="small"/>
                        </Grid>                        
                        <Grid item xs={12} sm={6} md={6} className="upload-control">
                        <TextField id="" label="sample video" variant="outlined"  fullWidth  size="small"/>
                        <Button variant="outlined" component="label" size='small'>
                            Upload video
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} sx={{display:"flex",justifyContent:"flex-end"}}>
                        <Button size="medium" variant="contained">Add</Button>
                        </Grid> 
                    </Grid>
                  
                    </Box>
                    
                </Box>
                <Box className="skillsection">
                    <Typography component="h4">Requirements </Typography>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <TextField  multiline rows={4} size="small" placeholder='please enter your description Here...'/>       
                    </FormControl>
                </Box>
                
                <Box className="skillsection">
                    <Typography component="h4">FAQs</Typography>
                    <FAQ />

                    <Box className="add-block">
                    <Grid container spacing={2}>
               
                        <Grid item xs={12}>
                        <TextField id="" label="Question" variant="outlined"  fullWidth  size="small"/>
                        </Grid>                        
                        <Grid item xs={12}>
                        <TextField id="" label="Answer" variant="outlined"  fullWidth  size="small"/>
                        </Grid>  
                        <Grid item xs={12} sx={{display:"flex",justifyContent:"flex-end"}}>
                        <Button size="medium" variant="contained">Add</Button>
                        </Grid> 
                    </Grid>                  
                    </Box>                    
                </Box>
                <Box className="skillsection">
                    <Typography component="h4" sx={{pb:1}}>What Is Included?</Typography>
                    <Typography component="p" className='include-item'><CheckCircleIcon/>Immediate unlimited access to course materials</Typography>
                    <Box className="add-block">
                    <Grid container spacing={2}>               
                        <Grid item xs={12}>
                        <TextField id="" label="Includes" variant="outlined"  fullWidth  size="small"/>
                        </Grid>                        
                        <Grid item xs={12} sx={{display:"flex",justifyContent:"flex-end"}}>
                        <Button size="medium" variant="contained">Add</Button>
                        </Grid> 
                    </Grid>                  
                    </Box>                    
                </Box>
            </Grid> 
            <Grid item xs={12} sm={4} md={3}> 

            <Box sx={{mb:2}}  className="course-basic-info">
                <Box sx={{mb:2}}>
                <Typography component="p">Request ID</Typography>
            <Typography variant="h6" >REQ00563</Typography>
                </Box>
                <Box sx={{mb:2}}>
                <Typography component="p">Catogory</Typography>
            <Typography variant="h6" >Web Devlopment</Typography>
                </Box>
                <Box sx={{mb:2}}>
                <Typography component="p">Sub Catogory</Typography>
            <Typography variant="h6" >React</Typography>
                </Box>
                <Box sx={{mb:2}}>
                <Typography component="p">Level</Typography>
            <Typography variant="h6" >Beginner</Typography>
                </Box>
                <Box>
                <Button size="medium" variant="contained">Edit</Button>
                <Button size="medium" variant="contained">Submit Course</Button>
                </Box>
                </Box>
            </Grid>
        </Grid> 
    </Container>
    </Box>
  )
}

export default CreateSkill