import React, { useState } from "react";


/* import BlogImg from "../img/xpost-3.jpg.pagespeed.ic.UjtolzGXxD.webp"; */

import Advertisement from "../img/xad-1.jpg.pagespeed.ic.qQJhsdJdF0.webp";
import RowImg from "../img/xpost-4.jpg.pagespeed.ic.5tBCPmCJW-.webp";
import items from "../components/data";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import MedPost from "../components/Medium";
import Col12 from "../components/Col12";
import PostWidget from "../components/PostWidget";
import SmallCat from "../components/SmallCat"
import Navbar from "../Navbar";
import Footer from "../Footer/Footer"
//import SampleAD from '../components/SampleAD';

function Home() {
  const [postItems, /* setPostItems */] = useState (items);
  /* const [types, setTypes] = useState([]); */
  return (
    <>
    <Navbar />
      <div className="section">
        <div className="container">
          

          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <Col12 />
              </div>
            </div>

            <div className="col-md-4">
               <div className="aside-widget">
                <div className="section-title">
                <SectionTitle title="Most Asked For"/>
                </div>

                <PostWidget items={postItems}/>
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
            <MedPost items={postItems}/>
            
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
                <PostRow />
                <PostRow />
                
                <div className="col-md-12">
                  <div className="section-row">
                    <a
                      className="primary-button center"
                      href="https://teddy-webdev.github.io"
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
                <Link className="aaa" to="advertiser.website">
                  <img src={Advertisement} alt="" />
                </Link>
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
      <Footer />
    </>
  );
}

export default Home;

/* template of the Big Post */




function SectionTitle(props) {
  return (
    <div className="section-title">
      <h2>{props.title}</h2>
    </div>
  );
}



/* template of the Small Post */













/* templates of the last section */

function PostRow() {
  return (
    <div className="col-md-12">
      <div className="post post-row">
        <Link to="/blog-post" className="post-img">
          <img src={RowImg} alt="" />
        </Link>
        <div className="post-body">
          <div className="post-meta">
            <Link to="/blog-post" className="post-category cat-2">
              Web Design
            </Link>
            <spnan className="post-date">March 27, 2022</spnan>
          </div>
          <h3 className="post-title">
            <Link to="/blog-post">
              Exercitationem ducimus corrupti velit repudiandae, minus sit,
              mollitia beatae nisi nostrum facere quidem?
            </Link>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            excepturi voluptas cupiditate tenetur voluptate, ad eum aspernatur
            illum? Sit soluta cum quis corporis ratione minus, dolores cumque
            quod dolor inventore officiis alias!
          </p>
        </div>
      </div>
    </div>
  );
}

function CustomLink({ to, children, ...props }){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})


  return (
      <li className={isActive ? ""  : ""}>
          <Link to={to} {...props}> {children} </Link>
      </li>
  )
}