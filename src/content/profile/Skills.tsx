import React from 'react'
import {Box, Typography, Container, Grid,Card, CardContent, Tabs, Tab, Button} from "@mui/material";
import ProfileNav from './ProfileNav';
import Product from '../productList/Product';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  

function MySkills() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    
  return (
    <Box sx={{pb:3}}>   
    <Box component="div" className="home-banner innerbanner">
    <Container maxWidth="xl" className='breadcrumb'>
    <div role="presentation">

            <Typography variant="h5" className='page-title'>Profile</Typography>
        </div>        
        </Container>
    </Box> 
    <Container maxWidth="xl" sx={{py:3}}>
         <Card>
      <CardContent>
       <Grid container>
          <Grid item xs={3}>
           <ProfileNav/>
          </Grid>
          <Grid item xs={9}>
          <Container maxWidth="xl">
        <Typography variant="h5" sx={{pt: 2, pb:1 }}>
         My Skills
        </Typography>
        <Box sx={{ width: '100%' }}>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Teaching Skills" {...a11yProps(0)} />
          <Tab label="Learning Skills" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box component="div" sx={{alignItems:"flex-end", display:"flex", justifyContent:"flex-end", paddingBottom:"20px"}} >
            <Button variant="outlined" href='/addskill'>Add Skill</Button>
        </Box>
        <Grid container spacing={2}>
            <Grid item  xs={12} sm={4} md={4}>
            <Product/>
            </Grid>
            <Grid item  xs={12} sm={4} md={4}>
            <Product/>
            </Grid>
            <Grid item  xs={12} sm={4} md={4}>
            <Product/>
            </Grid>
        </Grid>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container spacing={2}>
            <Grid item  xs={12} sm={4} md={4}>
            <Product/>
            </Grid>
            <Grid item  xs={12} sm={4} md={4}>
            <Product/>
            </Grid>
            <Grid item  xs={12} sm={4} md={4}>
            <Product/>
            </Grid>
        </Grid>
      </TabPanel>
    </Box>

      </Container>
          </Grid>
       </Grid>
       </CardContent>
       </Card>
    </Container>
    </Box>
  )
}

export default MySkills