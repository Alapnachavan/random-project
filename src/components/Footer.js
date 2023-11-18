
import React from 'react';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>THANK YOU FOR VISITING US.</p>
      <div className="social-icons">
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
      </div>
    </footer>
  );
};

export default Footer;

