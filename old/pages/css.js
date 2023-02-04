import React from "react";
import { useState } from "react";
import SmallCat from "../components/SmallCat";

import items from "../components/data";


import Advertisement from "../img/xad-1.jpg.pagespeed.ic.qQJhsdJdF0.webp";

import { Link } from "react-router-dom";

import CustomLink from "../components/CustomLink";
import MedPost from "../components/Medium";
import PostRow from "../components/PostRow"
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";

function Css() {
  const [postItems, /* setPostItems */] = useState (items);
  /* const [types, setTypes] = useState([]); */
  return (
    <>
    <Navbar />
      <div className="section">
        <div className="container">
          {/* <div className="row">
            <Post Img={JavaImg} type="JavaScript" date="March 27,2022" desc="Chrome Extension Protects Against JavaScript Side-Chanel Criminal Attacks" class="post-category cat-2"/>
            <Post Img={ReactImg} type="React JS" date="February 12,2022" desc="Why is React so popular ?" class="post-category cat-3"/>

          </div> 

          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Most Recents"/>
            </div>

            <MedPost />

            <MedPost />

            <MedPost />

            <div className="clearfix visible-md visible-lg"></div>
          </div>
          */}

          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <h2>CSS - Cascading Style Sheet</h2>
                {/*
                <Col12 />

                <Post2 />

                <Post2 />

                 <div className="clearfix visible-md visible-lg"></div>

                <Post2 />

                <Post2 />

                <div className="clearfix visible-md visible-lg"></div>

                <Post2 />

                <Post2 />

                <div className="clearfix visible-md visible-lg"></div>
              */}
              </div>
            </div>

            {/*
            <div className="col-md-4">
               <div className="aside-widget">
                <div className="section-title">
                <SectionTitle title="Most Asked For"/>
                </div>

                <PostWidget />
                <PostWidget />
                <PostWidget />
              </div>

              <div className="aside-widget">
                <div className="section-title">
                  <SectionTitle title="On Youtube"/>
                </div>
                <PostThumb />
                <PostThumb />
              </div>
            

            </div>
            <SampleAD />  */}
          </div>
        </div>
      </div>

      <div className="section section-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <SectionTitle title="Discussions" />
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
                  <SectionTitle title="Most Read" />
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
                  <SectionTitle title="More " />
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

export default Css;

/* template of the Big Post */



function SectionTitle(props) {
  return (
    <div className="section-title">
      <h2>{props.title}</h2>
    </div>
  );
}

