import React from 'react'
import { Link } from 'react-router-dom';

const MedPost = ({items}) => {
    return (
      <div>
      
        
          {items.map((postItems, index) => {
            const {id,type,dates,image,smallDesc} = postItems;
          return (
          <>
          <article key={id}>
           <div className="col-md-4"> 
          <div className="post">
          <Link id='MedImg' to={`/blog-post/${id}`} key={index} className="post-img">
            <img src={image} alt="img" />
          </Link>
          <div className="post-body">
            <div className="post-meta">
              <Link to="/category" className="post-category cat-1">
                {type}
              </Link>
              <span className="post-date">{dates}</span>
            </div>
            <h3 className="post-title">
            <Link to={`/blog-post/${id}`} key={index}>
                {/* PageDraw UI Builder Turns Your website Design Mockup Into Xode
                Automaticaly */}
                {smallDesc}
              </Link>
            </h3>
          </div> 
          </div>
          </div>
          </article>
          </>
          )
          })}
        
      
      </div>
    );
  };

export default MedPost;