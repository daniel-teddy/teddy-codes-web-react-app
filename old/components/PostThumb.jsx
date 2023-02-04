import React from 'react'
import { Link } from 'react-router-dom';

function PostThumb() {
    return (
      <div className="post post-thumb">
        <Link to="/blog-post" className="post-img" >
          <img src={JavaImg} alt="" />
        </Link>
        <div className="post-body">
          <div className="post-meta">
            <Link to="/reactLib" className="post-category cat-3">
              React JS
            </Link>
            <span className="post-date">March 27, 2022</span>
          </div>
          <h3 className="post-title">
            <Link to="/blog-post">
              Chrome Extension Protects Against JavaScript Side-Chanel Criminal
              Attacks
            </Link>
          </h3>
        </div>
      </div>
    );
  }

export default PostThumb