
import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
//import logo
import Logo from '../assets/img/teddy-codes.png'
//import css
import './bootstrap.css';
const Header = () => {
  return (
    <div className='bg-slate-800'>
      <header id="header">
        <div className="" id="nav">
          <div className="slide-down" id="nav-fixed">
            <div className="container">
              <div className="nav-logo">
                <Link to="/" className="logo">
                <img src={Logo} alt="" />
                </Link>
              </div>

              <ul className="nav-menu nav navbar-nav flex flex-row ">
                <CustomLink1 to="/explore/webdesign">Web Design</CustomLink1>
                <CustomLink2 to="/explore/javascript">JavaScript</CustomLink2>
                <CustomLink3 to="/explore/css">CSS</CustomLink3>
                <CustomLink4 to="/explore/reactlib">ReactJS</CustomLink4>
                <CustomLink1 to="/explore/">Explore</CustomLink1>
                
              </ul>

              <div className="nav-btns">
                <button className="aside-btn">
                  {/* <i className="ri-menu-fill"></i> */}
                </button>
                <button className="aside-btn">
                  {/* <i className="ri-search-line"></i> */}
                </button>
              
              </div>
            </div>
          </div>



        </div>
      </header>
    </div>
  );
};

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