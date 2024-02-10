import React from 'react'
import Header from './header';
import Footer from './footer';
const Layout = ({ children}) => {
  return (
    // <div>Layout</div>
    <div>
    <Header />
    <main style={{ minHeight: "70vh" }}>
        {/* <Toaster /> */}
        {children}
    </main>
    <img src="./logo.jpeg"/>
    <Footer/>
    </div>
  )
}

export default Layout