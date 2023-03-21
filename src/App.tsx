import React from 'react';

import './App.css';
import { Box, CssBaseline} from "@mui/material";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";


import SidebarLayout from './layouts/SidebarLayout';


function App() {



  return (
    <>
      <CssBaseline />
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Router>     
      <Box className="main-container">
        <SidebarLayout>       
          <Routes>
            {appRoutes.map((route) => (              
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
          </SidebarLayout>
          </Box>          
        </Router>
      </Box>
    </>
  );
}

export default App;
