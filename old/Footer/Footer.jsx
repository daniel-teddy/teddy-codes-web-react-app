import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logo from '../img/teddy-codes.png'

function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link to="/" className="logo">
                    <img className="mine" src={Logo} alt="" />
                  </Link>
                </div>

                <ul className="footer-nav">
                  <CustomLink to="/news">Privacy Policy</CustomLink>
                  <CustomLink to="/popular">Advertisement</CustomLink>
                </ul>
                <div className="footer-copyright">
                  <span>
                    © Copyright 2022 All rights reserved | Made by{" "}
                    <a href="https://instagram.com/oh.dear.teddy">
                      Teddy-Webdev
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className="col-md-6">
                  <div className="footer-widget">
                    <h3 className="footer-title">About Us</h3>
                    <ul className="footer-links">
                      <CustomLink to="/news">Partners</CustomLink>
                      <CustomLink to="/popular">Support | Donate</CustomLink>
                      <CustomLink to="/contact">Contacts</CustomLink>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="footer-widget">
                <h3>Get Access to Premium</h3>
                <div className="footer-newsletter">
                  <form>
                    <input
                      type="email"
                      name="newsletter"
                      placeholder="Enter your Email"
                      className="input"
                    />
                    <button type="submit" className="newsletter-btn">
                      <i className="ri-send-plane-fill"></i>
                    </button>
                  </form>
                </div>
                <ul className="footer-social">
                  <li>
                    <a href="www.instagram.com">
                      <i class="ri-facebook-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="www.instagram.com">
                      <i class="ri-instagram-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="www.instagram.com">
                      <i class="ri-github-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="www.instagram.com">
                      <i class="ri-youtube-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

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
