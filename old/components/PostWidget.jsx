import React from "react";
import { Link } from "react-router-dom";


const PostWidget = ({ items }) => {
  return (
    <div className="post post-widget">
      {items.map((postItems) => {
        const { id, image, smallDesc } = postItems;
        return (
          <article key={id}>
            <Link to={`/single-item/${id}`} className="post-img">
              <img src={image} alt="" />
            </Link>
            <div className="post-body">
              <h3 className="post-title">
                <Link to={`/single-item/${id}`}>
                  {smallDesc}
                </Link>
              </h3>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default PostWidget;
