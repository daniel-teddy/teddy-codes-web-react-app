import React from 'react'
import { Link } from 'react-router-dom';

function Post(props) {
  return (
    <div className="col-md-6">
      <div className="post post-thumb">
        <Link to="/blog-post" className="post-img" href="https://instagram.com">
          <img src={props.Img} alt="" />
        </Link>
        <div className="post-body">
          <div className="post-meta">
            <Link href="/category" className={props.class}>
              {props.type}
            </Link>
            <span className="post-date">{props.date}</span>
          </div>
          <h3 className="post-title">
            <Link href="blog-post">
            {props.desc}
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Post