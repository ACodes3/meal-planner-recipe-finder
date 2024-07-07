import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../Components/HomePageComponents/Footer/Footer';
import NavbarComponent from '../Components/HomePageComponents/Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <NavbarComponent />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
