import React from "react";

import PostRow from "../components/PostRow";

import { Link, useMatch, useResolvedPath } from 'react-router-dom';
//import AD
import Advertisement from '../assets/img/xad-1.jpg.pagespeed.ic.qQJhsdJdF0.webp';
import CardCss from "../components/CardCss";

function CssPage() {
  return (
    <div className="mb-6 flex flex-col gap-6">
      <div className="section">
        <div className="section section-grey">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title text-center">
                  <SectionTitle title="CSS"/>
                </div>
              </div>

              <div className="">
                <CardCss />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-12">
                    <SectionTitle title="Recommended" />
                  </div>
                  <PostRow />
                  
                </div>
              </div>
              <div className="col-md-4">
              <div className="aside-widget text-center">
                {/* advertisement section */}
                <a className="aaa" href="https://advertiser.website">
                  <img src={Advertisement} alt="" />
                </a>
              </div>
              <div className="aside-widget">
                <div className="section-title">
                  <h2>Categories</h2>
                </div>
                <SmallCat />
              </div>

              <div className="aside-widget">
              <div className="section-title">
              <SectionTitle title="More "/>
                </div>
                <div className="tags-widget">
                  <ul>
                    
                    <CustomLink to="/arduinos">Arduino</CustomLink>
                    <CustomLink to="/tutorials">Tutorials</CustomLink>
                    <CustomLink to="/javascript">JavaScript</CustomLink>
                    <CustomLink to="/games">Games</CustomLink>
                    <CustomLink to="/discover">Discover</CustomLink>
                    <CustomLink to="/chrome">Extensions</CustomLink>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CssPage


function SectionTitle(props) {
  return (
    <div className="section-title">
      <h2>{props.title}</h2>
    </div>
  );
}


/* template of the Small Post */





/* templates of the last section */

function CustomLink({ to, children, ...props }){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})


  return (
      <li className={isActive ? ""  : ""}>
          <Link to={to} {...props}> {children} </Link>
      </li>
  )
}



function SmallCat() {
  return (
    <div className="category-widget">
      <ul>
        <CustomLink to="/explore/webdesign" className="cat-1">
          Web Design
          <span>-</span>
        </CustomLink>
        <CustomLink to="/explore/javascript" className="cat-2">
          JavaScript
          <span>-</span>
        </CustomLink>
        <CustomLink to="/explore/css" className="cat-3">
          CSS
          <span>-</span>
        </CustomLink>
        <CustomLink to="/explore/reactlib" className="cat-4">
          ReactJS
          <span>-</span>
        </CustomLink>
      </ul>
    </div>
  );
}