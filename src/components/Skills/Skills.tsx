import React, {ReactElement, FC} from "react";
import {Box, Typography, Container, Grid} from "@mui/material";

import Skill from "./Skill";


const Skills: FC<any> = (): ReactElement => {
    return (
        <Box sx = {{py:8}}>
            <Container maxWidth="xl">
            <Typography variant="h5" component="h5" gutterBottom>
                Popular professional Skills
            </Typography>
            <Grid container spacing={3} sx={{py:3}}>
                <Grid item className="skills-block" >
                    <Skill />
                </Grid>
                <Grid item  className="skills-block" >
                    <Skill />
                </Grid>
                <Grid item className="skills-block" >
                    <Skill />
                </Grid>
                <Grid item className="skills-block" >
                    <Skill />
                </Grid>
                <Grid item className="skills-block" >
                    <Skill />
                </Grid>
            </Grid>
            
            </Container>
        </Box>
    );
};

export default Skills;