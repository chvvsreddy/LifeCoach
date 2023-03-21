import React from 'react'
import {Box} from "@mui/material";
import { HomeBanner } from "../components/HomeBanner";
import Skills from "../components/Skills/Skills";
import SkillsetInfo from "../components/SkillsetInfo";
import Marketplace from "../components/Marketplace";

function LearnSkills() {
  return (
    <Box>
            <HomeBanner/>
            <Skills />
            <SkillsetInfo/>
            <Marketplace />
        </Box>
  )
}

export default LearnSkills