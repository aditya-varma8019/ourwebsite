import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
        {/* Middle section */}
        <div style={{ textAlign: 'center', padding: '40px', borderRadius: '5px'}}>
  <img src="https://res.cloudinary.com/du5dn1u7e/image/upload/v1707600041/VNIT_logo_tkxvnd.jpg" alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
  <div style={{ marginTop: '20px', fontSize: '3rem' }}> {/* Adjust the margin-top value and font size as needed */}
    Visvesvaraya National Institute of Technology
  </div>
  <div style={{ marginTop: '20px', fontSize: '2rem' }}> {/* Adjust the margin-top value and font size as needed */}
    Portal for Event Management
  </div>
  <div style={{ marginTop: '20px', fontSize: '1.5rem' }}> {/* Adjust the margin-top value and font size as needed */}
    "Bridging The Gap Between Students and Concerned Authorities"
  </div>
</div>

      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;