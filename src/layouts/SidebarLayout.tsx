import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface SidebarLayoutProps {
  children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <Box sx={{flex: 1, height: '100%'}}>
      <Navbar/>
      <Box className="main-container">
      {children || <Outlet />}
      </Box>
      <Footer/>
    </Box>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.node
};

export default SidebarLayout;