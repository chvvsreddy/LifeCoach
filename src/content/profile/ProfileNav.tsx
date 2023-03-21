import React from 'react'
import {List, ListItemButton, ListItemIcon, ListItemText,Avatar,Box, Divider, Typography } from "@mui/material";

import GridViewIcon from '@mui/icons-material/GridView';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PortraitIcon from '@mui/icons-material/Portrait';
import AttractionsIcon from '@mui/icons-material/Attractions';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

function ProfileNav() {
  return (
    <>
    <Box className="user-pic">
    <Avatar alt="Remy Sharp"
        src="/assets/images/avatar_1.jpg"
        sx={{ width:100, height: 100,bgcolor: "deepPurple" }}
      />
      <Box>
      <Typography component="h4"> Remy Sharp</Typography>
      <Typography component="p">Student</Typography>
      <Typography component="p">India</Typography>
      <Typography component="p">Member since 2019</Typography>
      </Box>
      
    </Box>
    <Divider />
    <List component="nav" aria-labelledby="nested-list-subheader" className='profile-nav'>
      <ListItemButton component="a" href="/profile"><GridViewIcon /><ListItemText primary="Dashboard" /></ListItemButton>
      <ListItemButton component="a" href=""><LocalActivityIcon /><ListItemText primary="Education" /></ListItemButton>
      <ListItemButton component="a" href="/profile/professional_Info"><PortraitIcon /><ListItemText primary="Professional Info" /></ListItemButton>     
      <ListItemButton component="a" href="/profile/myskills"><AttractionsIcon /><ListItemText primary="Skills" /></ListItemButton>   
      <ListItemButton component="a" href="/profile/myproducts"><ProductionQuantityLimitsIcon /><ListItemText primary="Products" /></ListItemButton>
      <ListItemButton component="a" href="/profile/Transactions"><NotificationsNoneIcon /><ListItemText primary="Transactions" /></ListItemButton>
      <ListItemButton component="a" href="/profile/users"><PeopleOutlineIcon /><ListItemText primary="Users" /></ListItemButton>
      <ListItemButton component="a" href="/profile/settings"><PortraitIcon /><ListItemText primary="Settings" /></ListItemButton>
    </List>

    </>
  )
}

export default ProfileNav