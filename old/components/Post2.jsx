import React from 'react'
import { Link } from 'react-router-dom';

function Post2() {
    return (
      <div className="col-md-6">
        <div className="post">
          <Link to="/blog-post" className="post-img">
            <img src={JavaImg} alt="" />
          </Link>
          <div className="post-body">
            <div className="post-meta">
              <Link to="blog-ost" className="post-category cat-4">
                CSS
              </Link>
              <span className="post-date">March 27, 2022</span>
            </div>
            <h3 className="post-title">
              <Link to="blog-post">CSS Float: A Tutorial</Link>
            </h3>
          </div>
        </div>
      </div>
    );
  }
  

export default Post2