import React from 'react';
import { FaLinkedin, FaGithub, FaDev, FaHackerrank, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import './SocialIcons.css';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/amitkumar696945" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/decode6" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://dev.to" target="_blank" rel="noopener noreferrer">
        <FaDev />
      </a>
      <a href="https://www.hackerrank.com" target="_blank" rel="noopener noreferrer">
        <FaHackerrank />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialIcons;

