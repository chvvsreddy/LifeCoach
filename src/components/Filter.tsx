import React from 'react'
import {Box,FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";

function Filter() {
  return (
    <Box sx={{pt:2}}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={3} md={3}>
            <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Seller</InputLabel>
        <Select
          labelId="demo-simple-select-label"   id="demo-simple-select" label="Seller" >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
            <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Seller</InputLabel>
        <Select
          labelId="demo-simple-select-label"   id="demo-simple-select" label="Seller" >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
            <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Budget</InputLabel>
        <Select
          labelId="demo-simple-select-label"   id="demo-simple-select" label="Seller" >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
            <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Deltvary Time</InputLabel>
        <Select
          labelId="demo-simple-select-label"   id="demo-simple-select" label="Seller" >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
            </Grid>
        </Grid>
        

    </Box>
  )
}

export default Filter