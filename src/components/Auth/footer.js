import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa'; // Import icons
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">All Rights Reserved &copy; VNIT</h1>
      <div className="social-icons">
        <a href="https://www.youtube.com/channel/UC8nVHdLguN04utsTtUfinTg" target="_blank" rel="noopener noreferrer"><FaYoutube className="icon" /></a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fvnitn18" target="_blank" rel="noopener noreferrer"><FaTwitter className="icon" /></a>
        <a href="https://www.facebook.com/vnitnagpur.official" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon" /></a>
      </div>
      <p className="text-center mt-3">
        <Link to="https://vnit.ac.in/">About</Link>|<Link to="https://vnit.ac.in/index.php/contacts/">Contact Us</Link>|
        <Link to="https://vnit.ac.in/index.php/privacy-policy-2/">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
