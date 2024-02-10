import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
        {/* Middle section */}
        <div style={{ textAlign: 'center' }}>
          <img src="https://res.cloudinary.com/du5dn1u7e/image/upload/v1707600041/VNIT_logo_tkxvnd.jpg" alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
