import React from 'react';
//import logo
import Logo from '../assets/img/teddy-codes.png'
//import icons

//import Link
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
//import usestate
import { useState } from 'react';
const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  return (
    <div className='bg-slate-100'>
    <footer id="footer">
      <div className="container bg-slate-100">
        <div className="row flex flex-row">
          <div className="col-md-5">
            <div className="footer-widget">
              <div className="footer-logo">
                <Link to="/" className="logo">
                  <img className="mine" src={Logo} alt="" />
                </Link>
              </div>

              
              
            </div>
          </div>

          <div className="col-md-4">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-widget">
                  <h3 className="footer-title">About Us</h3>
                  <ul className="footer-links">
                    <CustomLink to="/partnership">Partners</CustomLink>
                    <CustomLink to="/about">About Us</CustomLink>
                    <CustomLink to="/terms-conditions">Terms & Conditions</CustomLink>
                    <CustomLink to="/support">Support | Donate</CustomLink>
                    <CustomLink to="/contact">Contacts</CustomLink>
                    <CustomLink to="/advertise">Advertisement</CustomLink>
                    <CustomLink to="/privacy">Privacy Policy</CustomLink>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="footer-widget">
              <h3>Get Access to Premium</h3>
              <div className="footer-newsletter">
                <form name='Premium Request | Subscribe form' netlify method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input
                    type="email"
                    name="email-subscription"
                    placeholder="Enter your Email"
                    className="input"
                  />
                  <button type="submit" className="newsletter-btn">
                    <i className="ri-send-plane-fill"></i>
                  </button>
                </form>
              </div>
              <div className="post-shares sticky-shares flex flex-row mt-8">
                  <a href="https://facebook.com" className="share-facebook">
                    <i className="ri-facebook-box-fill"></i>
                  </a>
                  <a href="https://twitter.com" className="share-twitter">
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="https://pinterest.com" className="share-pinterest">
                    <i className="ri-pinterest-fill"></i>
                  </a>
                  <a href="https://linkedin.com" className="share-linkedin">
                    <i className="ri-linkedin-box-fill"></i>
                  </a>
                  <a href="https://dribble.com" className="share-google-plus">
                    <i className="ri-dribbble-fill"></i>
                  </a>
                </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright flex items-center ">
                <span>
                  © Copyright {currentYear} All rights reserved | Made by{" "}
                  <a href="https://instagram.com/oh.dear.teddy">
                    Teddy-Webdev
                  </a>
                </span>
              </div>
      </div>
    </footer>
  </div>
  );
};

export default Footer;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "cat-3" : ""}>
      <Link to={to} {...props}>
        {" "}
        {children}{" "}
      </Link>
    </li>
  );
}
