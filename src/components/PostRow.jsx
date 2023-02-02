import React from 'react';
import {Link} from 'react-router-dom';

//import data
import Data from '../data';

function PostRow() {
  const RowPost = Data.sort(() => Math.random() - 0.5);
 
  // Shuffle the array
  

  // Select the first 10 elements
 let selectedElements = RowPost.slice(0, 5);
  console.log(selectedElements);

  return (
    <>
    <div className='this overflow-y-scroll'>
    {selectedElements.map((item, index) =>{
        return(
          <Link to={`/explore/${item.id}`} className="" key={index}>
            <div className="col-md-12">
      <div className="post post-row">
        <div  className="post-img">
          <img className=' rounded-lg' src={item.image} alt="img" />
        </div>
        <div className="post-body">
          <div className="post-meta">
            <div className="post-category cat-2 w-fit" >
              {item.type}
            </div>
            <span className="post-date">{item.date}</span>
          </div>
          <h3 className="post-title">
            <div>
              {item.title}
            </div>
          </h3>
          <span className="post-date font-normal">Author: {item.author}</span>
          <p className=''>
            {item.description}
          </p>
        </div>
      </div>
    </div>
    </Link>
        );
    })}
    </div>
    </>
    
  );
}

export default PostRow