import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { FaFacebook, FaTwitter, FaSkype, FaLinkedin } from 'react-icons/fa';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <div>
       <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href='/'>
          <img src='https://res.cloudinary.com/ddblhklps/image/upload/v1715886606/rectangle_9_copy_v1f4tu.jpg'></img>
          </a>
          
        </div>
        <div className={isOpen ? 'navbar-links active' : 'navbar-links'}>
          <ul>
            <li>
              <Link smooth to="/">Home</Link>
            </li>
            <li>
              <Link smooth to="#pages">Pages</Link>
            </li>
            <li>
              <Link smooth to="#features">Features</Link>
            </li>
            <li>
              <Link smooth to="#extensions">Extensions</Link>
            </li>
            <li>
              <Link smooth to="#tutorials">Tutorials</Link>
            </li>
            <li>
              <Link smooth to="#contact-us">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-icons">
          <a target='_blank' href='https://www.facebook.com/search/top/?q=infosys'>
        <FaFacebook className="icon" />
        </a>
          
          <a target='_blank' href='https://x.com/home?lang=en'>
          <FaTwitter className="icon" />
        </a>

        <a target='_blank' href='https://www.skype.com/en/'>
        <FaSkype className="icon" />
        </a>

        <a target='_blank' href='https://www.linkedin.com/feed/'>
        <FaLinkedin className="icon" />
        </a>
        </div>

        <div className="navbar-toggle" onClick={toggleNavbar}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </nav>
    </div>
    </>
  )
}

export default Navbar
