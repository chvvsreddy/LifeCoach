import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import{List, ListItemButton, ListItemText, MenuItem, Grid, Typography} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: "100%",
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined" color="inherit"
        disableElevation
        onClick={handleClick}
        startIcon={<MenuIcon />}
      >
       All Talents
      </Button>
      <StyledMenu id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
            <Grid container spacing={3} sx={{pt:3}}>
                <Grid item xs={12}  md={3} >
                    <Typography variant="h6" sx={{px:2}}>Graphics & Design</Typography>
                <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton>
        <ListItemText primary="Logo & Brand Identity" />
        </ListItemButton>
        <ListItemButton >
        <ListItemText primary="Web & App Design" />
        </ListItemButton>
        <ListItemButton >
        <ListItemText primary="Art & Illustration" />
        </ListItemButton>
        <ListItemButton >
        <ListItemText primary="Marketing Design" />
        </ListItemButton>
        <ListItemButton>
        <ListItemText primary="Gaming" />
    </ListItemButton>
    <ListItemButton >
        <ListItemText primary="Visual Design" />
    </ListItemButton>
    <ListItemButton >
        <ListItemText primary="Print Design" />
    </ListItemButton>
    <ListItemButton >
        <ListItemText primary="Packaging & Covers" />
    </ListItemButton>
        </List>
                </Grid>
                <Grid item xs={12}  md={3} >
                <Typography variant="h6" sx={{px:2}}>Digital Marketing</Typography>
                <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton>
              <ListItemText primary="Search & Social" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Advertising & Content" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Industry & Purpose-specific" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Analytics & Strategy" />
            </ListItemButton>      
          </List>
                </Grid>
                <Grid item xs={12}  md={3} >
                <Typography variant="h6" sx={{px:2}}>Writing & Translation</Typography>
                <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton>
              <ListItemText primary="Content Writing & Editing" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Career Writing" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Storytelling" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Business Copy" />
            </ListItemButton>      
          </List>
                </Grid>
                <Grid item xs={12}  md={3} >
                <Typography variant="h6" sx={{px:2}}>Programming & Tech</Typography>
                <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton>
              <ListItemText primary="Websites" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Website Platforms" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Application Development" />
            </ListItemButton>
            <ListItemButton >
              <ListItemText primary="Support & Cybersecurity" />
            </ListItemButton>      
          </List>  
                </Grid>
            </Grid>
       
    
      </StyledMenu>
    </div>
  );
}