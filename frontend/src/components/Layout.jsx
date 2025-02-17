import React from 'react';
import HeaderComponent from './header/HeaderComponent';
import FooterComponent from './footer/FooterComponent';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <HeaderComponent />
      <main className="main-content">
        {children || <h2>No content found!</h2>}
      </main>
      <FooterComponent />
    </div>
  );
};


export default Layout;
