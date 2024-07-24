// Layout.js
import React from 'react';
import Sidebar from './Sidebar';
import SocialIcons from './SocialIcons';

const Layout = ({ children }) => {
  return (
    <div className="layout">
     
      <div className="main-content">
        {children}
      </div>
      <SocialIcons />
    </div>
  );
};

export default Layout;

