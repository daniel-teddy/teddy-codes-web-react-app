import React from "react";
//import { Link } from 'react-router-dom';
function About() {
  return (
    <>
      <div>
        <div className="mt-8 p-8 flex flex-col items-center justify-center">
          <div className="">
            <h1>About Us</h1>
          </div>
          <div className="p-8 flex items-start justify-center flex-col">
            <div className="mb-8">
              Welcome to TeddyCodesWeb, a blog dedicated to providing valuable
              and informative content about web development technologies such as
              HTML, CSS, JavaScript, and PHP and more. As a self-taught web
              developer from Africa, I understand the importance of having
              access to quality resources to improve your coding skills.
            </div>
            <div className="mb-8">
              Here on TeddyCodesWeb, you’ll find in-depth blog posts and video
              tutorials that cover various coding topics, including useful
              coding projects and source codes that you can use for free or pay
              for. My goal is to empower others to learn and excel in the world
              of web development, which is why I make all my content available
              to anyone who wants to learn.
            </div>
            <div className="mb-8">
              My name is Teddy, and I’ve been learning about web development for
              the last 3 years. I am passionate about the internet and web
              development, which led me to create TeddyCodesWeb. I believe in
              sharing my knowledge and abilities to help others.
            </div>
            <div className="mb-8">
              Don’t forget to check out my{" "}
              <a href="https://instagram.com/oh.dear.teddy"> Youtube</a>,
              where I create videos on coding projects that are interactive and
              will help you learn better, and also follow me on{" "}
              <a href="https://www.instagram.com/oh.dear.teddy?">Instagram </a>
              to stay updated with my latest posts and projects.
            </div>

            
            <div className="mb-8">
              I hope you find my content informative and helpful, and I look
              forward to helping you on your coding journey.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
