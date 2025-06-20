import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/DienAlex" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/alex-dien/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p> Want a more direct contact? Contact me at <a href="https://mail.google.com/mail/u/0/" target="_blank" rel="noreferrer">adien25@cmc.edu</a></p>
    </footer>
  );
}

export default Footer;