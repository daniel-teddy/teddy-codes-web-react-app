import React from "react";
// import data
import Data from "../data";
// import use params
import { useParams } from "react-router-dom";
//import Link
import { Link, useMatch, useResolvedPath } from "react-router-dom";
//import usestate
import { useState } from "react";

//import AD
import Advertisement from "../assets/img/xad-1.jpg.pagespeed.ic.qQJhsdJdF0.webp";

//import PostRow
import PostRow from "../components/PostRow";
import PopUp from "../components/PopUp";

const ItemsDetails = () => {
  const { id } = useParams();
  const item = Data.find((item) => {
    // get the  house id
    return item.id === parseInt(id);
  });
  //console.log(item);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [postCheck] = useState(true);

  //const isPost = Data.filter((item) => item.type !== "post");
 /*  const [isPost, setIsPost] = useState(false)

  if (item.type === 'post') {
    setIsPost(true);
    console.log(isPost);
  } else {
    setIsPost(false);
    console.log(isPost);
  } */

  return (
    <div>
      <header id="header">
        <div
          className="p-5 w-fit bg-slate-100 flex items-center justify-center"
          id="post-header"
        >
          <div className="background-img">
            <img src={item.image} className="rounded-xl" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-10  flex items-center justify-between">
                <h1>{item.title}</h1>
                <div className="post-meta flex items-center justify-center flex-col">
                  <div className="flex items-center justify-center">
                    <div className="w-fit post-category cat-2">{item.type}</div>
                    <div className="w-24 post-category cat-3">
                      $ {item.price}
                    </div>
                  </div>
                  <span className="post-date mt-4">{item.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="section-row sticky-container">
                <div className="main-post">
                  <h3>{item.title}</h3>
                  <h5 className="mb-6 flex items-center justify-center">
                    Post by
                    <a href={item.authorLink} className=" bg-slate-800 text-slate-100 rounded-md ml-4 w-fit p-2 text-2xl font-bold hover:text-slate-100 hover:text-3xl hover:no-underline transition">
                      @ {item.author}
                    </a>
                    <div className="ml-8">{item.date}</div>
                  </h5>
                  <div>
                    <div className="mb-8">{item.description}</div>
                    <figure className="figure-img iframe">
                      <iframe
                        src={item.iframeLink}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="img-responsive w-96 rounded-xl"
                      />
                    </figure>
                    <blockquote className="blockquote">{item.quote}</blockquote>
                    <div className="mb-8 ">
                      {item.largeDesc.FirstlargeDesc} <br/>
                      {item.largeDesc.SecondlargeDesc} <br/>
                      {item.largeDesc.ThirdlargeDesc} <br/>
                      {item.largeDesc.FourthlargeDesc} <br/>
                    </div>

                    
                      <div className="">
                        {postCheck && (
                          <button
                            onClick={() => setButtonPopup(true)}
                            className="w-fit flex items-center justify-center border mt-6 border-slate-800 text-slate-100 p-4 font-bold text-2xl hover:text-green-400 rounded-lg cursor-pointer bg-slate-600"
                          >
                            Get This{" "}
                          </button>
                        )}
                      </div>
                    
                  </div>
                </div>
                <div className="post-shares sticky-shares">
                  <a href="https://facebook.com" className="share-facebook">
                    <i className="ri-facebook-box-fill"></i>
                  </a>
                  <a href="https://twitter.com" className="share-twitter">
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="https://pinterest.com" className="share-pinterest">
                    <i className="ri-pinterest-fill"></i>
                  </a>
                  <a href="https://linkedin.com" className="share-linkedin">
                    <i className="ri-linkedin-box-fill"></i>
                  </a>
                  <a href="https://dribble.com" className="share-google-plus">
                    <i className="ri-dribbble-fill"></i>
                  </a>
                </div>
              </div>
            </div>

            <OtherSection />
          </div>
        </div>
      </div>

      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 className="mt-16">This is the content for pop up</h3>
        <form
          className="flex flex-col items-center justify-center"
          name="get-this-code"
          
        >
          <div className="field flex w-full pl-4 pr-4 flex-col items-start justify-center">
            <label className="font-semibold text-xxl" htmlFor="FileName">
              File Name
            </label>
            <input
              className="w-full p-4 mt-2 font-medium bg-slate-200 rounded-sm border-slate-800"
              type="text"
              name="FileName"
              value={item.title}
              required
            />
            <label className="font-semibold text-xxl mt-5" htmlFor="UserEmail">
              Email
            </label>
            <input
              className="w-full p-4 mt-2 font-medium bg-slate-200 rounded-sm border-slate-800"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            className="w-fit flex items-center justify-center border mt-6 border-slate-800 text-slate-100 p-4 font-bold text-2xl hover:text-green-400 rounded-lg cursor-pointer bg-slate-600"
            type="submit"
          >
            Get Files
          </button>
        </form>
      </PopUp>
    </div>
  );
};

export default ItemsDetails;

function OtherSection() {
  /* const [postItems  setPostItems ] = useState(products); */
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <SectionTitle title="Most Read" />
              </div>
              <PostRow />

              <div className="col-md-12">
                <div className="section-row"></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="aside-widget text-center">
              {/* advertisement section */}
              <a className="aaa" href="https://advertiser.website">
                <img src={Advertisement} alt="" />
              </a>
            </div>
            <div className="aside-widget">
              <div className="section-title">
                <h2>Categories</h2>
              </div>
              <SmallCat />
            </div>

            <div className="aside-widget">
              <div className="section-title">
                <SectionTitle title="More " />
              </div>
              <div className="tags-widget">
                <ul>
                  <CustomLink to="/explore/arduinos">Arduino</CustomLink>
                  <CustomLink to="/explore/tutorials">Tutorials</CustomLink>
                  <CustomLink to="/explore/javascript">JavaScript</CustomLink>
                  <CustomLink to="/explore/games">Games</CustomLink>
                  <CustomLink to="/explore/discover">Discover</CustomLink>
                  <CustomLink to="/explore/chrome">Extensions</CustomLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "" : ""}>
      <Link to={to} {...props}>
        {" "}
        {children}{" "}
      </Link>
    </li>
  );
}

function SectionTitle(props) {
  return (
    <div className="section-title">
      <h2>{props.title}</h2>
    </div>
  );
}

function SmallCat() {
  return (
    <div className="category-widget">
      <ul>
        <CustomLink to="/explore/webdesign" className="cat-1">
          Web Design
          <span>-</span>
        </CustomLink>
        <CustomLink to="/explore/javascript" className="cat-2">
          JavaScript
          <span>-</span>
        </CustomLink>
        <CustomLink to="/explore/css" className="cat-3">
          CSS
          <span>-</span>
        </CustomLink>
        <CustomLink to="/explore/reactlib" className="cat-4">
          ReactJS
          <span>-</span>
        </CustomLink>
      </ul>
    </div>
  );
}
