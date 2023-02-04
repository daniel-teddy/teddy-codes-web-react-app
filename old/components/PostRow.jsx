import React from 'react'
import RowImg from "../img/xpost-4.jpg.pagespeed.ic.5tBCPmCJW-.webp";
import { Link} from 'react-router-dom';

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

export default PostRow