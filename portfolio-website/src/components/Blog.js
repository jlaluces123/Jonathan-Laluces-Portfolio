import React from "react";
import "../styles/Blog.css";

import Backend from "../images/back-end.jpg";

export const Blog = props => {
  return (
    <div className = "blog-wrapper">

      <h1 className = "blog-wrapper-header">Writing</h1>

      <article className = "blog-box-wrapper">

        <div className = "blog-image">          
          <a href = "https://medium.com/@jlalucescareer123/3-things-i-wish-i-could-tell-myself-to-prep-for-coding-bootcamp-c6d4dc6aa787" target = "_blank">
            <img className = "blog-cover" src = {Backend} alt = "back-end code" />
          </a>
        </div>


      </article>
    </div>
  );
};