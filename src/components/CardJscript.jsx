import React from "react";
import { Link } from "react-router-dom";
//import image
//import ItemImg from "../assets/img/card-item-3.jpg";
//import data
import Data from "../data";


function CardJscript() {
    const Webdev = Data.filter(item => 
        item.category === 'javascript');
   
    // Shuffle the array
    Webdev.sort(() => Math.random() - 0.5);

    // Select the first 10 elements
   let selectedElements = Webdev.slice(0, 9);
    console.log(selectedElements);
        //console.log(Webdev);
  return (
    <div>
      {selectedElements.map((item, index) => {
        
        return (
          <Link to={`/explore/${item.id}`} key={index}>
            <article>
              <div className="col-md-4">
                <div className="post">
                  <div className="post-img">
                    <img src={item.image} className="rounded-lg" alt="img" />
                  </div>
                  <div className="post-body">
                    <div className="post-meta">
                      <div className="post-category cat-1 w-fit">
                        {item.type}
                      </div>
                      <span className="post-date">Price: $ {item.price}</span>
                      <span className="post-date ml-10"> {item.date}</span>
                    </div>
                    <h3 className="post-title">
                      <div >" {item.title} "</div>
                    </h3>
                    
                      <span className="post-date font-normal">Author: {item.author}</span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
}

export default CardJscript