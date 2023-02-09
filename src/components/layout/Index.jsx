import React from 'react';
import Header from '../header/Index';
import Footer from '../footer/Index';

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;