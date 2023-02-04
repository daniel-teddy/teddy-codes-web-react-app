import React from "react";
import "../Header/bootstrap.css";
import Logo from '../img/teddy-codes.png'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import items from "../components/data";
import RecentPost from "../img/xwidget-2.jpg.pagespeed.ic.cSUEAOhjjU.webp"; 

const allTypes = ['all', ...new Set(items.map((items) => items.types))];
console.log(allTypes); 

function Header() {
  return (
    <div>
      <header id="header">
        <div className="" id="nav">
          <div className="slide-down" id="nav-fixed">
            <div className="container">
              <div className="nav-logo">
                <Link to="/" className="logo">
                <img src={Logo} alt="" />
                </Link>
              </div>

              <ul className="nav-menu nav navbar-nav">
                <CustomLink1 to="/webdesign">Web Design</CustomLink1>
                <CustomLink2 to="/javascript">JavaScript</CustomLink2>
                <CustomLink3 to="/css">CSS</CustomLink3>
                <CustomLink4 to="/reactlib">ReactJS</CustomLink4>
                
              </ul>

              <div className="nav-btns">
                <button className="aside-btn">
                  <i class="ri-menu-fill"></i>
                </button>
                <button className="aside-btn">
                  <i class="ri-search-line"></i>
                </button>
                <div className="search-form">
                  <input
                    type="text"
                    name="search"
                    className="search-input"
                    placeholder="Enter a subject ..."
                  />
                  <button className="search-close">
                    <i className="ri-close-circle-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className="" id="nav-aside">
            <div className="section-row">
              <ul className="nav-aside-menu">
                <li>
                  <a href="www.instagram.com">Home</a>
                </li>
                <li>
                  <a href="www.instagram.com">About Us</a>
                </li>
                <li>
                  <a href="www.instagram.com">Join Us</a>
                </li>
                <li>
                  <a href="www.instagram.com">Advertisements</a>
                </li>
                <li>
                  <a href="www.instagram.com">Contacts</a>
                </li>
              </ul>
            </div>

            <div className="section-row">
              <h3>Recent Posts</h3>
              <div className="post post-widget">
                <a href="www.instagram.com">
                  <img src={RecentPost} alt="" />
                </a>
                <div className="post-body">
                  <h3 className="post-title">
                    <a href="www.instagram.com">
                      Pagedraw Ui Builder Turns Your Ideas into Amazing Websites
                    </a>
                  </h3>
                </div>

                <div className="post-body">
                  <h3 className="post-title">
                    <a href="www.instagram.com">
                      Pagedraw Ui Builder Turns Your Ideas into Amazing Websites
                    </a>
                  </h3>
                </div>

                <div className="post-body">
                  <h3 className="post-title">
                    <a href="www.instagram.com">
                      Pagedraw Ui Builder Turns Your Ideas into Amazing Websites
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="section-row">
              <h3>Follow Us</h3>
              <ul className="nav-aside-social">
                <li>
                  <a href="www.instagram.com">
                    <i class="ri-facebook-box-line"></i>
                  </a>
                </li>
              </ul>
              <ul className="nav-aside-social">
                <li>
                  <a href="www.instagram.com">
                    <i class="ri-instagram-line"></i>
                  </a>
                </li>
              </ul>
              <ul className="nav-aside-social">
                <li>
                  <a href="www.instagram.com">
                    <i class="ri-github-fill"></i>
                  </a>
                </li>
              </ul>
              <ul className="nav-aside-social">
                <li>
                  <a href="www.instagram.com">
                    <i class="ri-youtube-line"></i>
                  </a>
                </li>
              </ul>
            </div>

            <button className="nav-aside-close">
              <i class="ri-close-circle-line"></i>
            </button>
          </div>

        </div>
      </header>
    </div>
  );
}

export default Header;


function CustomLink1({ to, children, ...props }){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})


  return (
      <li className={isActive ? "cat-1"  : "cat-1"}>
          <Link to={to} {...props}> {children} </Link>
      </li>
  );

}
function CustomLink2({ to, children, ...props }){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})


  return (
      <li className={isActive ? "cat-2"  : "cat-2"}>
          <Link to={to} {...props}> {children} </Link>
      </li>
  );

}
function CustomLink3({ to, children, ...props }){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})


  return (
      <li className={isActive ? "cat-3"  : "cat-3"}>
          <Link to={to} {...props}> {children} </Link>
      </li>
  );

}
function CustomLink4({ to, children, ...props }){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})


  return (
      <li className={isActive ? "cat-4"  : "cat-4"}>
          <Link to={to} {...props}> {children} </Link>
      </li>
  );

}