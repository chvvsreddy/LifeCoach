import React from 'react'
import {Box, Typography, Container, Grid,Card, CardContent, Tabs, Tab} from "@mui/material";
import ProfileNav from './ProfileNav';

import TransactionTable from '../productList/Table';

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

function Transactions() {
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
    <Container maxWidth="xl">
         <Card>
      <CardContent>
       <Grid container>
          <Grid item xs={3}>
           <ProfileNav/>
          </Grid>
          <Grid item xs={9}>
          <Container maxWidth="xl">
        <Typography variant="h5" sx={{pt: 2, pb:3 }}>Transcations</Typography>
        <Box sx={{ width: '100%' }}>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Inprogress" {...a11yProps(0)} />
          <Tab label="Completed" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TransactionTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TransactionTable />
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

export default Transactions