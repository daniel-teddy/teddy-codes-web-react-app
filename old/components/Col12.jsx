import React from 'react'
import JavaImg from "../img/xpost-1.jpg.pagespeed.ic.2GXRfHYjOg.webp";

function Col12() {
    return (
      <div className="post post-thumb">
        <a href="https://www.youtube.com" className="post-img" >
          <img src={JavaImg} alt="" />
        </a>
        <div className="post-body">
            <div className="post-meta">
            <a href="https://www.youtube.com" className="post-category cat-3">
              Bro-Coders
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

export default Col12