import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";
import { HomeBanner } from "../components/HomeBanner";
import Skills from "../components/Skills/Skills";
import SkillsetInfo from "../components/SkillsetInfo";
import Marketplace from "../components/Marketplace";

const Home: FC<any> = (): ReactElement => {
    return (
        <Box>
            <HomeBanner/>
            <Skills />
            <SkillsetInfo/>
            <Marketplace />
        </Box>
    );
};

export default Home;