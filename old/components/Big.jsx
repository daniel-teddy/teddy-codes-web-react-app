import React from 'react'
import {Link, useParams, useMatch, useResolvedPath } from 'react-router-dom';
import PostWidget from './PostWidget';
import { useState } from 'react';
import Advertisement from "../img/xad-1.jpg.pagespeed.ic.qQJhsdJdF0.webp";
import SmallCat from './SmallCat';
import JavaImg from "../img/xpost-1.jpg.pagespeed.ic.2GXRfHYjOg.webp";
import products from './data';

const Big = () => {
  
  const {postId} = useParams();
  const product = products.find((product) => product.id === postId);
  const {image, title} = product;
  return (
    <>
    <h1>{postId}</h1>
    <img src={image} alt={title} />
    <h2>title: {title}</h2>
      <Link to="/">back home</Link>
      <header id="header">
      <div className="page-header" id="post-header">
      <div className="background-img">
        <img src={JavaImg} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <div className="post-meta">
              <Link to="/javascript" className="post-category cat-2">
                JavaScript
              </Link>
              <span className="post-date">March 23, 2022</span>
            </div>
            <h1>What are The Best JavaScript FrameWorks ?</h1>
          </div>
        </div>
      </div>
    </div>
      </header>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="section-row sticky-container">
              <div className="main-post">
      <h3>Lorem Ipsum: When to, and not to use it</h3>
      <h5>
        Post by <span>@TeddyWebdev</span> - 02/10/2022
      </h5>
      <p>
        Do you like cheese Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nulla inventore deleniti deserunt similique!
      
  
        The toppings you may choose Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Voluptas tempora, numquam adipisci laborum odio
        dolores.
      

        Do you like cheese Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nulla inventore deleniti deserunt similique!
      
        The toppings you may choose Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Voluptas tempora, numquam adipisci laborum odio
        dolores.
      
        Do you like cheese Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nulla inventore deleniti deserunt similique!
      
        <figure className="figure-img iframe">
        <iframe
          src="https://www.youtube.com/embed/vk_xq1P7vIU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="img-responsive"
        />
        
      </figure>


      <blockquote className="blockquote">
        I've heard the argument that "lorem ipsum" is effective in wireframing
        or it helps people focus on the actual layout Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quod non odio animi. Voluptate rerum odio
        eius culpa debitis illo possimus sunt.
      </blockquote>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        necessitatibus exercitationem expedita eligendi, dolorum sed
        repudiandae.
      
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo esse
        dolorem debitis illo accusantium.
      
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, a
        natus! Veniam suscipit, unde sint nisi minus dolor officiis doloribus
        assumenda maiores, totam dolore placeat eius.
      </p>
       
    </div>
    <div className="post-shares sticky-shares">
      <a href="facebook.com" className="share-facebook">
        <i class="ri-facebook-box-fill"></i>
      </a>
      <a href="twitter.com" className="share-twitter">
        <i class="ri-twitter-fill"></i>
      </a>
      <a href="pinterest.com" className="share-pinterest">
        <i class="ri-pinterest-fill"></i>
      </a>
      <a href="linkedin.com" className="share-linkedin">
        <i class="ri-linkedin-box-fill"></i>
      </a>
      <a href="dribble.com" className="share-google-plus">
        <i class="ri-dribbble-fill"></i>
      </a>
    </div>
              </div>
            </div>

            <OtherSection />
          </div>
        </div>
      </div>
    
    <div>
      
    </div>
    </>
  )
}

export default Big;



function OtherSection () {
  const [postItems, /* setPostItems */] = useState (products);
  return (
    <div className="col-md-4">
              <div className="aside-widget">
                <div className="section-title">
                  <SectionTitle title="Most Asked For" />
                  
                </div>

                <PostWidget items={postItems}/>
              </div>
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
  );
}



function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "" : ""}>
      <Link to={to} {...props}>
        {" "}
        {children}{" "}
      </Link>
    </li>
  );
}
function SectionTitle(props) {
  return (
    <div className="section-title">
      <h2>{props.title}</h2>
    </div>
  );
}

