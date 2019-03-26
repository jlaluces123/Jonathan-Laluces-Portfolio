import React from "react";
import "../styles/Blog.css";

import Backend from "../images/back-end.jpg";

export const Blog = props => {
  return (
    <div className = "blog-wrapper">

      <h1 className = "blog-wrapper-header">Writing</h1>

      <div className = "article-wrapper">
        <article className = "blog-box-wrapper">
          <div className = "blog-image">          
            <a href = "https://medium.com/@jlalucescareer123/3-things-i-wish-i-could-tell-myself-to-prep-for-coding-bootcamp-c6d4dc6aa787" target = "_blank">
              <img className = "blog-cover" src = {Backend} alt = "back-end code" />
            </a>
          </div>

          <p className = "date">Mar 22, 2019</p>
          <h3 className = "blog-title">
            <a className = "title-link" href = "https://medium.com/@jlalucescareer123/3-things-i-wish-i-could-tell-myself-to-prep-for-coding-bootcamp-c6d4dc6aa787" target = "_blank">
              3 Things I Wish I Could Tell Myself To Prep for Coding Bootcamp
            </a>
          </h3>
          <p className = "blog-description">
            Before we begin, let me introduce myself! My name is Jonathan, no “h” before the “n”, 
            and yes I do go by “Jon” if you like. I joined Lambda School a month after 
            graduating high school in 2018, and have been a student at the Lambda School 
            Web Development Program for over 6 months.
          </p>
        </article>
      </div>
    </div>
  );
};