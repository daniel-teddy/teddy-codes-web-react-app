import React from 'react';

//import Card2 from '../components/Card2';
//import AD
import Advertisement from '../assets/img/xad-1.jpg.pagespeed.ic.qQJhsdJdF0.webp';
//import usestate
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import Card from '../components/Card';
import PostRow from '../components/PostRow';
//channel picture
import Channel from '../assets/img/sample.png';
const Home = () => {
  
  return (
  <div className='mb-6 flex flex-col gap-6'>
    <div className="section">
        <div className="container">
          

          <div className="row">
            <div className="col-md-8">
              <div className="row ">
                <Col12 />
              </div>
            </div>

            <div className="col-md-4">
               <div className="aside-widget">
                <div className="section-title">

                <div className="aside-widget text-center">
                {/* advertisement section */}
                <a className="aaa" href="https://advertiser.website">
                  <img src={Advertisement} alt="" />
                </a>
              </div>
              </div>
              

            </div>
          </div>
        </div>
      </div>

      <div className="section section-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <SectionTitle title="Discussions"/>
              </div>
            </div>
            <div>
      
        
          
          <Card />
        
      
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
                  <SectionTitle title="Most Read"/>
                </div>
                <PostRow />
                
                <div className="col-md-12">
                  <div className="section-row">
                    <a
                      className="primary-button center"
                      href="https://teddy-webdev.click"
                    >
                      Teddy's Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="aside-widget text-center">
                {/* advertisement section */}
                <a className="aaa" href="ttps://advertiser.website">
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
                    
                    <CustomLink to="/explore/arduinos">Arduino</CustomLink>
                    <CustomLink to="/explore/tutorials">Tutorials</CustomLink>
                    <CustomLink to="/explore/javascript">JavaScript</CustomLink>
                    <CustomLink to="/explore/games">Games</CustomLink>
                    <CustomLink to="/explore/discover">Discover</CustomLink>
                    <CustomLink to="/explore/chrome">Extensions</CustomLink>
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
};

export default Home;

function SectionTitle(props) {
  return (
    <div className="section-title">
      <h2>{props.title}</h2>
    </div>
  );
}



/* template of the Small Post */


function Col12() {
  return (
    <div className="post post-thumb">
      <a href="https://www.youtube.com" className="post-img" >
        <img src={Channel} alt="img" />
      </a>
      <div className="post-body">
          <div className="post-meta">
          <a href="https://www.youtube.com" className="post-category cat-3">
            WebDev-Easy
          </a>
        {/* 
          <span className="post-date">March 27, 2022</span>
        */}
        </div> 
        <h3 className="post-title">
          <a href="https://www.youtube.com">
            Subscribe to Our Youtube Channel for more content
          </a>
        </h3>
      </div>
    </div>
  );
}










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
