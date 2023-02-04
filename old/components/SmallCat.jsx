import React from "react";
import CustomLink from "./CustomLink"
function SmallCat() {
  return (
    <div className="category-widget">
      <ul>
        <CustomLink to="/webdesign" className="cat-1">
          Web Design
          <span>340</span>
        </CustomLink>
        <CustomLink to="/javascript" className="cat-2">
          JavaScript
          <span>71</span>
        </CustomLink>
        <CustomLink to="/css" className="cat-3">
          CSS
          <span>41</span>
        </CustomLink>
        <CustomLink to="/reactlib" className="cat-4">
          ReactJS
          <span>66</span>
        </CustomLink>
      </ul>
    </div>
  );
}

export default SmallCat;
