import React, {ReactElement, FC} from "react";


import {Box, Card,CardContent, Typography, Container, Grid, Link, Stack, IconButton, InputAdornment, TextField, Checkbox,Button,Divider} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import LoginBannerimg from '../assets/images/idea_2.jpg';

const Signup: FC<any> = (): ReactElement => {
    
    return (
        <Box sx = {{py:8}} className="login-block">
            <Container maxWidth="xl">
            
            <Grid container spacing={3} sx={{py:3}}>
                <Grid item xs={12} sm={8} md={8}>
                <Typography variant="h4" component="h4" gutterBottom>
                
                </Typography>
                <img  src={LoginBannerimg} className="w-100" />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Card  sx={{ maxWidth:400 }}>
                    <CardContent>
                <Typography variant="h5" gutterBottom>
                Sign in
                </Typography>
                

                <Typography variant="body2" sx={{ mb: 5 }}>
                Don’t have an account? {''}
                <Link variant="subtitle2">Get started</Link>
                </Typography>
                <Stack direction="row" spacing={2}>
              <Button fullWidth size="large" color="inherit" variant="outlined">
                <GoogleIcon width={22} height={22} />
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
              <FacebookIcon width={22} height={22} />
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
              <TwitterIcon width={22} height={22} />
              </Button>
            </Stack>
            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>
                    <Stack spacing={3}>
                        <TextField name="email" label="Email address" />

                        <TextField name="password" label="Password"  type={ 'password'}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                <VisibilityOffIcon/>
                                </IconButton>
                            </InputAdornment>
                            ),
                        }}
                        />
                    </Stack>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                        <div><Checkbox name="remember" /> Remember me</div>
                        <Link variant="subtitle2" underline="hover">
                        Forgot password?
                        </Link>
                    </Stack>
                    <Button fullWidth size="large" type="submit" variant="contained" href="/basic-info" >
                        Login
                    </Button>
                    </CardContent>
                    </Card>
                </Grid>     
            </Grid>            
            </Container>
        </Box>
    );
};

export default Signup;