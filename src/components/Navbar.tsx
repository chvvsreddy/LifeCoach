import * as React from 'react';

import {AppBar, Box, Link, CssBaseline, Divider , Drawer, IconButton, List, ListItem,  ListItemButton,ListItemText, Toolbar,Typography, Button, Grid, Avatar, Tooltip, Menu, MenuItem, ListItemIcon } from "@mui/material";

import logo from '../assets/images/life-skills-logo.png';

import MenuIcon from '@mui/icons-material/Menu';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;


export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
 
  const container = window !== undefined ? () => window().document.body : undefined;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <Box sx={{ display: 'flex' }}>

      <CssBaseline />
      <AppBar component="nav" className='top-nav' sx={{ color:"#fff", backgroundColor:"transparent"}}>
        <Toolbar>
         
          <Grid container>
            <Grid item xs={12} sm={3} md={3} >
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Link href="/"><img src={logo} alt='' className='logo'/></Link>
            </Grid>
            <Grid item xs={9} sx={{display:"flex",justifyContent:"end", alignItems:"center" }}>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button href='/'> Life Coach</Button>
                <Button href='/findtalent'>Find PWB Talent</Button>
                <Button href='/business'>PWB Products</Button>
                <Button href='/'>Get Funding</Button>
                <Button href='/signup'>Login</Button>
                <Button variant="outlined">Join</Button>
                <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, backgroundColor:"deeppink"}}>M</Avatar>
          </IconButton>
        </Tooltip>
              </Box>
              <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose} onClick={handleClose}
        PaperProps={{elevation: 0, sx: {overflow: 'visible',mt: 1.5,
            '& .MuiAvatar-root': { width: 32, height: 32, ml: -0.5, mr: 1,},
            '&:before': {content: '""', display: 'block', position: 'absolute',top: 0, right: 14, width: 10, height: 10,
              transform: 'translateY(-50%) rotate(45deg)',zIndex: 0,},
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem><a href='/profile'> <Avatar /> Profile</a> </MenuItem>
        <Divider />
        <MenuItem><ListItemIcon><Settings fontSize="small" /></ListItemIcon>Post a Request</MenuItem>
        <MenuItem><ListItemIcon><Settings fontSize="small" /></ListItemIcon>Refer a Friend</MenuItem>
        <MenuItem><ListItemIcon><Settings fontSize="small" /></ListItemIcon>Become a Seller</MenuItem>
        <MenuItem><ListItemIcon><Settings fontSize="small" /></ListItemIcon>Billing</MenuItem>
        <Divider />
        <MenuItem><ListItemIcon><Settings fontSize="small" /></ListItemIcon>Settings</MenuItem>
        <MenuItem><ListItemIcon><Settings fontSize="small" /></ListItemIcon>Help & support</MenuItem>
        <MenuItem><ListItemIcon><Logout fontSize="small" /></ListItemIcon>Logout</MenuItem>
      </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
           <Button href='/'> Learn Skills</Button>
                <Button href='/findtalent'>Find talent</Button>
                <Button href='/business'>Products</Button>
                <Button href='/'>Get Funding</Button>
                <Button href='/signup'>Login</Button>
                <Button variant="outlined">Join</Button>
        </Drawer>
      </Box>
      {/* <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
       
      </Box> */}
   
    </Box>
  
  );
}